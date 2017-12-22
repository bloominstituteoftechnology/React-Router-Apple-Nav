import axios from 'axios';

export const SET_SELECTED_MENU = "SET_SELECTED_MENU";

export const setMenu = (menuName) => {
  const promise = axios.get(`http://localhost:9000/api/menu/${menuName}`);
  return {
    type: "SET_SELECTED_MOVIE",
    payload: promise
  };
};

