import { SET_ACTIVE_FOLDER } from "../actions/appState";
import {active} from "../utils/fakeState";

export default function appStateReducer(state = active, action) {
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
