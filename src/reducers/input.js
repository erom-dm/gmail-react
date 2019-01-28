import { ADD_SELECTED, OPEN_MAIL } from "../actions/input";
import { selected, opened } from "../utils/fakeState";
import merge from "deepmerge";

export default function input(state = { selected, opened }, action) {
  const stateCpy = { ...state };
  switch (action.type) {
    case ADD_SELECTED:
      const { id, checked } = action.payload;
      const temp = { selected: { [id]: checked } };

      return merge(stateCpy, temp);
    case OPEN_MAIL:
      const idToOpen = { opened: action.id };
      console.log("--> open mail reducer");
      return {
        ...stateCpy,
        ...idToOpen
      };
    default:
      return state;
  }
}
