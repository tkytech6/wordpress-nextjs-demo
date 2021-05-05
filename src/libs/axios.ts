import axiosBase from "axios";

const instance = axiosBase.create({
  baseURL: `${process.env.NEXT_PUBLIC_WP_BASE_URL}/wp-json/wp/v2/`,
});

export const axios = instance;
