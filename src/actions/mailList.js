export const RECEIVE_MAIL_LIST = 'RECEIVE_MAIL_LIST';

export function receiveMailList (mailList){
    return{
        type: RECEIVE_MAIL_LIST,
        mailList,
    }
}