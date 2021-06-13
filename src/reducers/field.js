import {fields} from '../actions/constant';

const initialState = {
    fieldsFetched: [],
    status: 'INITIAL'
}

const fieldReducer = (state = initialState, action) => {
    switch (action.type) {
        case fields.SUCCESS:
            return { ...state, fieldsFetched: action.payload.fields, status: 'AVAILABLE' };
        case fields.FAIL:
            return { ...state, status: 'ERROR' };
        default:
            return state;
    }
};

export default fieldReducer;
