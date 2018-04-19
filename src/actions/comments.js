export const GET_COMMENTS = 'GET_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';

export function addComment(comment, postId) {
    return {
        type: 'ADD_COMMENT',
        comment,
        postId
    }
}
export function getComments(id) {
    return async function (dispatch) {
        const res = await fetch(`http://localhost:9001/posts/${id}/comments`);
        const comments = await res.json();
        return dispatch({
            type: 'GET_COMMENTS',
            data: comments,
            
        });
    };
}
