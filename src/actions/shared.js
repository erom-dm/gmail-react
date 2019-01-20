import {receiveMailList} from "./mailList";
import {setActiveFolderState} from "./appState";
import {setNewMailMsgState} from "./appState";

export function handleInitialData (mailList, active, showMsg) {
    return (dispatch) => {
        // In case of outside API usage, create and import 'getInitialData' and
        // return it here, handling dispatch as usual with a promise (.then())
        // Requires thunk-middleware, as we're returning function, not an obj
        dispatch(receiveMailList(mailList));
        dispatch(setActiveFolderState(active));
        dispatch(setNewMailMsgState(showMsg));

    }
}


