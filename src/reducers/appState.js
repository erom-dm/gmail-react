import { SET_ACTIVE_FOLDER } from "../actions/appState";
import {activeFolder} from "../utils/fakeState";
import { SET_NEW_MAIL_MSG_STATE } from "../actions/appState";
import {showNewMsgNotif} from "../utils/fakeState";



export default function appState(state = {activeFolder, showNewMsgNotif}, action) {
  switch (action.type) {
    case SET_ACTIVE_FOLDER:
        return {
            ...state,
            activeFolder: action.activeFolder,
        };
    case SET_NEW_MAIL_MSG_STATE:
        return {
            ...state,
            showNewMsgNotif: action.showNewMsgNotif,
        };
    default:
        return {...state};
  }
}

