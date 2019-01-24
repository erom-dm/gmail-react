export const ADD_SELECTED = "ADD_SELECTED";
export const ADD_IMPORTANT = "ADD_IMPORTANT";
export const UPD_SELECTED = "UPD_SELECTED";
export const UPD_IMPORTANT = "UPD_IMPORTANT";

export function addSelected(payload) {
  return {
    type: ADD_SELECTED,
    payload
  };
}

export function addImportant(payload) {
  return {
    type: ADD_IMPORTANT,
    payload
  };
}

export function updSelected(payload) {
  return {
    type: UPD_SELECTED,
    payload
  };
}

export function updImportant(payload) {
  return {
    type: UPD_SELECTED,
    payload
  };
}
