export const SET_ACTIVE_FOLDER_STATE = 'SET_ACTIVE_FOLDER_STATE';
export const SET_NEW_MAIL_MSG_STATE = 'SET_NEW_MAIL_MSG_STATUS';

export function setActiveFolderState (active){
    return{
        type: SET_ACTIVE_FOLDER_STATE,
        active,
    }
}

export function setNewMailMsgState (active, showMsg){
    return{
        type: SET_NEW_MAIL_MSG_STATE,
        showMsg,
    }
}

