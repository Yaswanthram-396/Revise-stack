import React from "react";
import axios from "axios";

const url = process.env.REACT_APP_API_URL;

export const getBooks = async () => {
  try {
    const response = await axios.get(`${url}/books`);
    return response.data.data;
  } catch (e) {
    return e;
  }
};
export const deleteBookByid = async (id) => {
  try {
    const response = await axios.delete(`${url}/books/${id}`);
    return response.data.data;
  } catch (e) {
    return e;
  }
};

export const createbook = async (data) => {
  try {
    const response = await axios.post(`${url}/books`, data);
    return response.data.data;
  } catch (e) {
    return e;
  }
};
