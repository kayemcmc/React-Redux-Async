import { GET_COMMENTS, ADD_COMMENT } from '../actions/comments';
const initialState = {
    comments : [],
}

export default function (state = initialState, action) {
   const { type, data } = action;
   switch(type) {
    case ADD_COMMENT:
        return [
            ...state,
            action.comment
        ]
    case GET_COMMENTS:
        return {
            ...state,
            comments: data,
        } 
    default:
        return state; 
   }
}