import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {createComment} from '../actions/posts';
import {Comment} from './';

class Post extends Component {
    constructor(props){
        super(props);
        this.state = {
          comment: '',
        }
    }

    
  handleCommentChange = (event) => {
    
    this.setState({
      comment : event.target.value,
    })
  }

  handleAddComment = (event, postId) => {
    
    if (event.key === 'Enter') {
      // console.log("Post id : ", postId);
      // dispatch action
      this.props.dispatch( createComment(this.state.comment, postId) );

      // clear comment
      this.setState({
        comment : '',
      })
    }
  }

      
    render() {
        const {post} = this.props;
        const {comment} = this.state;
        return (
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
                <input id={post._id}
                 onChange= {this.handleCommentChange}    
                 onKeyPress= {(event) => this.handleAddComment(event,post._id)}           
                 placeholder="Start typing a comment" 
                 value={comment}
                />
              </div>

              {post.comments.map((comment) => (
                <Comment comment={comment} key={comment._id} />
              ))}
              
            </div>
          </div>
        );
    }
}

export default connect()(Post);