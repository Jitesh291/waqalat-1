import signIn from './signIn';
import signUp from './signUp';
import documents from './documents';
import field from './field';
import upload from './upload';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    signIn,
    signUp,
    documents, 
    field,
    upload
})

export default rootReducer;