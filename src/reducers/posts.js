import { GET_POSTS, GET_POST, RESET_POST } from '../actions/posts';
const initialState = {
    posts : [],
    post: {},
    postLoaded: false,
    postsLoadedAt: null,
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
            postsLoadedAt: new Date(),
        } 
    case GET_POST:
        return {
            ...state,
            post: data,
            postLoaded: true,
        } 
    case RESET_POST:
        return {
            ...state,
            post: {},
            postLoaded: false,
        } 
    default:
        return state; 
   }
}