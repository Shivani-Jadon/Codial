import { APIUrls } from '../helpers/urls';
import { FETCH_USER_FRIEND, ADD_FRIEND, REMOVE_FRIEND } from './actionTypes';
import { getAuthTokenFromLocalStorage } from '../helpers/utils';

export function fetchFriends(userId) {
    return (dispatch) => {
        
        const url = APIUrls.fetchFriends(userId);

        fetch(url, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization:  `Bearer ${getAuthTokenFromLocalStorage()}`,
            },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('data friends', data.data.friends);
            dispatch( fetchUserFriendSuccess(data.data.friends) );
        });
    }
}

export function fetchUserFriendSuccess(friends){
    return {
        type : FETCH_USER_FRIEND,
        friends,
    }
}

export function addFriend(friend){
    return {
        type : ADD_FRIEND,
        friend,
    }
}

export function removeFriend(userId){
    return {
        type : REMOVE_FRIEND,
        userId,
    }
}