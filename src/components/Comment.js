import React, { Component } from 'react';

class Comment extends Component {

    render() {
        const {comment} = this.props;
        return (
            <div className="post-comments-list" key={comment._id}>
                <div className="post-comment-item">
                <div className="post-comment-header">
                    <span className="post-comment-author">{comment.user.name}</span>
                    <span className="post-comment-time">{comment.createdAt.slice(11,16)} mins ago</span>
                    <span className="post-comment-likes">{comment.likes.length}</span>
                </div>

                <div className="post-comment-content">{comment.content}</div>
                </div>
            </div>
        );
    }
}

export default Comment;