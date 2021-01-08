// HELPER TO CONVERT PARAMS IN URLS

export function getFormBody (params) {
    let formBody = [];

    for (let property in params) {
        
        let encodedKey = encodeURIComponent(property); // 'user name' => 'user%20name'
        let encodedValue = encodeURIComponent(params[property]); //'Shivani J' => 'Shivani%20J

        formBody.push(encodedKey + '=' + encodedValue);
    }

    return formBody.join('&');
}


export function getAuthTokenFromLocalStorage() {
    return localStorage.getItem('token');
}