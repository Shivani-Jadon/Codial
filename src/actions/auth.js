import { EDIT_USER_FAIL, EDIT_USER_SUCCESS, LOGIN_FAILED, LOGIN_START, LOGIN_SUCCESS} from './actionTypes';
import { SIGNUP_FAILED, SIGNUP_START, SIGNUP_SUCCESS } from './actionTypes';
import {AUTHENTICATE_USER, LOGOUT, CLEAR_AUTH_STATE } from '../actions/actionTypes';

import { APIUrls } from '../helpers/urls';
import { getFormBody, getAuthTokenFromLocalStorage } from '../helpers/utils';

// FOR LOGIN
export function startLogin() {
 return {
     type : LOGIN_START,
 };   
}

export function loginFailed(errorMsg) {
    return {
        type : LOGIN_FAILED,
        error: errorMsg,
    }
}

export function loginSuccess(user) {
    return {
        type : LOGIN_SUCCESS,
        user,
    }
}

export function login(email, password) {
    return (dispatch) => {
        dispatch(startLogin());
        const url = APIUrls.login();

        fetch(url, {
            method : 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body : getFormBody({ email, password }),
        })
        .then(response => response.json())
        .then((data) => {
            console.log('EDit data' , data);
            if ( data.success) {
                localStorage.setItem('token', data.data.token);
                dispatch(loginSuccess(data.data.user))
                return;
            }
            dispatch(loginFailed(data.message));
        });
    }
}


// FOR SIGNUP
export function startSignup() {
    return {
        type : SIGNUP_START,
    };   
}

export function signupFailed(errorMsg) {
    return {
        type : SIGNUP_FAILED,
        error: errorMsg,
    }
}

export function signupSuccess(user) {
    return {
        type : SIGNUP_SUCCESS,
        user,
    }
}

export function signup(username, email, password, confirmPassword) {
    return (dispatch) => {
        dispatch(startSignup());
        const url = APIUrls.signup();

        fetch(url, {
            method : 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body : getFormBody({ 
                name: username, 
                email, 
                password, 
                confirm_password : confirmPassword 
            }),
        })
        .then(response => response.json())
        .then((data) => {
            console.log('data' , data);
            if ( data.success ) {
                // store token in localStorage
                localStorage.setItem('token', data.data.token);
                dispatch( signupSuccess(data.data.user) )
                return;
            }
            dispatch( signupFailed(data.message) );
        });
    }
}


// PERSIST USER
export function authUser(user) {
    return {
        type: AUTHENTICATE_USER,
        user,
    }
}

export function logoutUser(){
    return{
        type: LOGOUT,
    }
}

export function clearAuthState(){
    return{
        type: CLEAR_AUTH_STATE,
    }
}



// EDIT USER PROFILE
export function editUserSuccessful(user) {
    return{
        type: EDIT_USER_SUCCESS,
        user,
    }
}

export function editUserFail(error) {
    return{
        type: EDIT_USER_FAIL,
        error,
    }
}

export function editUser(name, password, confirmPassword, userId) {
    return (dispatch) => {
       
        const url = APIUrls.editProfile();

        fetch(url, {
            method : 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization:  `Bearer ${getAuthTokenFromLocalStorage()}`,
            },
            body : getFormBody({ name,
                                 password ,
                                 confirm_password: confirmPassword,
                                 id: userId}),
        })
        .then(response => response.json())
        .then((data) => {
            console.log('data' , data);
            if ( data.success) {
                
                dispatch( editUserSuccessful(data.data.user));
                
                if (data.data.token) {
                    localStorage.setItem('token', data.data.token);
                }
                return;
            }

            dispatch( editUserFail(data.message));
        });
    }
}
