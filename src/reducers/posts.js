import { ADD_COMMENT,
         ADD_POST, 
         UPDATE_POSTS,
         ADD_POST_LIKES, } from '../actions/actionTypes';

export default function posts(state =[], action){
    switch(action.type){
        case UPDATE_POSTS : 
            return action.posts;

        case ADD_POST : 
            return [action.post, ...state];

        case ADD_COMMENT : 
            const newPosts = state.map((post) => {
                if (post._id === action.postId) {
                    return {
                        ...post,
                        comments : [action.comment, ...post.comments]
                    }
                } 

                return post;
            })
            return newPosts;
                  
        case ADD_POST_LIKES : 
            const updatedPosts = state.map((post) => {
                if (post._id === action.postId) {
                    return {
                        ...post,
                        likes : [...post.likes, action.likes],
                    }
                } 

                return post;
            })
            return updatedPosts;

        default : 
            return state;
    }
    
}