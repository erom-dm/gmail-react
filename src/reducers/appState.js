import { SET_ACTIVE_FOLDER } from "../actions/appState";
import {active} from "../utils/fakeState";
import { SET_NEW_MAIL_MSG_STATE } from "../actions/appState";
import {showMsg} from "../utils/fakeState";



export default function appState(state = {active, showMsg}, action) {
  switch (action.type) {
    case SET_ACTIVE_FOLDER:
        return {
            ...state,
            ...action.active
        };
    case SET_NEW_MAIL_MSG_STATE:
        return {
            ...state,
            ...action.showMsg
        };
    default:
        return {...state};
  }
}

