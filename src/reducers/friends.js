import { ADD_FRIEND, FETCH_USER_FRIEND, REMOVE_FRIEND } from "../actions/actionTypes";

const defaultProfileState = [];

export default function friends(state =defaultProfileState, action){
    switch(action.type){
        case FETCH_USER_FRIEND : 
            return [...action.friends];

        case ADD_FRIEND : 
            return state.concat(action.friend);

        case REMOVE_FRIEND : 
            return state.filter((friend) => friend.to_user._id !== action.userId);
                               
        default : 
            return state;
    }
    
}