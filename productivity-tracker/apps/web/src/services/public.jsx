import axiosInstance from "../axiosInstance";

export const url = import.meta.env.VITE_API_URL || "http://localhost:3001/api";

export const getBooks = async () => {
  try {
    const response = await axiosInstance.get(`/books`);
    return response.data.data;
  } catch (e) {
    return e;
  }
};
export const deleteBookByid = async (id) => {
  try {
    const response = await axiosInstance.delete(`/books/${id}`);
    return response.data.data;
  } catch (e) {
    return e;
  }
};

export const createbook = async (data) => {
  try {
    const response = await axiosInstance.post(`/books`, data);
    return response.data.data;
  } catch (e) {
    return e;
  }
};

export const updateBookStatus = async (id, status) => {
  try {
    const response = await axiosInstance.patch(`/books/${id}`, {
      status: status,
    });
    return response.data.data;
  } catch (e) {
    return e;
  }
};
