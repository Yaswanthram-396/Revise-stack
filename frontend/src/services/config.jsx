import axios from "axios";
import { url } from "./public";

export const loginUser = async (email, password) => {
  const response = await axios.post(`${url}/config/login`, {
    email: email,
    password: password,
  });
  return response.data.data;
};
export const createUser = async (details) => {
  const response = await axios.post(`${url}/config/register`, details);

  return response.data.data;
};

export const getMe = async (token) => {
  const response = await axios.get(`${url}/config/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data;
};
