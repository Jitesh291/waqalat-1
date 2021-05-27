import {signIn} from '../actions/constant';

const signInState = {
    user : null,
    token: '',
    isSignedIn: false,
    status: 'INITIAL'
}

const signInReducer = (state = signInState, action)=> {
    switch(action.type) {
        case signIn.REQUEST:
            return {...state, status: 'REQUESTED', user: action.user};
        case signIn.SUCCESS:
            return {...state, status: 'AVAILABLE', token: action.payload.token, isSignedIn: true};
        case signIn.FAIL:
            return {...state, status: 'ERROR', errorStatus: action.payload};
        default:
            return state;
    }
}

export default signInReducer;