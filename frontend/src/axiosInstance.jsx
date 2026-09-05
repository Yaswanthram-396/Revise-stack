import axios from "axios";

import { useCookies } from "react-cookie";

export const url = process.env.REACT_APP_API_URL;

const axiosInstance = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application.json",
  },
});

export default axiosInstance;
