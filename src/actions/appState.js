export const SET_ACTIVE_FOLDER = "SET_ACTIVE_FOLDER";
export const SET_NEW_MAIL_MSG_STATE = "SET_NEW_MAIL_MSG_STATUS";

export function setActiveFolder(activeFolder) {
  return {
    type: SET_ACTIVE_FOLDER,
    activeFolder,
  };
}

export function setNewMailMsgState(showNewMsgNotif) {
  return {
    type: SET_NEW_MAIL_MSG_STATE,
    showNewMsgNotif,
  };
}