import {receiveMailList} from "./mailList";
import {setInitialState} from "./initialState";

export function handleInitialData (mailList, active, showMsg) {
    return (dispatch) => {
        // In case of outside API usage, create and import 'getInitialData' and
        // return it here, handling dispatch as usual with a promise (.then())
        dispatch(receiveMailList(mailList));
        dispatch(setInitialState(active, showMsg));
    }
}