import { MARK_AS_READ, DELETE_EMAIL } from "../actions/mailList";

const selectMarkMode = store => {
  let state = { ...store.getState() };
  let activeFolder = state.appState.activeFolder.active;
  let selectedMails = state.input["selected"];
  // Array filled with ID's of mails that are currently selected
  let selectedIDs = [];
  for (let property in selectedMails) {
    if (selectedMails.hasOwnProperty(property)) {
      if (selectedMails[property]) {
        selectedIDs.push(property);
      }
    }
  }

  let allRead = true;
  let mails = state.mailList[activeFolder];

  for (let mail in mails) {
    if (mails.hasOwnProperty(mail)) {
      if (!mails[mail].readStatus && selectedIDs.includes(mails[mail].id)) {
        allRead = false;
      }
    }
  }

  let markingMode = allRead ? "mark as unread" : "mark as read";
  return {
    markingMode: markingMode,
    selectedIDs: selectedIDs
  };
};

const markerLogic = store => next => action => {
  if (action.type === MARK_AS_READ) {
    let state = { ...store.getState() };
    const data = selectMarkMode(store);
    let { markingMode, selectedIDs } = data;
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
    const activeFolder = state.appState.activeFolder.active;
    const selectedMails = state.input["selected"];
    let selectedIDs = [];
    for (let property in selectedMails) {
      if (selectedMails.hasOwnProperty(property)) {
        if (selectedMails[property]) {
          selectedIDs.push(property);
        }
      }
    }

    const newAction = {
      type: DELETE_EMAIL,
      id: selectedIDs,
      activeFolder: activeFolder
    };

    return next(newAction);
  }

  return next(action);
};

export default markerLogic;
