import {UPDATE_POSTS,
        ADD_POST, 
        ADD_COMMENT, 
        ADD_POST_LIKES, 
        ADD_COMMENT_LIKES} from './actionTypes';
import { APIUrls } from '../helpers/urls';
import { getFormBody, getAuthTokenFromLocalStorage} from '../helpers/utils';


export function fetchPosts(){
    return (dispatch) => {
        const url = APIUrls.fetchPosts();
        fetch(url)
        .then((response) => {
            return response.json();
        }).then((data) => {
            console.log('data', data);
            dispatch( updatePosts(data.data.posts) )
        });
    };
}

export function updatePosts(posts){
    return {
        type : UPDATE_POSTS,
        posts,
    }
}

export function addPost (post){
    return {
        type : ADD_POST,
        post,
    }
}

export function createPost(content) {
    return (dispatch) => {
        const url = APIUrls.createUserPost();
        fetch(url, {
            method : 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization:  `Bearer ${getAuthTokenFromLocalStorage()}`,
            },
            body : getFormBody({ content }),
        })
        .then((response) => {
            return response.json();
        }).then((data) => {
            console.log('data', data);

            if( data.success ){
                dispatch( addPost (data.data.post) );
            }
            
        });
    };
}


export function addComment (comment, postId){
    return {
        type : ADD_COMMENT,
        comment,
        postId,
    }
}

export function createComment(content, postId) {
    return (dispatch) => {
        const url = APIUrls.createUserComment();
        fetch(url, {
            method : 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization:  `Bearer ${getAuthTokenFromLocalStorage()}`,
            },
            body : getFormBody({ 
                    content,
                    post_id : postId,
                }),
        })
        .then((response) => {
            return response.json();
        }).then((data) => {
            console.log('data', data);

            if( data.success ){
                dispatch( addComment (data.data.comment, postId) );
            }
            
        });
    };
}

export function addLikeToStore(id, likeType, userId) {
    return (dispatch) => {
        const url = APIUrls.toggleLike(id, likeType);
        fetch(url, {
            method : 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization:  `Bearer ${getAuthTokenFromLocalStorage()}`,
            },
        })
        .then (response => response.json())
        .then((data) => {
            console.log('like data', data);

            if( data.success ){
                if(likeType == 'Post') {
                    dispatch( addPostLike(id, userId) );
                }
                if(likeType == 'Comment') {
                    dispatch( addCommentLike(id, userId) );
                }
            }
            
        })
    } 
}

export function addPostLike(postId, userId) {
    return {
        type : ADD_POST_LIKES,
        postId,
        userId,
    }
}

export function addCommentLike(commentId, userId) {
    return {
        type : ADD_COMMENT_LIKES,
        commentId,
        userId,
    }
}