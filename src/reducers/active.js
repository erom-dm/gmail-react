import { SET_ACTIVE_FOLDER } from "../actions/appState";

export default function appState(state = {}, action) {
  switch (action.type) {
    case SET_ACTIVE_FOLDER:
      return {
        ...state,
        ...action.active
      };
    default:
      return state;
  }
}
