import {signIn} from '../actions/constant';

const signInState = {
    user : null,
    token: [],
    isSignedIn: false,
    status: 'INITIAL'
}

const signInReducer = (state = signInState, action)=> {
    switch(action.type) {
        case signIn.REQUEST:
            return {...state, status: 'REQUESTED', user: action.user}
        default:
            return state;
    }
}

export default signInReducer;