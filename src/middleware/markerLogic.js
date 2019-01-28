import { MARK_AS_READ, DELETE_EMAIL } from "../actions/mailList";

const markerLogic = store => next => action => {
  if (action.type === MARK_AS_READ) {
    let state = { ...store.getState() };
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

    const newAction = {
      type: MARK_AS_READ,
      payload: mailList,
      currentActiveFolder: state.appState.activeFolder
    };

    return next(newAction);
  } else if (action.type === DELETE_EMAIL) {
    let state = { ...store.getState() };
  }

  return next(action);
};

export default markerLogic;
