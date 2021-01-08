import { FETCH_USER_PROFILE_START,
         USER_PROFILE_FAIL, 
         USER_PROFILE_SUCCESS } from "../actions/actionTypes";

const initialAuthState = {
    user: {},
    error: null,
    success: null,
    inProgress: false,
}

export default function  profile( state=initialAuthState, action ) {
    switch (action.type) {
        case USER_PROFILE_SUCCESS : {
            return {
                ...state,
                user: action.user,
                inProgress: false,
                success: true,
            }
        };

        case USER_PROFILE_FAIL : {
            return {
                ...state,
                error: action.error,
                inProgress: false,
            }
        };

        case FETCH_USER_PROFILE_START : {
            return {
                ...state,
                inProgress : true
            }
        };

        default : {
            return state;
        }

    }
}