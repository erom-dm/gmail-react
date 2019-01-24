import MARK_AS_READ from "../actions/mailList";
import merge from "deepmerge";

const markerLogic = store => next => action => {
  if (action.type === MARK_AS_READ) {
    action.payload = store.imput.selected;
    return next(action);
  }

  // let newMailList = merge({}, store.mailList)
  // let listToUpdate = merge({}, store.input.selected);
  /* 
  1) get all id that require change from input.selected
  (maybe pass selected/not selected store data to mail-list component, check a mode for marking there, 
  pass mode in action payload)
  2) map all over items in active mailList folder, checking id's to those in a change list, 
  change status acording to mode provided

  */

  return next(action);
};

export default markerLogic;

/*
let newMailList = state.map(item => {
  return { ...item };
});
let listToUpdate = [];

for (const key of Object.keys(action.ids)) {
  for (let obj of newMailList) {
    if (obj.id === key && action.ids[key] === true) {
      listToUpdate.push(obj);
    }
  }
}

let allRead = true;
for (let el of listToUpdate) {
  if (el.status === false) {
    allRead = false;
  }
}

let markingMode = allRead === true ? "mark as unread" : "mark as read";
if (markingMode === "mark as read") {
  listToUpdate = listToUpdate.map(item => {
    let newObj = { ...item };
    newObj.status = true;
    return newObj;
  });
} else {
  listToUpdate = listToUpdate.map(item => {
    let newObj = { ...item };
    newObj.status = false;
    return newObj;
  });
}

for (const obj of newMailList) {
  for (const el of listToUpdate) {
    if (el.id === obj.id) {
      newMailList.splice(newMailList.indexOf(obj), 1, el);
    }
  }
}

return {
  mailList: {
    ...state,
    state: newMailList
  }
};

*/
