export function fetchPosts(){
    return (dispatch) => {
        const url = 'http://codial.com:8000/api/v2/posts?page=1&limit=5';
        fetch(url).then((response) => {
            console.log('response : ', response)
        });
    };
}