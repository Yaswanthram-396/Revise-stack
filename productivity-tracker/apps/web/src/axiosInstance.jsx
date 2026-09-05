import axios from "axios";

export const url = import.meta.env.VITE_API_URL || "http://localhost:3001/api";

const axiosInstance = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application.json",
  },
});

export default axiosInstance;
