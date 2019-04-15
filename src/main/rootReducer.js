import { combineReducers } from "redux";

// Reducers for all pages
import loginReducer from "../containers/login/ReducerLogin";
import homeReducer from "../containers/home/ReducerHome";

// "root reducer"
export default combineReducers({
  login: loginReducer,
  home: homeReducer
});
