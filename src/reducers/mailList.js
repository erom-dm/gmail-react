import {RECEIVE_MAIL_LIST} from "../actions/mailList";

export default function mailList (state = {}, action) {
    switch (action.type) {
        case RECEIVE_MAIL_LIST:
            return {
                ...state,
                ...action.mailList,
            };
        default:
            return state
    }
}