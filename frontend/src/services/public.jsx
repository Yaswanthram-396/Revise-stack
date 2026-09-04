import axios from "axios";

export const url = process.env.REACT_APP_API_URL;

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

export const updateBookStatus = async (id, status) => {
  try {
    const response = await axios.patch(`${url}/books/${id}`, {
      status: status,
    });
    return response.data.data;
  } catch (e) {
    return e;
  }
};
