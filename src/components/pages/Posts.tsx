import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { WP_REST_API_Categories, WP_REST_API_Posts, WP_REST_API_Tags } from "wp-types";

import { axios } from "~/libs/axios";
import { Breadcrumb } from "~compositions/Breadcrumb";
import { PostListItem } from "~compositions/PostListItem";
import { Layout } from "~layouts/index";

type Props = {
  category?: string;
  page: number;
  posts: WP_REST_API_Posts;
  search?: string;
  stickyPosts?: WP_REST_API_Posts;
  tag?: string;
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

  try {
    const category = context.params?.category ? String(context.params.category) : null;
    const categoryId = category ? await fetchCategoryId(category) : null;

    const tag = context.params?.tag ? String(context.params.tag) : null;
    const tagId = tag ? await fetchTagId(tag) : null;

    const hasSticky = !categoryId && !tagId && page === 1;
    const stickyPostsResponse = hasSticky ? await fetchPosts({ _embed: 1, sticky: 1 }) : { posts: [] };

    const postsResponse = await fetchPosts({ _embed: 1, categories: categoryId, page, tags: tagId });

    return {
      props: {
        category,
        page,
        posts: postsResponse.posts,
        stickyPosts: stickyPostsResponse.posts,
        tag,
        totalPages: parseInt(postsResponse.totalPages),
      },
      revalidate: 1,
    };
  } catch {
    return { notFound: true };
  }
};

const fetchCategoryId = async (slug: string) => {
  const { data } = await axios.get<WP_REST_API_Categories>("/categories", { params: { slug } });
  if (!data[0]) throw new Error("Category Not Found");

  return data[0].id;
};

const fetchTagId = async (slug: string) => {
  const { data } = await axios.get<WP_REST_API_Tags>("/tags", { params: { slug } });
  if (!data[0]) throw new Error("Tag Not Found");

  return data[0].id;
};

export const fetchPosts = async (params = {}) => {
  const { data, headers } = await axios.get<WP_REST_API_Posts>("/posts", { params });
  return { posts: data, totalPages: headers["x-wp-totalpages"] };
};

export default function Home({ category, stickyPosts, posts, page, totalPages, search, tag }: Props) {
  const router = useRouter();

  const renderPaginationItem = (i: number) => {
    if (i === page) {
      return (
        <span className="current" key={i}>
          {i}
        </span>
      );
    }

    const path = router.asPath.split("/page/")[0];
    return (
      <Link href={`${path === "/" ? "" : path}/page/${i}`} key={i}>
        <a>{i}</a>
      </Link>
    );
  };

  const renderBreadcrumb = () => {
    if (category) {
      return (
        <Breadcrumb>
          <li itemProp="itemListElement" itemType="https://schema.org/ListItem">
            <i className="fa fa-folder"></i> <span itemProp="name">{category}</span>
          </li>
        </Breadcrumb>
      );
    }

    return null;
  };

  const renderPagination = () => {
    if (totalPages === 1) return null;

    return (
      <div className="pagination">{new Array(totalPages).fill(null).map((_, i) => renderPaginationItem(i + 1))}</div>
    );
  };

  return (
    <Layout>
      <Head>
        <title>{category || tag || (search ? `「${search}」の検索結果` : "WordPress Next.js Demo")}</title>
      </Head>

      {renderBreadcrumb()}

      {(category || tag) && (
        <section className="cat-content">
          <header className="cat-header">
            <h1 className="post-title">{category || tag}</h1>
          </header>
        </section>
      )}

      {search && (
        <section className="cat-content">
          <header className="cat-header">
            <h1 className="post-title">「{search}」の検索結果</h1>
          </header>
        </section>
      )}

      <div className="post-loop-wrap">
        {stickyPosts?.map((post) => (
          <PostListItem key={post.id} post={post} />
        ))}
        {posts.map((post) => (
          <PostListItem key={post.id} post={post} />
        ))}
      </div>
      {renderPagination()}
    </Layout>
  );
}
