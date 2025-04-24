import axios from "axios";
import { getSession } from "next-auth/react";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BE_SCHOOL,
  withCredentials: true,
});

// Request interceptor to add headers, including the token
instance.interceptors.request.use(
  async (config) => {
    const session = await getSession();
    const token = session?.accessToken;

    if (config.headers) {
      config.headers.set("Authorization", `Bearer ${token}`);
      config.headers.set("Content-Type", "application/json");
      config.headers.set("Accept", "*/*");
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default instance;
