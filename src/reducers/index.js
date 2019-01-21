import { combineReducers } from "redux";
import mailList from "./mailList";
import appState from "./appState";

// import otherReducers from '/here';

export default combineReducers({
    appState,
    mailList,
});
