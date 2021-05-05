export { default } from "~/components/pages/Posts";

import { GetServerSideProps } from "next";

import { fetchPosts } from "~/components/pages/Posts";

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context);
  const search = String(context.query.s);
  const postsResponse = await fetchPosts({ search });

  return {
    props: {
      posts: postsResponse.posts,
      search,
      totalPages: parseInt(postsResponse.totalPages),
    },
  };
};
