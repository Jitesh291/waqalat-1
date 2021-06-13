import {documents} from '../actions/constant';

const initialState = {
    documents: [],
    status: 'INITIAL'
}

const documentReducer = (state = initialState, action) => {
    switch (action.type) {
        case documents.SUCCESS:
            return { ...state, documents: action.payload.data, status: 'AVAILABLE' };
        case documents.FAIL:
            return { ...state, status: 'ERROR' };
        default:
            return state;
    }
};

export default documentReducer;
