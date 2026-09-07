import axiosInstance from "../axiosInstance";

export const getExpenses = async (month) =>
  (
    await axiosInstance.get("/expenses", {
      params: month ? { month } : undefined,
    })
  ).data.data;
export const createExpense = async (expense) =>
  (await axiosInstance.post("/expenses", expense)).data.data;
export const updateExpense = async (id, expense) =>
  (await axiosInstance.put(`/expenses/${id}`, expense)).data.data;
export const deleteExpense = async (id) =>
  (await axiosInstance.delete(`/expenses/${id}`)).data.data;
