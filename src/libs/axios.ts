import axiosBase from "axios";

const instance = axiosBase.create({
  baseURL: process.env.NEXT_PUBLIC_WP_BASE_URL,
});

export const axios = instance;
