import Link from "next/link";
import React from "react";

type Props = {};

export const Breadcrumb: React.FC<Props> = ({ children }) => {
  return (
    <ol className="breadcrumb clearfix">
      <li itemProp="itemListElement" itemType="https://schema.org/ListItem">
        <Link href="/">
          <a itemProp="item">
            <i className="fa fa-home"></i> <span itemProp="name">ホーム</span>
          </a>
        </Link>
        {" / "}
      </li>
      {children}
    </ol>
  );
};
