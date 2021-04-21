import { SET_RECENT_POSTS } from "./types";
import axios from "axios";
export function fetchRecentPosts() {
  return function(dispatch) {
    axios.get("https://api.dailysmarty.com/posts").then(respose => {
      console.log(response.data.posts);
      dispatch({
        type: SET_RECENT_POSTS,
        Payload: response.data.posts
      });
    });
  };
}
