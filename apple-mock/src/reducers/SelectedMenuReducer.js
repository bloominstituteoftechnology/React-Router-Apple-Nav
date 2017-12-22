import { SET_SELECTED_MENU } from '../actions';

export default (selectedMenu = [], action) => {
  switch(action.type) {
    case SET_SELECTED_MENU:
      return action.payload.data
    default:
      return selectedMenu;
  }
};