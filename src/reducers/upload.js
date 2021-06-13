import {upload} from '../actions/constant';

const uploadState = {
    status: 'INITIAL'
}

const uploadReducer = (state = uploadState, action)=> {
    switch(action.type) {
        case upload.REQUEST:
            return {...state, status: 'REQUESTED'};
        case upload.SUCCESS:
            return {...state, status: 'AVAILABLE', response: action.user.data};
        case upload.FAIL:
            return {...state, status: 'ERROR', errorStatus: action.type};
        default:
            return state;
    }
}

export default uploadReducer;