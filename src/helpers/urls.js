// HELPER TO STORE URLS

const API_ROOT = 'http://codeial.com:8000/api/v2';

export const APIUrls = {
    login : () => `${API_ROOT}/users/login`,
    signup : () => `${API_ROOT}/users/signup`,
    editProfile : () => `${API_ROOT}/users/edit`,
    fetchPosts: (page = 1, limit = 5) => `${API_ROOT}/posts?page=${page}&limit=${limit}`
 }