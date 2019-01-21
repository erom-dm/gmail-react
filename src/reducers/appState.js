import {SET_ACTIVE_FOLDER} from "../actions/appState";
import {SET_NEW_MAIL_MSG_STATE} from "../actions/appState";

export default function appState (state = {}, action) {
    switch (action.type) {
        case SET_ACTIVE_FOLDER:
            return {
                ...state,
                ...action.active,
            };
        case SET_NEW_MAIL_MSG_STATE:
            return {
                ...state,
                ...action.showMsg,
            };
        default:
            return state
    }
}