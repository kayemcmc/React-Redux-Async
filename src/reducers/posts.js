import { GET_POSTS, GET_POST } from '../actions/posts';
const initialState = {
    posts : [],
    post: {},
    postLoaded: false,
    postsLoaded: false,
}

export default function (state = initialState, action) {
   const { type, data } = action;
   switch(type) {
    case GET_POSTS:
        return {
            ...state,
            posts: data,
            postsLoaded: true,
        } 
    case GET_POST:
        return {
            ...state,
            post: data,
            postLoaded: true,
        } 
    default:
        return state; 
   }
}