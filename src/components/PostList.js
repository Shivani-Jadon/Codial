import React, { Component } from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {CreatePost} from './';
import {createComment} from '../actions/posts';

class PostList extends Component{

  constructor(props){
    super(props);
    this.state = {
      content: '',
    }
  }

  handleCommentChange = (event) => {
    this.setState({
      content : event.target.value
    })
  }

  handleAddComment = (event, postId) => {
    
    if (event.key === 'Enter') {
      // dispatch action
      this.props.dispatch( createComment(this.state.content, postId) );

      // clear comment
      this.setState({
        content : '',
      })
    }
  }

  render() {
    const { posts } = this.props;
    return (
      <div className="posts-list">
        <CreatePost />
        {posts.map((post) => (
          <div className="post-wrapper" key={post._id}>

            <div className="post-header">
              <div className="post-avatar">
                <Link to={`/user/${post.user._id}`}>
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/3237/3237472.svg"
                  alt="user-pic"
                />
                </Link>
                <div>
                  <span className="post-author">{post.user.name}</span>
                  <span className="post-time">a minute ago</span>
                </div>
              </div>

              <div className="post-content">{post.content}</div>

              <div className="post-actions">
                <div className="post-like">
                  <img
                    src="https://www.flaticon.com/svg/static/icons/svg/1076/1076984.svg"
                    alt="likes-icon"
                  />
                  <span>{post.likes.length}</span>
                </div>

                <div className="post-comments-icon">
                  <img
                    src="https://www.flaticon.com/svg/static/icons/svg/831/831264.svg"
                    alt="comments-icon"
                  />
                  <span>{post.comments.length}</span>
                </div>
              </div>
              <div className="post-comment-box">
                <input 
                 value={this.state.content}
                 onChange= {this.handleCommentChange}    
                 onKeyPress= {() => this.handleAddComment(post._id)}           
                 placeholder="Start typing a comment" 
                />
              </div>

              <div className="post-comments-list">
                <div className="post-comments-item">
                  <div className="post-comment-header">
                    <span className="post-comment-author">Bill</span>
                    <span className="post-comment-time">a minute ago</span>
                    <span className="post-comment-likes">22</span>
                  </div>

                  <div className="post-comment-content">Random comment</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

PostList.propTypes = {
    posts : propTypes.array.isRequired,
}

export default connect()(PostList);