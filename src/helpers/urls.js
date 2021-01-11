// HELPER TO STORE URLS

const API_ROOT = 'http://codeial.com:8000/api/v2';

export const APIUrls = {
    login : () => `${API_ROOT}/users/login`,
    signup : () => `${API_ROOT}/users/signup`,
    editProfile : () => `${API_ROOT}/users/edit`,
    userProfile : (userId) => `${API_ROOT}/users/${userId}`,
    fetchPosts: (page = 1, limit = 5) => `${API_ROOT}/posts?page=${page}&limit=${limit}`,
    fetchFriends: () => `${API_ROOT}/friendship/fetch_user_friends`,
    addFriends: (userId) => `${API_ROOT}/friendship/create_friendship?user_id=${userId}`,
    removeFriends: (userId) => `${API_ROOT}/friendship/remove_friendship?user_id=${userId}`,
 }