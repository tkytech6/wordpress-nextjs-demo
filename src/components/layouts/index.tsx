import Link from "next/link";
import React from "react";

import categories from "~prevals/categories.preval";
import latestPosts from "~prevals/latest-posts.preval";

type Props = {};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <header id="header" itemType="http://schema.org/WPHeader" role="banner">
        <div className="wrap">
          <h1 id="logo" itemProp="headline">
            <Link href="/">
              <a>WordPress Next.js Demo</a>
            </Link>
          </h1>
        </div>
      </header>

      <div id="content">
        <div className="wrap">
          <div
            className="col-md-8"
            id="main"
            itemProp="mainContentOfPage"
            itemType="http://schema.org/Blog"
            role="main"
          >
            <div className="main-inner">{children}</div>
          </div>

          <div className="col-md-4" id="side" itemType="http://schema.org/WPSideBar" role="complementary">
            <div className="side-inner">
              <div className="side-widget-area">
                <div className="widget_search side-widget" id="search-2">
                  <div className="side-widget-inner">
                    <form action="http://test-blog.local/" id="searchform" method="get" role="search">
                      <div>
                        <input id="s" name="s" type="text" />
                        <button id="searchsubmit" type="submit">
                          
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="widget_recent_entries side-widget" id="recent-posts-2">
                  <div className="side-widget-inner">
                    <h4 className="side-title">
                      <span className="side-title-inner">最近の投稿</span>
                    </h4>
                    <ul>
                      {latestPosts.map((post) => (
                        <li key={post.id}>
                          <Link href={post.link}>
                            <a>{post.title.rendered}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="widget_archive side-widget" id="archives-2">
                  <div className="side-widget-inner">
                    <h4 className="side-title">
                      <span className="side-title-inner">アーカイブ</span>
                    </h4>
                    APIがないので自前で実装する必要あり (wp_get_archives)
                  </div>
                </div>
                <div className="widget_categories side-widget" id="categories-2">
                  <div className="side-widget-inner">
                    <h4 className="side-title">
                      <span className="side-title-inner">カテゴリー</span>
                    </h4>
                    <ul>
                      {categories.map((category) => (
                        <li key={category.id}>
                          <Link href={category.link}>
                            <a>{category.name}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer id="footer">
        <div className="footer-02">
          <div className="wrap">
            <p className="footer-copy">© Copyright 2021 WordPress Demo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};
