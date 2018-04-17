import { GET_COMMENTS } from '../actions/comments';
const initialState = {
    comments : [],
}

export default function (state = initialState, action) {
   const { type, data } = action;
   switch(type) {
    case GET_COMMENTS:
        return {
            ...state,
            comments: data,
        } 
    default:
        return state; 
   }
}