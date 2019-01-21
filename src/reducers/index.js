import { combineReducers } from "redux";
import mailList from "./mailList";
import active from "./active";
import showMsg from "./showMsg";

// import otherReducers from '/here';

export default combineReducers({
  mailList,
  active,
  showMsg
});
