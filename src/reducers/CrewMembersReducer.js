import { FETCH_CREW_MEMBERS, FETCH_SINGLE_CREW_MEMBER } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_CREW_MEMBERS:
      return action.payload;

    case FETCH_SINGLE_CREW_MEMBER:
      return [...state, action.payload];

    default:
      return state;
  }
};
