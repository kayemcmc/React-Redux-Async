const initialState = {
    posts : []
}

export default function (state = initialState, action) {
   const { type } = action;
   switch(type) {
    case 'GET_POSTS':
        return state;
    default:
        return state; 
   }
}