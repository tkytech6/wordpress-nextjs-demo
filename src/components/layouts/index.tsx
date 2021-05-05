import Link from "next/link";
import React from "react";

type Props = {};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <header id="header" itemType="http://schema.org/WPHeader" role="banner">
        <div className="wrap">
          <h1 id="logo" itemProp="headline">
            <Link href="/">
              <a>WordPress Next.js</a>
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
            <div className="main-inner">
              <div className="post-loop-wrap">{children}</div>
            </div>
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
                      <li>
                        <a href="http://test-blog.local/hello-world/">Hello world!</a>
                      </li>
                      <li>
                        <a href="http://test-blog.local/%e3%82%82%e3%81%ae%e3%81%99%e3%81%94%e3%81%8f%e9%95%b7%e3%81%84%e6%97%a5%e6%9c%ac%e8%aa%9e%e3%81%ae%e3%82%bf%e3%82%a4%e3%83%88%e3%83%ab%e3%81%8c%e4%bb%98%e3%81%84%e3%81%9f%e8%a8%98%e4%ba%8b%e3%81%ae/">
                          1行分しか想定されていない見出しのデザインだと文字がはみ出してしまってあら大変。ものすごく長い日本語のタイトルが付いた記事の表示テストです。複数行になっても問題ないデザインだといいですね。あと前後の記事へのリンクを出力している場合や、パンくずリストを実装している場合なども表示にズレがないか確認しておきましょう。
                        </a>
                      </li>
                      <li>
                        <a href="http://test-blog.local/markup-html-tags-and-formatting/">
                          マークアップ: HTML タグとフォーマット
                        </a>
                      </li>
                      <li>
                        <a href="http://test-blog.local/markup-image-alignment/">マークアップ: 画像の配置</a>
                      </li>
                      <li>
                        <a href="http://test-blog.local/markup-text-alignment/">マークアップ: テキスト配置</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget_recent_comments side-widget" id="recent-comments-2">
                  <div className="side-widget-inner">
                    <h4 className="side-title">
                      <span className="side-title-inner">最近のコメント</span>
                    </h4>
                    <ul id="recentcomments">
                      <li className="recentcomments">
                        <a href="http://test-blog.local/hello-world/#comment-1">Hello world!</a> に{" "}
                        <span className="comment-author-link">
                          <a className="url" href="https://wordpress.org/" rel="external nofollow ugc">
                            A WordPress Commenter
                          </a>
                        </span>{" "}
                        より
                      </li>
                      <li className="recentcomments">
                        <a href="http://test-blog.local/edge-case-no-content/#comment-5">
                          極端な例: コンテンツのない投稿
                        </a>{" "}
                        に{" "}
                        <span className="comment-author-link">
                          <a className="url" href="http://example.org/" rel="external nofollow ugc">
                            山田太郎
                          </a>
                        </span>{" "}
                        より
                      </li>
                      <li className="recentcomments">
                        <a href="http://test-blog.local/template-password-protected/#comment-49">
                          保護中: テンプレート: パスワードで保護されたページ
                        </a>{" "}
                        に{" "}
                        <span className="comment-author-link">
                          <a className="url" href="http://example.org/" rel="external nofollow ugc">
                            山田太郎
                          </a>
                        </span>{" "}
                        より
                      </li>
                      <li className="recentcomments">
                        <a href="http://test-blog.local/template-comments/#comment-43">テンプレート: コメント</a> に{" "}
                        <span className="comment-author-link">
                          <a className="url" href="http://example.org/" rel="external nofollow ugc">
                            紫式部
                          </a>
                        </span>{" "}
                        より
                      </li>
                      <li className="recentcomments">
                        <a href="http://test-blog.local/template-comments/#comment-42">テンプレート: コメント</a> に{" "}
                        <span className="comment-author-link">
                          <a className="url" href="http://example.org/" rel="external nofollow ugc">
                            紫式部
                          </a>
                        </span>{" "}
                        より
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget_archive side-widget" id="archives-2">
                  <div className="side-widget-inner">
                    <h4 className="side-title">
                      <span className="side-title-inner">アーカイブ</span>
                    </h4>
                    <ul>
                      <li>
                        <a href="http://test-blog.local/2020/11/">2020年11月</a>
                      </li>
                      <li>
                        <a href="http://test-blog.local/2014/01/">2014年1月</a>
                      </li>
                      <li>
                        <a href="http://test-blog.local/2013/01/">2013年1月</a>
                      </li>
                      <li>
                        <a href="http://test-blog.local/2012/03/">2012年3月</a>
                      </li>
                      <li>
                        <a href="http://test-blog.local/2012/01/">2012年1月</a>
                      </li>
                      <li>
                        <a href="http://test-blog.local/2011/03/">2011年3月</a>
                      </li>
                      <li>
                        <a href="http://test-blog.local/2010/10/">2010年10月</a>
                      </li>
                      <li>
                        <a href="http://test-blog.local/2010/09/">2010年9月</a>
                      </li>
                      <li>
                        <a href="http://test-blog.local/2010/08/">2010年8月</a>
                      </li>
                      <li>
                        <a href="http://test-blog.local/2010/07/">2010年7月</a>
                      </li>
                      <li>
                        <a href="http://test-blog.local/2010/06/">2010年6月</a>
                      </li>
                      <li>
                        <a href="http://test-blog.local/2010/05/">2010年5月</a>
                      </li>
                      <li>
                        <a href="http://test-blog.local/2010/04/">2010年4月</a>
                      </li>
                      <li>
                        <a href="http://test-blog.local/2010/03/">2010年3月</a>
                      </li>
                      <li>
                        <a href="http://test-blog.local/2010/02/">2010年2月</a>
                      </li>
                      <li>
                        <a href="http://test-blog.local/2010/01/">2010年1月</a>
                      </li>
                      <li>
                        <a href="http://test-blog.local/2009/10/">2009年10月</a>
                      </li>
                      <li>
                        <a href="http://test-blog.local/2009/09/">2009年9月</a>
                      </li>
                      <li>
                        <a href="http://test-blog.local/2009/08/">2009年8月</a>
                      </li>
                      <li>
                        <a href="http://test-blog.local/2009/07/">2009年7月</a>
                      </li>
                      <li>
                        <a href="http://test-blog.local/2009/06/">2009年6月</a>
                      </li>
                      <li>
                        <a href="http://test-blog.local/2009/05/">2009年5月</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget_categories side-widget" id="categories-2">
                  <div className="side-widget-inner">
                    <h4 className="side-title">
                      <span className="side-title-inner">カテゴリー</span>
                    </h4>
                    <ul>
                      <li className="cat-item cat-item-1">
                        <a href="http://test-blog.local/category/uncategorized/">Uncategorized</a>
                      </li>
                      <li className="cat-item cat-item-2">
                        <a href="http://test-blog.local/category/%e3%81%82%e3%81%95%e3%81%b2/">あさひ</a>
                      </li>
                      <li className="cat-item cat-item-17">
                        <a href="http://test-blog.local/category/%e3%82%a2%e3%83%a1%e3%83%aa%e3%82%ab/">アメリカ</a>
                      </li>
                      <li className="cat-item cat-item-18">
                        <a href="http://test-blog.local/category/%e3%82%a4%e3%82%bf%e3%83%aa%e3%82%a2/">イタリア</a>
                      </li>
                      <li className="cat-item cat-item-3">
                        <a href="http://test-blog.local/category/%e3%81%84%e3%82%8d%e3%81%af/">いろは</a>
                      </li>
                      <li className="cat-item cat-item-4">
                        <a href="http://test-blog.local/category/%e3%81%86%e3%81%88%e3%81%ae/">うえの</a>
                      </li>
                      <li className="cat-item cat-item-19">
                        <a href="http://test-blog.local/category/%e3%82%a6%e3%82%af%e3%83%a9%e3%82%a4%e3%83%8a/">
                          ウクライナ
                        </a>
                      </li>
                      <li className="cat-item cat-item-5">
                        <a href="http://test-blog.local/category/%e3%81%88%e3%81%84%e3%81%94/">えいご</a>
                      </li>
                      <li className="cat-item cat-item-20">
                        <a href="http://test-blog.local/category/%e3%82%a8%e3%82%b8%e3%83%97%e3%83%88/">エジプト</a>
                      </li>
                      <li className="cat-item cat-item-21">
                        <a href="http://test-blog.local/category/%e3%82%aa%e3%83%bc%e3%82%b9%e3%83%88%e3%83%a9%e3%83%aa%e3%82%a2/">
                          オーストラリア
                        </a>
                      </li>
                      <li className="cat-item cat-item-6">
                        <a href="http://test-blog.local/category/%e3%81%8a%e3%81%8a%e3%81%95%e3%81%8b/">おおさか</a>
                      </li>
                      <li className="cat-item cat-item-22">
                        <a href="http://test-blog.local/category/%e3%82%ab%e3%83%86%e3%82%b4%e3%83%aa%e3%83%bc-1/">
                          カテゴリー 1
                        </a>
                      </li>
                      <li className="cat-item cat-item-23">
                        <a href="http://test-blog.local/category/%e3%82%ab%e3%83%86%e3%82%b4%e3%83%aa%e3%83%bc-1/%e3%82%ab%e3%83%86%e3%82%b4%e3%83%aa%e3%83%bc-2/">
                          カテゴリー 2
                        </a>
                      </li>
                      <li className="cat-item cat-item-24">
                        <a href="http://test-blog.local/category/%e3%82%ab%e3%83%86%e3%82%b4%e3%83%aa%e3%83%bc-1/%e3%82%ab%e3%83%86%e3%82%b4%e3%83%aa%e3%83%bc-3/">
                          カテゴリー 3
                        </a>
                      </li>
                      <li className="cat-item cat-item-25">
                        <a href="http://test-blog.local/category/cat-a/">カテゴリー A</a>
                      </li>
                      <li className="cat-item cat-item-26">
                        <a href="http://test-blog.local/category/cat-b/">カテゴリー B</a>
                      </li>
                      <li className="cat-item cat-item-27">
                        <a href="http://test-blog.local/category/cat-c/">カテゴリー C</a>
                      </li>
                      <li className="cat-item cat-item-28">
                        <a href="http://test-blog.local/category/%e3%82%ab%e3%83%8a%e3%83%80/">カナダ</a>
                      </li>
                      <li className="cat-item cat-item-7">
                        <a href="http://test-blog.local/category/%e3%81%8b%e3%82%8f%e3%81%9b/">かわせ</a>
                      </li>
                      <li className="cat-item cat-item-8">
                        <a href="http://test-blog.local/category/%e3%81%8d%e3%81%a3%e3%81%a6/">きって</a>
                      </li>
                      <li className="cat-item cat-item-29">
                        <a href="http://test-blog.local/category/%e3%82%ad%e3%83%a5%e3%83%bc%e3%83%90/">キューバ</a>
                      </li>
                      <li className="cat-item cat-item-9">
                        <a href="http://test-blog.local/category/%e3%81%8f%e3%82%89%e3%81%b6/">くらぶ</a>
                      </li>
                      <li className="cat-item cat-item-30">
                        <a href="http://test-blog.local/category/%e3%82%af%e3%83%ad%e3%82%a2%e3%83%81%e3%82%a2/">
                          クロアチア
                        </a>
                      </li>
                      <li className="cat-item cat-item-10">
                        <a href="http://test-blog.local/category/%e3%81%91%e3%81%97%e3%81%8d/">けしき</a>
                      </li>
                      <li className="cat-item cat-item-31">
                        <a href="http://test-blog.local/category/%e3%82%b1%e3%83%8b%e3%82%a2/">ケニア</a>
                      </li>
                      <li className="cat-item cat-item-32">
                        <a href="http://test-blog.local/category/%e3%82%b3%e3%82%b9%e3%82%bf%e3%83%aa%e3%82%ab/">
                          コスタリカ
                        </a>
                      </li>
                      <li className="cat-item cat-item-11">
                        <a href="http://test-blog.local/category/%e3%81%93%e3%81%a9%e3%82%82/">こども</a>
                      </li>
                      <li className="cat-item cat-item-12">
                        <a href="http://test-blog.local/category/%e3%81%95%e3%81%8f%e3%82%89/">さくら</a>
                      </li>
                      <li className="cat-item cat-item-33">
                        <a href="http://test-blog.local/category/%e3%82%b5%e3%83%96/">サブ</a>
                      </li>
                      <li className="cat-item cat-item-13">
                        <a href="http://test-blog.local/category/%e3%81%97%e3%82%93%e3%81%b6%e3%82%93/">しんぶん</a>
                      </li>
                      <li className="cat-item cat-item-14">
                        <a href="http://test-blog.local/category/%e3%81%99%e3%81%9a%e3%82%81/">すずめ</a>
                      </li>
                      <li className="cat-item cat-item-15">
                        <a href="http://test-blog.local/category/%e3%81%9b%e3%81%8b%e3%81%84/">せかい</a>
                      </li>
                      <li className="cat-item cat-item-16">
                        <a href="http://test-blog.local/category/%e3%81%9d%e3%82%8d%e3%81%b0%e3%82%93/">そろばん</a>
                      </li>
                      <li className="cat-item cat-item-34">
                        <a href="http://test-blog.local/category/%e3%83%81%e3%83%a3%e3%83%b3%e3%83%94%e3%82%aa%e3%83%b3%e3%82%b7%e3%83%83%e3%83%97/">
                          チャンピオンシップ
                        </a>
                      </li>
                      <li className="cat-item cat-item-35">
                        <a
                          href="http://test-blog.local/category/%e3%83%86%e3%83%b3%e3%83%97%e3%83%ac%e3%83%bc%e3%83%88/"
                          title="Posts with template-related tests"
                        >
                          テンプレート
                        </a>
                      </li>
                      <li className="cat-item cat-item-36">
                        <a href="http://test-blog.local/category/%e3%83%96%e3%83%ad%e3%82%b0%e3%83%ad%e3%83%bc%e3%83%ab/">
                          ブログロール
                        </a>
                      </li>
                      <li className="cat-item cat-item-67">
                        <a href="http://test-blog.local/category/%e8%a6%aa%e3%81%bb%e3%81%92/%e3%81%bb%e3%81%92-a/">
                          ほげ A
                        </a>
                      </li>
                      <li className="cat-item cat-item-37">
                        <a
                          href="http://test-blog.local/category/%e3%83%9e%e3%83%bc%e3%82%af%e3%82%a2%e3%83%83%e3%83%97/"
                          title="Posts in this category test markup tags and styles."
                        >
                          マークアップ
                        </a>
                      </li>
                      <li className="cat-item cat-item-38">
                        <a
                          href="http://test-blog.local/category/%e3%83%a1%e3%83%87%e3%82%a3%e3%82%a2/"
                          title="Posts that have media-related tests"
                        >
                          メディア
                        </a>
                      </li>
                      <li className="cat-item cat-item-39">
                        <a href="http://test-blog.local/category/%e5%8c%97%e6%b5%b7%e9%81%93/">北海道</a>
                      </li>
                      <li className="cat-item cat-item-40">
                        <a href="http://test-blog.local/category/%e5%a2%be%e7%94%b0%e6%b0%b8%e5%b9%b4%e7%a7%81%e8%b2%a1%e6%b3%95/">
                          墾田永年私財法
                        </a>
                      </li>
                      <li className="cat-item cat-item-68">
                        <a
                          href="http://test-blog.local/category/%e8%a6%aa%e3%82%ab%e3%83%86%e3%82%b4%e3%83%aa%e3%83%bc/child-category-01/"
                          title="This is a description for the Child Category 01."
                        >
                          子カテゴリー 01
                        </a>
                      </li>
                      <li className="cat-item cat-item-69">
                        <a
                          href="http://test-blog.local/category/%e8%a6%aa%e3%82%ab%e3%83%86%e3%82%b4%e3%83%aa%e3%83%bc/child-category-02/"
                          title="This is a description for the Child Category 02."
                        >
                          子カテゴリー 02
                        </a>
                      </li>
                      <li className="cat-item cat-item-70">
                        <a
                          href="http://test-blog.local/category/%e8%a6%aa%e3%82%ab%e3%83%86%e3%82%b4%e3%83%aa%e3%83%bc/child-category-03/"
                          title="This is a description for the Child Category 03."
                        >
                          子カテゴリー 03
                        </a>
                      </li>
                      <li className="cat-item cat-item-71">
                        <a
                          href="http://test-blog.local/category/%e8%a6%aa%e3%82%ab%e3%83%86%e3%82%b4%e3%83%aa%e3%83%bc/child-category-04/"
                          title="This is a description for the Child Category 04."
                        >
                          子カテゴリー 04
                        </a>
                      </li>
                      <li className="cat-item cat-item-72">
                        <a
                          href="http://test-blog.local/category/%e8%a6%aa%e3%82%ab%e3%83%86%e3%82%b4%e3%83%aa%e3%83%bc/child-category-05/"
                          title="This is a description for the Child Category 05."
                        >
                          子カテゴリー 05
                        </a>
                      </li>
                      <li className="cat-item cat-item-73">
                        <a
                          href="http://test-blog.local/category/%e8%a6%aa%e3%82%ab%e3%83%86%e3%82%b4%e3%83%aa%e3%83%bc/child-category-03/grandchild-category/"
                          title="This is a description for the Grandchild Category."
                        >
                          孫カテゴリー
                        </a>
                      </li>
                      <li className="cat-item cat-item-41">
                        <a href="http://test-blog.local/category/%e5%ae%9f%e7%bf%92/">実習</a>
                      </li>
                      <li className="cat-item cat-item-42">
                        <a href="http://test-blog.local/category/%e5%ae%ae%e5%9f%8e/">宮城</a>
                      </li>
                      <li className="cat-item cat-item-43">
                        <a href="http://test-blog.local/category/%e5%b1%b1%e5%bd%a2/">山形</a>
                      </li>
                      <li className="cat-item cat-item-44">
                        <a href="http://test-blog.local/category/%e5%b2%a9%e6%89%8b/">岩手</a>
                      </li>
                      <li className="cat-item cat-item-45">
                        <a href="http://test-blog.local/category/%e5%b9%b3%e7%ad%89%e9%99%a2%e9%b3%b3%e5%87%b0%e5%a0%82/">
                          平等院鳳凰堂
                        </a>
                      </li>
                      <li className="cat-item cat-item-46">
                        <a href="http://test-blog.local/category/%e5%bb%ba%e6%ad%a6%e3%81%ae%e6%96%b0%e6%94%bf/">
                          建武の新政
                        </a>
                      </li>
                      <li className="cat-item cat-item-47">
                        <a href="http://test-blog.local/category/%e5%be%81%e5%a4%b7%e5%a4%a7%e5%b0%86%e8%bb%8d/">
                          征夷大将軍
                        </a>
                      </li>
                      <li className="cat-item cat-item-48">
                        <a href="http://test-blog.local/category/%e5%be%a1%e5%ae%b6%e4%ba%ba/">御家人</a>
                      </li>
                      <li className="cat-item cat-item-49">
                        <a href="http://test-blog.local/category/%e5%bf%9c%e4%bb%81%e3%81%ae%e4%b9%b1/">応仁の乱</a>
                      </li>
                      <li className="cat-item cat-item-50">
                        <a href="http://test-blog.local/category/%e6%87%b2%e3%82%89%e3%81%97%e3%82%81%e3%82%8b/">
                          懲らしめる
                        </a>
                      </li>
                      <li className="cat-item cat-item-51">
                        <a
                          href="http://test-blog.local/category/%e6%8a%95%e7%a8%bf%e3%83%95%e3%82%a9%e3%83%bc%e3%83%9e%e3%83%83%e3%83%88/"
                          title="Posts in this category test post formats."
                        >
                          投稿フォーマット
                        </a>
                      </li>
                      <li className="cat-item cat-item-52">
                        <a
                          href="http://test-blog.local/category/%e6%9c%aa%e5%85%ac%e9%96%8b/"
                          title="Posts in this category test unpublished posts."
                        >
                          未公開
                        </a>
                      </li>
                      <li className="cat-item cat-item-53">
                        <a href="http://test-blog.local/category/%e6%9c%aa%e5%88%86%e9%a1%9e/">未分類</a>
                      </li>
                      <li className="cat-item cat-item-54">
                        <a href="http://test-blog.local/category/%e6%a0%83%e6%9c%a8/">栃木</a>
                      </li>
                      <li className="cat-item cat-item-55">
                        <a
                          href="http://test-blog.local/category/%e6%a5%b5%e7%ab%af%e3%81%aa%e4%be%8b/"
                          title="Posts that have edge-case related tests"
                        >
                          極端な例
                        </a>
                      </li>
                      <li className="cat-item cat-item-56">
                        <a href="http://test-blog.local/category/%e6%b0%97%e3%81%8c%e9%80%b2%e3%81%be%e3%81%aa%e3%81%84/">
                          気が進まない
                        </a>
                      </li>
                      <li className="cat-item cat-item-57">
                        <a href="http://test-blog.local/category/%e6%b6%88%e6%af%92/">消毒</a>
                      </li>
                      <li className="cat-item cat-item-58">
                        <a href="http://test-blog.local/category/%e7%a6%8f%e5%b3%b6/">福島</a>
                      </li>
                      <li className="cat-item cat-item-59">
                        <a href="http://test-blog.local/category/%e7%a7%8b%e7%94%b0/">秋田</a>
                      </li>
                      <li className="cat-item cat-item-60">
                        <a href="http://test-blog.local/category/%e7%be%a4%e9%a6%ac/">群馬</a>
                      </li>
                      <li className="cat-item cat-item-61">
                        <a href="http://test-blog.local/category/%e8%8c%a8%e5%9f%8e/">茨城</a>
                      </li>
                      <li className="cat-item cat-item-63">
                        <a href="http://test-blog.local/category/%e8%a6%aa%e3%82%ab%e3%83%86%e3%82%b4%e3%83%aa%e3%83%bc/">
                          親カテゴリー
                        </a>
                      </li>
                      <li className="cat-item cat-item-62">
                        <a href="http://test-blog.local/category/%e8%a6%aa%e3%81%bb%e3%81%92/">親ほげ</a>
                      </li>
                      <li className="cat-item cat-item-64">
                        <a href="http://test-blog.local/category/%e8%b3%bc%e5%85%a5/">購入</a>
                      </li>
                      <li className="cat-item cat-item-65">
                        <a href="http://test-blog.local/category/%e9%85%8d%e7%bd%ae/">配置</a>
                      </li>
                      <li className="cat-item cat-item-66">
                        <a href="http://test-blog.local/category/%e9%9d%92%e6%a3%ae/">青森</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget_meta side-widget" id="meta-2">
                  <div className="side-widget-inner">
                    <h4 className="side-title">
                      <span className="side-title-inner">メタ情報</span>
                    </h4>
                    <ul>
                      <li>
                        <a href="http://test-blog.local/wp-admin/">サイト管理</a>
                      </li>{" "}
                      <li>
                        <a href="http://test-blog.local/wp-login.php?action=logout&amp;_wpnonce=29cea70848">
                          ログアウト
                        </a>
                      </li>
                      <li>
                        <a href="http://test-blog.local/feed/">投稿フィード</a>
                      </li>
                      <li>
                        <a href="http://test-blog.local/comments/feed/">コメントフィード</a>
                      </li>
                      <li>
                        <a href="https://ja.wordpress.org/">WordPress.org</a>
                      </li>
                    </ul>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
