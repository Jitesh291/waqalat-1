import signIn from './signIn';
import signUp from './signUp';
import documents from './documents';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    signIn,
    signUp,
    documents
})

export default rootReducer;