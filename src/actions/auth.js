import { LOGIN_FAILED, LOGIN_START, LOGIN_SUCCESS} from './actionTypes';
import { SIGNUP_FAILED, SIGNUP_START, SIGNUP_SUCCESS } from './actionTypes';
import {AUTHENTICATE_USER, LOGOUT} from '../actions/actionTypes';
import { APIUrls } from '../helpers/urls';
import { getFormBody } from '../helpers/utils';

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
        .then(data => {
            console.log('data' , data);
            if ( data.success) {
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
                username, 
                email, 
                password, 
                confirm_password : confirmPassword 
            }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('data' , data);
            if ( data.success) {
                // store token in localStorage
                localStorage.setItem('token', data.data.token);
                dispatch(signupSuccess(data.data.user))
                return;
            }
            dispatch(signupFailed(data.message));
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