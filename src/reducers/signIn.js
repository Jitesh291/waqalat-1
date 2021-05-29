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
            return {...state, status: 'REQUESTED', user: action.user.data};
        case signIn.SUCCESS:
            return {...state, status: 'AVAILABLE', token: action.payload.data.token, isSignedIn: true};
        case signIn.FAIL:
            return {...state, status: 'ERROR', errorStatus: action.type};
        default:
            return state;
    }
}

export default signInReducer;