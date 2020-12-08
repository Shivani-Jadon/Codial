import React, { Component } from 'react';

class PostList extends Component{
    render(){
        const { posts }  = this.props;
    
        return (
 
        <div className='posts-list'> 
            {posts.map( post => (
            <div className='post-wrapper' key={post._id}>

                <div className='post-header'>
                <div className='post-avatar'>
                    <img src='' alt='user-pic' /> 
                </div>
                <span className='post-writer'> { post.user } </span>
                <span className='post-time'> a min ago </span>
                </div>

                <div className='post-content'> { post.content }</div>

                <div className='post-actions'>
                <div className='post-like'>
                    <img src='' alt='like-icon' />
                    <span> 1 </span>
                </div>
                </div>

            </div>
            )

            )}
        </div>

        );
    }
}

export default PostList;