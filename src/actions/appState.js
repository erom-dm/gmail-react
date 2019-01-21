export const SET_ACTIVE_FOLDER = 'SET_ACTIVE_FOLDER';
export const SET_NEW_MAIL_MSG_STATE = 'SET_NEW_MAIL_MSG_STATUS';

export function setActiveFolder (active){
    return{
        type: SET_ACTIVE_FOLDER,
        active,
    }
}

export function setNewMailMsgState (showMsg){
    return{
        type: SET_NEW_MAIL_MSG_STATE,
        showMsg,
    }
}

