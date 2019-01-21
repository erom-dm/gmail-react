import { RECEIVE_MAIL_LIST } from "../actions/mailList";
import { ADD_MAIL_TO_MAIL_LIST } from "../actions/mailList";
import { MARK_AS_READ } from "../actions/mailList";
import { MARK_AS_IMPORTANT } from "../actions/mailList";
import {MailList} from "../utils/fakeState";

export default function mailList(state = MailList, action) {
  switch (action.type) {
    case RECEIVE_MAIL_LIST:
      return {
        ...state,
        ...action.mailList
      };
    case ADD_MAIL_TO_MAIL_LIST:
      let newState = { ...state };
      newState.mailList["sent"].push(action.mail);
      return newState;
    case MARK_AS_READ:
      console.log("<<<<<<<<<>>>>>>>>>>");
      console.log(state);
      console.log(action);
      let newMailList = state.map(item => {
        return { ...item };
      });
      let listToUpdate = [];

      for (const key of Object.keys(action.ids)) {
        for (let obj of newMailList) {
          if (obj.id === key && action.ids[key] === true) {
            listToUpdate.push(obj);
          }
        }
      }

      let allRead = true;
      for (let el of listToUpdate) {
        if (el.status === false) {
          allRead = false;
        }
      }

      let markingMode = allRead === true ? "mark as unread" : "mark as read";
      if (markingMode === "mark as read") {
        listToUpdate = listToUpdate.map(item => {
          let newObj = { ...item };
          newObj.status = true;
          return newObj;
        });
      } else {
        listToUpdate = listToUpdate.map(item => {
          let newObj = { ...item };
          newObj.status = false;
          return newObj;
        });
      }

      for (const obj of newMailList) {
        for (const el of listToUpdate) {
          if (el.id === obj.id) {
            newMailList.splice(newMailList.indexOf(obj), 1, el);
          }
        }
      }

      return {
        mailList: {
          ...state,
          state: newMailList
        }
      };
    case MARK_AS_IMPORTANT:
      let mailListUpd = state.mailList[state.active].map(item => {
        let newObj = { ...item };
        if (newObj.id === action.id) {
          newObj.important = !newObj.important;
        }
        return newObj;
      });
      return {
        ...state,
        [state.mailList[state.active]]: mailListUpd
      };
      default:
      return {...state};
  }
}
