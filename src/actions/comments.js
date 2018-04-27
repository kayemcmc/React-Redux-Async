import axios from 'axios';
export const GET_COMMENTS = 'GET_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';


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

// Add Comment
export const addComment = (postId, commentData) => dispatch => {
    axios
      .post(`http://localhost:9001/posts/${postId}/comments`, commentData)
      .then(res =>
        dispatch({
          type: ADD_COMMENT,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };

  

