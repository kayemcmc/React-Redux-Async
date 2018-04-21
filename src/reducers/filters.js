import moment from 'moment';
import { SET_TEXT_FILTER } from '../actions/filters';

const initialState = {
    text: '',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
}

export default function (state = initialState, action) {
   const { type } = action;
   switch(type) {
    case 'SET_TEXT_FILTER':
        return {
            ...state,
            text: action.text,
        }  
    case 'SET_START_DATE':
        return {
            ...state,
            startDate: action.startDate,
        }
    case 'SET_END_DATE':
        return {
            ...state,
            startDate: action.endDate,
        }
    default:
        return state; 
   }
}