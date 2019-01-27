import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import appState from "./appState";
import mailList from "./mailList";
import input from "./input";


export default combineReducers({
    appState,
    mailList,
    input,
    form: formReducer,
});
