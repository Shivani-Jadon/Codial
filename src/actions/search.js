import { FETCH_SEARCH_RESULTS_FAILURE, FETCH_SEARCH_RESULTS_SUCCESS } from "./actionTypes";
import {APIUrls} from "../helpers/urls";
import { getAuthTokenFromLocalStorage } from "../helpers/utils";

export function searchUser (searchText) {
    return (dispatch) => {
        const url = APIUrls.searchUser(searchText);
        fetch(url, {
            method : 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization:  `Bearer ${getAuthTokenFromLocalStorage()}`,
            },
           
        })
        .then((response) => {
            return response.json();
        }).then((data) => {
            console.log('data', data);

            if( data.success ){
                dispatch( searchUserSuccess(data.data.users) );
            }else{
                dispatch( searchUserFail(data.message) );
            }
            
        });
    }    
}

export function searchUserSuccess(users) {
    return {
        type : FETCH_SEARCH_RESULTS_SUCCESS,
        users,
    }
}

export function searchUserFail(errorMsg) {
    return {
        type : FETCH_SEARCH_RESULTS_FAILURE,
        error : errorMsg,
    }
}