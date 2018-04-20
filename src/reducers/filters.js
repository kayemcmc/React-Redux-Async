import { SET_TEXT_FILTER } from '../actions/filters';
const initialState = {
    text: '',
}

export default function (state = initialState, action) {
   const { type } = action;
   switch(type) {
    case 'SET_TEXT_FILTER':
        return {
            ...state,
            text: action.text,
        }  
    default:
        return state; 
   }
}