export const ADD_SELECTED = "ADD_SELECTED";
export const OPEN_MAIL = "OPEN_MAIL";

export function addSelected(payload) {
  return {
    type: ADD_SELECTED,
    payload
  };
}

export function openMail(id) {
  return {
    type: OPEN_MAIL,
    id
  };
}
