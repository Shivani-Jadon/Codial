import { FETCH_SEARCH_RESULTS_FAILURE, FETCH_SEARCH_RESULTS_SUCCESS } from "../actions/actionTypes"

const initialSearchState = {
    results: [], 
    error : null
}

export default function search (state = initialSearchState, action) {
    switch(action.type) {
        case FETCH_SEARCH_RESULTS_SUCCESS : 
            return {
                ...state,
                results: action.users,
                error: null,
            };

        case FETCH_SEARCH_RESULTS_FAILURE : 
            return {
                ...state,
                error: action.error,
            } 
    
        default : 
            return state;    
    }
}