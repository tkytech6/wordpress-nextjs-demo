import preval from "next-plugin-preval";
import { WP_REST_API_Categories } from "wp-types";

import { axios } from "~/libs/axios";

async function getData() {
  const { data } = await axios.get<WP_REST_API_Categories>("/categories", { params: { per_page: 100 } });
  return data;
}

export default preval(getData());
