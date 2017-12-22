import axiox from 'axios';

export const SET_SELECTED_MENU = "SET_SELECTED_MENU";

export const setMenu = (menuName) => {
  const promise = axios.get(`http://localhost:9000/api/subMenu/${menuName}`);
  return {
    type: "SET_SELECTED_MOVIE",
    payload: promise
  };
};

