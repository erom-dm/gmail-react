export const RECEIVE_MAIL_LIST = 'RECEIVE_MAIL_LIST';
export const ADD_MAIL_TO_MAIL_LIST = 'ADD_MAIL_TO_MAILLIST';

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

