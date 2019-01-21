import {DEL_EMAIL} from "../../actions";
import {SENT_EMAIL} from "../../actions";


const initialState = {
    mailList: {received: [], sent: []},
};


function mails (state = initialState, action){
    switch (action.type){
        case 'SENT_EMAIL':
        {
            let updateSentMailList = [...this.state.mailList.sent];
            updateSentMailList.push(action.payload)
            return {...state, mailList: {this.state.mailList, sent: [...updatedSentMailList]}}
        }
        case DEL_EMAIL:
            return {...state, mailList:action.payload};
        default:
            return {...state}

    }
}

export default mails;