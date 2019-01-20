export const SET_INITIAL_STATE = 'SET_INITIAL_STATE';

export function setInitialState (active, showMsg){
    return{
        type: SET_INITIAL_STATE,
        active,
        showMsg
    }
}