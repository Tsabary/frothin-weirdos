import { FETCH_APPLICATIONS_REPLIES, ADD_APPLICATION_REPLY } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_APPLICATIONS_REPLIES:
      return action.payload;

    case ADD_APPLICATION_REPLY:
      return [...state, action.payload];

    default:
      return state;
  }
};
