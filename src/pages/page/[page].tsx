import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import React from "react";
import { WP_REST_API_Posts } from "wp-types";

import { Post } from "~compositions/Post";
import { Layout } from "~layouts/index";

type Props = {
  page: number;
  posts: WP_REST_API_Posts;
  stickyPosts: WP_REST_API_Posts;
  totalPages: number;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: "blocking",
    paths: [],
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const page = parseInt(String(context.params?.page)) || 1;

  const postsResponse = await fetchPosts({ _embed: 1, page });
  const stickyPostsResponse = page === 1 ? await fetchPosts({ _embed: 1, sticky: 1 }) : { posts: [] };

  return {
    props: {
      page,
      posts: postsResponse.posts,
      stickyPosts: stickyPostsResponse.posts,
      totalPages: parseInt(postsResponse.totalPages),
    },
    revalidate: 1,
  };
};

const fetchPosts = async (params = {}) => {
  const { data, headers } = await axios.get<WP_REST_API_Posts>("/posts", { params });
  return { posts: data, totalPages: headers["x-wp-totalpages"] };
};

export default function Home({ stickyPosts, posts, page, totalPages }: Props) {
  const renderPaginationItem = (i: number) => {
    if (i === page) {
      return (
        <span className="current" key={i}>
          {i}
        </span>
      );
    }

    return (
      <Link href={`/page/${i}`} key={i}>
        <a>{i}</a>
      </Link>
    );
  };

  const renderPagination = () => {
    if (totalPages === 1) return null;

    return (
      <div className="pagination">{new Array(totalPages).fill(null).map((_, i) => renderPaginationItem(i + 1))}</div>
    );
  };

  return (
    <Layout>
      {stickyPosts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}

      {renderPagination()}
    </Layout>
  );
}
