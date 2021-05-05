import aspectratio from "aspectratio";
import classnames from "classnames";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import type { WP_REST_API_Post } from "wp-types";
type Props = {
  post: WP_REST_API_Post;
};

export const Post: React.VFCX<Props> = ({ post }) => {
  const renderThumbnail = () => {
    const media: any = post?._embedded?.["wp:featuredmedia"]?.[0];
    if (!media) return null;

    const [width, height] = aspectratio.resize(media.media_details.width, media.media_details.height, 304, 214);
    return (
      <div className="post-thumbnail">
        <Link href={media.link}>
          <a>
            <Image height={height} src={media.source_url} width={width} />
          </a>
        </Link>
      </div>
    );
  };

  const [__html, moreContent] = post.content.rendered.split("<p><!--more--></p>");

  return (
    <article
      className={classnames(
        `post-${post.id} post type-post status-publish format-standard sticky hentry tag-template tag-sticky`,
        ...post.categories.map((category) => `category-${category}`)
      )}
      id="post-1241"
    >
      <header className="post-header">
        <ul className="post-meta list-inline">
          <li className="date updated">
            <i className="fa fa-clock-o"></i> {format(new Date(post.date), "yyyy.MM.dd")}
          </li>
        </ul>
        <h2 className="post-title">
          <Link href={post.link}>
            <a>{post.title.rendered}</a>
          </Link>
        </h2>
      </header>

      <section className="post-content">
        {renderThumbnail()}
        <div dangerouslySetInnerHTML={{ __html }} />
        {moreContent && (
          <p>
            <Link href={post.link}>
              <a className="more-link">続きを読む</a>
            </Link>
          </p>
        )}
      </section>
    </article>
  );
};
