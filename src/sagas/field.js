import { call, put } from "redux-saga/effects";
import * as fieldActions from "../actions/fields";
import { SERVER_URL, getAxiosInstance } from "../configuration/common";

export function* field_process(action) {
    try {
        const payload = yield call(
            getfield, action.id
        );
        // const payload = {
        //     "data": {
        //         "fields": [
        //             {
        //                 "key": "name",
        //                 "name": 'Name'
        //             },
        //             {
        //                 "key": "age",
        //                 "name": 'age'
        //             },
        //             {
        //                 "key": "gender",
        //                 "name": 'Gender'
        //             }
        //         ]}
        // }
        yield put(fieldActions.fieldsSuccess(payload.data));
    } catch (e) {
        yield put(
            fieldActions.fieldsFailure({
                "type": "error",
                "text": "Network Error!"
            })
        );
    }
}

const getfield = data => {
    let instance = getAxiosInstance();
    return instance.get(`${SERVER_URL}/documents/${data}`);
};
