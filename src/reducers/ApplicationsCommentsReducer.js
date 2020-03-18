import { FETCH_APPLICATIONS_COMMENTS, ADD_APPLICATION_COMMENT } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_APPLICATIONS_COMMENTS:
      return action.payload;

    case ADD_APPLICATION_COMMENT:
      return [...state, action.payload];

    default:
      return state;
  }
};
