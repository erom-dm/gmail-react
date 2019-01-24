import { combineReducers } from "redux";
import appState from "./appState";
import mailList from "./mailList";
import input from "./input";

// import otherReducers from '/here';

export default combineReducers({
  appState,
  mailList,
  input
});
