import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
class RecentPosts extends Component {
  componentDidMount() {
    this.props.fetchRecentPosts;
  }

  renderPosts = function() {
    const posts = this.props.recentPosts.map((post, index) => {
        if(index < 3){
            return(
                <li key={index}>
                {post.title}
                </li>;
            )
        }
      
    });
  
  return posts
}
  render() {
    return (
      <div className="recent-posts">
        <div className="recent-posts-wrapper">
          <div className="recent_posts_ heading">recent posts</div>
          <ul className="recent-post_posts"></ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    recentPosts: state.props.recentPosts
  };
}

export default connect(mapStateToProps, actions)(RecentPosts);
