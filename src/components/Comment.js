import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addLikeToStore} from '../actions/posts';
import heart from '../assets/heart_icon.png';

class Comment extends Component {

    handleLike = () => {
        const {comment, user} = this.props;
        this.props.dispatch( addLikeToStore(comment._id, 'Comment', user._id) )
    }

    render() {
        const {comment, user} = this.props;
        const isCommentLiked = comment.likes.includes(user._id)

        return (
            <div className="post-comments-list" key={comment._id}>
                <div className="post-comment-item">
                <div className="post-comment-header">
                    <span className="post-comment-author">{comment.user.name}</span>
                    <span className="post-comment-time">{comment.createdAt.slice(11,16)} mins ago</span>
                    <button className="comment-like no-btn"
                    onClick={this.handleLike}>
                    { isCommentLiked ? <img
                        src={heart}
                        alt="likes-icon"
                        /> :
                        <img
                        src="https://www.flaticon.com/svg/static/icons/svg/1076/1076984.svg"
                        alt="likes-pic"
                        /> 
                        
                    }
                    </button>
                    <span className="post-comment-likes">{comment.likes.length}</span>
                </div>

                <div className="post-comment-content">{comment.content}</div>
                </div>
            </div>
        );
    }
}

function mapStateToProps ({ auth }) {
    return {
        user: auth.user,
    }
}

export default connect(mapStateToProps)(Comment);