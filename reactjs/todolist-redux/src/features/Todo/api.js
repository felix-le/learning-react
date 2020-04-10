import axios from "axios";

// de "async" keyword, cho nguoi ta biet function nay return ve 1 promise. Neu ko co cung ko sao.
export const apiFetchTodos = async () => {
  return axios.get("https://jsonplaceholder.typicode.com/todos");
};

export const apiFetchPosts = async () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
};
