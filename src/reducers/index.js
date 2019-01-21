import { combineReducers } from "redux";
import mailListReducer from "./mailListReducer";
import appStateReducer from "./appStateReducer";
import showMsgReducer from "./showMsgReducer";

// import otherReducers from '/here';

export default combineReducers({
    mailListReducer,
    appStateReducer,
    showMsgReducer,
});
