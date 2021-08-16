import axios from "axios";

export const getUser = async () => {
  try {
    axios.get(" https://jsonplaceholder.typicode.com/users").then(response => response.data);
  } catch (error) {}
};
