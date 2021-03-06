import preval from "next-plugin-preval";
import { WP_REST_API_Posts } from "wp-types";

import { axios } from "~/libs/axios";

async function getData() {
  const { data } = await axios.get<WP_REST_API_Posts>("/posts", { params: { page: 1, per_page: 5 } });
  return data;
}

export default preval(getData());
