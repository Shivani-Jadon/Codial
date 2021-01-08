import { FETCH_USER_FRIEND } from "../actions/actionTypes";

const defaultProfileState = [];

export default function friends(state =defaultProfileState, action){
    switch(action.type){
        case FETCH_USER_FRIEND : 
            return [...action.friends];
                               
        default : 
            return state;
    }
    
}