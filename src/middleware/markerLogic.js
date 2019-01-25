import { MARK_AS_READ } from "../actions/mailList";

const markerLogic = store => next => action => {
  if (action.type === MARK_AS_READ) {
    let state = store.getState();
    let { markingMode, selectedIDs } = action.payload;
    let mailList = state.mailList[state.appState.activeFolder.active];

    mailList = mailList.map(item => {
      if (selectedIDs.includes(item.id)) {
        markingMode === "mark as read"
          ? (item.readStatus = true)
          : (item.readStatus = false);
      }
      return item;
    });
    action.payload = mailList;
    return next(action);
  }

  return next(action);
};

export default markerLogic;
