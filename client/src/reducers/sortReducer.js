import { SORT_SURVEYS } from "../actions/types";

export default function(state = "date", action) {
  switch (action.type) {
    case SORT_SURVEYS:
      return action.payload;
    default:
      return state;
  }
}
