import {signIn} from '../actions/constant';

const signInState = {
    userId : null,
    token: '',
    isSignedIn: false,
    status: 'INITIAL'
}

const signInReducer = (state = signInState, action)=> {
    switch(action.type) {
        case signIn.REQUEST:
            return {...state, status: 'REQUESTED', user: action.user.data};
        case signIn.SUCCESS:
            return {...state, status: 'AVAILABLE', token: action.user.data.data.auth_token, userId: action.user.data.data.id, isSignedIn: true};
        case signIn.FAIL:
            return {...state, status: 'ERROR', errorStatus: action.type};
        case signIn.RESET:
            return signInState;
        default:
            return state;
    }
}

export default signInReducer;