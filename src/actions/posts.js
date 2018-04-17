export const GET_POSTS = 'GET_POSTS';
export const GET_POST = 'GET_POST';
export const RESET_POST = 'RESET_POST';

export function getPosts() {
    return async function (dispatch) {
        const res = await fetch('http://localhost:9001/posts');
        const posts = await res.json();
        return dispatch({
            type: 'GET_POSTS',
            data: posts,
        });
    };
}

export function getPost(id) {
    return async function (dispatch) {
        const res = await fetch(`http://localhost:9001/posts/${id}`);
        const post = await res.json();
        return dispatch({
            type: 'GET_POST',
            data: post,
        });
    };
}

export function resetPost() {
    return {
        type: 'RESET_POST',
    }
}