import { combineReducers } from 'redux';

import postReducer from './posts';
import commentsReducer from './comments';
import filtersReducer from './filters';

const rootReducer = combineReducers({
    postReducer,
    commentsReducer,
    filtersReducer
});

export default rootReducer;