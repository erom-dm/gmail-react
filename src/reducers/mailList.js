import { RECEIVE_MAIL_LIST } from "../actions/mailList";
import { ADD_MAIL_TO_MAIL_LIST } from "../actions/mailList";
import { MARK_AS_READ } from "../actions/mailList";
import { MARK_AS_IMPORTANT } from "../actions/mailList";
import { SELECT_MAIL } from "../actions/mailList";
import { MailList } from "../utils/fakeState";

export default function mailList(state = MailList, action) {
  switch (action.type) {
    case RECEIVE_MAIL_LIST:
      return {
        ...state,
        ...action.mailList
      };
    case ADD_MAIL_TO_MAIL_LIST:
      let newState = { ...state };
      newState.sent.push(action.mail);
      return newState;
    case MARK_AS_READ:
      let activeFolder = action.currentActiveFolder.active
      let temp = {
        [activeFolder]: [...action.payload],
      }
      return {
        ...state,
        ...temp,
      };
    case MARK_AS_IMPORTANT:
      let mailListUpd = state[action.activeFolder].map(item => {
        let newObj = { ...item };
        if (newObj.id === action.id) {
          newObj.important = !newObj.important;
        }
        return newObj;
      });
      let temp1 = {
        [action.activeFolder]: mailListUpd
      }
      return {
        ...state,
        ...temp1,
      };
    case SELECT_MAIL:
      let mailUpd = state[action.activeFolder].map(item => {
        let newObj = { ...item };
        if (newObj.id === action.id) {
          newObj.selected = !newObj.selected;
        }
        return newObj;
      });

      return {
        ...state,
        [state[action.activeFolder]]: mailUpd
      };
    default:
      return { ...state };
  }
}
