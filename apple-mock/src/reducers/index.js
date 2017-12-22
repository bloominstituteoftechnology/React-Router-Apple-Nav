import { combineReducers } from 'redux';
import SelectedMenuReducer from './SelectedMenuReducer';

const rootReducer = combineReducers({
  selectedMenu: SelectedMenuReducer
});

export default rootReducer;