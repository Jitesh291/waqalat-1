import {documents} from '../actions/constant';

const initialState = {
    documents: [],
    componentState: 'INITIAL'
}

const documentReducer = (state = initialState, action) => {
    switch (action.type) {
        case documents.SUCCESS:
            return { ...state, documents: action.payload.data, componentState: 'AVAILABLE' };
        case documents.FAIL:
            return { ...state, componentState: 'ERROR' };
        default:
            return state;
    }
};

export default documentReducer;
