export const RECEIVE_MAIL_LIST = "RECEIVE_MAIL_LIST";
export const ADD_MAIL_TO_MAIL_LIST = "ADD_MAIL_TO_MAILLIST";
export const SELECT_MAIL = "SELECT_MAIL";
export const MARK_AS_READ = "MARK_AS_READ";
export const MARK_AS_IMPORTANT = "MARK_AS_IMPORTANT";
export const DELETE_EMAIL = "DELETE_EMAIL";

export function receiveMailList(mailList) {
  return {
    type: RECEIVE_MAIL_LIST,
    mailList
  };
}

export function addMailToMailList(mail) {
  return {
    type: ADD_MAIL_TO_MAIL_LIST,
    mail: mail.newEmail.values
  };
}

export function markAsRead(payload) {
  // payload:
  // mode = "mark as unread" / "mark as read"
  // selectedIDs = ['id1', 'id2', etc]
  return {
    type: MARK_AS_READ,
    payload
  };
}

export function markAsImportant(id, activeFolder) {
  return {
    type: MARK_AS_IMPORTANT,
    id,
    activeFolder
  };
}

export function selectMail(id, activeFolder) {
  return {
    type: SELECT_MAIL,
    id,
    activeFolder
  };
}

export function deleteEmail(id, activeFolder) {
  // id = [id1, (id2), ...]
  return {
    type: DELETE_EMAIL,
    id,
    activeFolder
  };
}
