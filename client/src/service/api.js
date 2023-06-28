import axios from "axios";

const BaseURL = "http://localhost:9090";
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
    if (response.statusText === "OK") {
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
export const updateTodo = async (id, data) => {
  try {
    const response = await axios.patch(`${BaseURL}/updateTodo/${id}`, data);
    return response;
  } catch (error) {
    console.log("Error while updateTodo API", error.message);
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
