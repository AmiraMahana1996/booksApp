import axiosInstance from "./config";




export const getBooks = () => {
  return axiosInstance.get("/books");
};
