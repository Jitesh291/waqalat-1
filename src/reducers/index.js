import signIn from './signIn';
import signUp from './signUp';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    signIn,
    signUp
})

export default rootReducer;