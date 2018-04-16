export const GET_POSTS = 'GET_POSTS';

export function getPosts() {
    return async function (dispatch) {
        const res = await fetch('http://localhost:9001/posts');
        const posts = await res.json();
        console.log(posts);
        return dispatch({
            type: 'GET_POSTS',
            data: posts,
        });
    };
}