import { ADD_SELECTED, ADD_IMPORTANT } from "../actions/input";
import { selected, important } from "../utils/fakeState";
import merge from "deepmerge";

export default function input(state = { selected, important }, action) {
  switch (action.type) {
    case ADD_SELECTED:
      const { id, checked } = action.payload;
      const stateCpy = { ...state };
      const temp = { selected: { [id]: checked } };

      return merge(stateCpy, temp);
    case ADD_IMPORTANT:
      const { id1, important } = action.payload;
      const stateCopy = { ...state };
      const tmp = { selected: { [id1]: important } };

      return merge(stateCopy, tmp);
    default:
      return state;
  }
}
