export const GET_COMMENTS = 'GET_COMMENTS';

export function getComments() {
    return async function (dispatch) {
        const res = await fetch('http://localhost:9001/comments');
        const comments = await res.json();
        return dispatch({
            type: 'GET_COMMENTS',
            data: comments,
        });
    };
}
