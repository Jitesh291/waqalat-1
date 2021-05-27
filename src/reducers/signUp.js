import {signUp} from '../actions/constant';

const signUpState = {
    user : null,
    status: 'INITIAL',
    response: null
}

const signUpReducer = (state = signUpState, action)=> {
    switch(action.type) {
        case signUp.REQUEST:
            return {...state, status: 'REQUESTED', user: action.user};
        case signUp.SUCCESS:
            return {...state, status: 'AVAILABLE', response: action.payload};
        case signUp.FAIL:
            return {...state, status: 'ERROR', errorStatus: action.payload};
        default:
            return state;
    }
}

export default signUpReducer;