import React, { Component } from 'react';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import {CreatePost, Post} from './';


class PostList extends Component{

  render() {
    const { posts } = this.props;
    
    return (
      <div className="posts-list">
        <CreatePost />
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    );
  }
}

PostList.propTypes = {
    posts : propTypes.array.isRequired,
}

export default connect()(PostList);