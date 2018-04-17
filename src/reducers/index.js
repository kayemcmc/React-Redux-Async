import { combineReducers } from 'redux';

import postReducer from './posts';
import commentsReducer from './comments';

const rootReducer = combineReducers({
    postReducer,
    commentsReducer,
});

export default rootReducer;