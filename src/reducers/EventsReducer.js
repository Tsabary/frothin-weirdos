import { FETCH_EVENTS, FETCH_SINGLE_EVENT } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_EVENTS:
      return action.payload;

    case FETCH_SINGLE_EVENT:
      return [...state, action.payload];

    default:
      return state;
  }
};
