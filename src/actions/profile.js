import { FETCH_USER_PROFILE_START, USER_PROFILE_FAIL, USER_PROFILE_SUCCESS } from "./actionTypes";
import { APIUrls } from '../helpers/urls';
import { getAuthTokenFromLocalStorage } from '../helpers/utils';

export function fetchProfileStart() {
    return {
        type : FETCH_USER_PROFILE_START,
    }
}

export function userProfileSuccess(user) {
    return {
        type : USER_PROFILE_SUCCESS,
        user,
    }
}

export function userProfileFail(error) {
    return {
        type : USER_PROFILE_FAIL,
        error,
    }
}

export function fetchProfile(userId) {
    return (dispatch) => {
        dispatch(fetchProfileStart());
        const url = APIUrls.userProfile(userId);

        fetch(url, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization:  `Bearer ${getAuthTokenFromLocalStorage()}`,
            },
        })
        .then(response => response.json())
        .then((data) => {
            if( data.success ){
                dispatch( userProfileSuccess(data.data.user) );
                return;
            }
            dispatch( userProfileFail(data.message) );
        });
    }
}