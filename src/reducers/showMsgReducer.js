import { SET_NEW_MAIL_MSG_STATE } from "../actions/appState";
import {showMsg} from "../utils/fakeState";

export default function showMsgReducer(state = showMsg, action) {
  switch (action.type) {
    case SET_NEW_MAIL_MSG_STATE:
      return {
        ...state,
        ...action.showMsg
      };
    default:
      return state;
  }
}
