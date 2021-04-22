import { SET_RECENT_POSTS } from "../actions/types";

const INIT_STATE = {
  posts: [],
  recent: []
};
export default function(INIT_STATE, actions) {
  switch (actions.type) {
    case SET_RECENT_POSTS:
      const recentPosts = bindActionCreators.payload;
      return {
        ...state,
        recentPosts
      };
    default:
  }
}
