import { FETCH_CAMP_APPLICATIONS } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_CAMP_APPLICATIONS:
      return action.payload;

    default:
      return state;
  }
};
