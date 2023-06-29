import axios from "axios";

const BaseURL = `https://todo-backend-6n0l.onrender.com`;
export const createTodo = async (data) => {
  try {
    const response = await axios.post(`${BaseURL}/createtodo`, data);
    return response;
    // if (response.status === 200) {
    //   return false;
    // } else {
    //   return true;
    // }
  } catch (error) {
    console.log("Error while createTodo API", error.message);
  }
};
export const getTodos = async () => {
  try {
    const response = await axios.get(`${BaseURL}/gettodo`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("Error while getTodo API", error.message);
  }
};
export const deleteTodo = async (id) => {
  try {
    const response = await axios.delete(`${BaseURL}/deletetodo/${id}`);
    return response;
  } catch (error) {
    console.log("Error while deleteTodo API", error.message);
  }
};

export const searchTodo = async (query) => {
  try {
    const response = await axios.get(`${BaseURL}/searchtodo?q=${query}`);
    console.log(response);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("Error while searching Todo API", error.message);
  }
};
