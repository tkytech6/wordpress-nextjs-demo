import axios from "axios";
import { format } from "date-fns";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { WP_REST_API_Post, WP_REST_API_Posts, WP_REST_API_Terms } from "wp-types";

import { Breadcrumb } from "~compositions/Breadcrumb";
import { Layout } from "~layouts/index";

type Props = { post: WP_REST_API_Post };

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: "blocking",
    paths: [],
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const { data } = await axios.get<WP_REST_API_Posts>("/posts", { params: { _embed: 1, slug: context.params.slug } });

  return {
    props: {
      post: data[0],
    },
    revalidate: 1,
  };
};

export default function PostPage({ post }: Props) {
  const categories = (post?._embedded?.["wp:term"]?.[0] || []) as WP_REST_API_Terms;
  const tags = (post?._embedded?.["wp:term"]?.[1] || []) as WP_REST_API_Terms;

  return (
    <Layout>
      <Head>
        <title>{post.title.rendered}</title>
      </Head>

      <Breadcrumb>
        <>
          <li itemProp="itemListElement" itemType="https://schema.org/ListItem">
            <Link href={`/category/${categories?.[0]?.name}`}>
              <a itemProp="item">
                <i className="fa fa-folder"></i> <span itemProp="name">{categories?.[0]?.name}</span>{" "}
              </a>
            </Link>
            /{" "}
          </li>
          <li itemProp="itemListElement" itemType="https://schema.org/ListItem">
            <i className="fa fa-file-text"></i> <span itemProp="name">{post.title.rendered}</span>
          </li>
        </>
      </Breadcrumb>

      <article
        className={`post-${post.id} post-1241 post type-post status-publish format-standard hentry`}
        id={`post-${post.id}`}
      >
        <header className="post-header">
          <ul className="post-meta list-inline">
            <li className="date updated">
              <i className="fa fa-clock-o"></i> {format(new Date(post.date), "yyyy.MM.dd")}
            </li>
          </ul>
          <h1 className="post-title">{post.title.rendered}</h1>
        </header>

        <section className="post-content" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />

        <footer className="post-footer">
          <ul className="post-footer-list">
            <li className="cat">
              <i className="fa fa-folder"></i>{" "}
              {categories.map((category) => (
                <Link href={`/category/${category.name}`} key={category.id}>
                  <a>{category.name}</a>
                </Link>
              ))}
            </li>
            <li className="tag">
              <i className="fa fa-tag"></i>
              {tags.map((tag, index) => (
                <span key={tag.id}>
                  <Link href={`/tag/${tag.name}`}>
                    <a>{tag.name}</a>
                  </Link>
                  {tags.length - 1 !== index ? ", " : ""}
                </span>
              ))}
            </li>
          </ul>
        </footer>

        <div className="post-share">
          <h4 className="post-share-title">SNSでもご購読できます。</h4>

          <aside className="post-sns">
            <ul>
              <li className="post-sns-twitter">
                <a href="#">
                  <span>Twitter</span>でフォローする
                </a>
              </li>
              <li className="post-sns-feedly">
                <a href="#">
                  <span>Feedly</span>でフォローする
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </article>
    </Layout>
  );
}
