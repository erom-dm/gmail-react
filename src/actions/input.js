export const ADD_SELECTED = "ADD_SELECTED";
export const ADD_IMPORTANT = "ADD_IMPORTANT";

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
