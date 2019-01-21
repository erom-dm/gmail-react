export const RECEIVE_MAIL_LIST = 'RECEIVE_MAIL_LIST';
export const ADD_MAIL_TO_MAIL_LIST = 'ADD_MAIL_TO_MAILLIST';
export const MARK_AS_READ = 'MARK_AS_READ';
export const MARK_AS_IMPORTANT = 'MARK_AS_IMPORTANT';

export function receiveMailList (mailList){
    return{
        type: RECEIVE_MAIL_LIST,
        mailList,
    }
}

export function addMailToMailList(mail) {
    return{
        type: ADD_MAIL_TO_MAIL_LIST,
        mail,
    }
}

export function markAsRead(ids){
  return{
    type: MARK_AS_READ,
    ids,
  }
}

export function markAsImportant(id){
  return{
    type: MARK_AS_IMPORTANT,
    id,
  }
}
