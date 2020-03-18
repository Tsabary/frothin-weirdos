import { FETCH_BLOG_POSTS, FETCH_SINGLE_BLOG_POST } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_BLOG_POSTS:
      return action.payload;

    case FETCH_SINGLE_BLOG_POST:
      return [...state, action.payload];

    default:
      return state;
  }
};
