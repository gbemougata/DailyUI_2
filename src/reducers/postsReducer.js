import { SET_RECENT_POSTS } from "../actions/types";

const INIT_STATE = {
  posts: [],
  recent: []
};
export default function(INIT_STATE, actions) {
  switch (action.type) {
    case SET_RECENT_POSTS:
      const recentPosts = action.payload;
      return {
        ...state,
        recentPosts
      };
    default:
  }
}
