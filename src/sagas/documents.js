import { call, put } from "redux-saga/effects";
import axios from "axios";

import * as documentActions from "../actions/documents";
import { SERVER_URL } from "../configuration/common";

export function* documents_process() {
    try {
        // const payload = yield call(
        //     getDocuments
        // );
        const payload = {
            "data": [
                {
                    "id": 1,
                    "name": 'Residential Rental Agreement'
                },
                {
                    "id": 2,
                    "name": 'Residential Rental Application'
                },
                {
                    "id": 3,
                    "name": 'Commercial Rental Agreement'
                },
                {
                    "id": 4,
                    "name": 'Residential Rental Agreement'
                }
            ]
        }
        yield put(documentActions.documentsSuccess(payload));
    } catch (e) {
        yield put(
            documentActions.documentsFailure({
                "type": "error",
                "text": "Network Error!"
            })
        );
    }
}

const getDocuments = () => {
    let instance = axios.create({
        headers: { "Content-Type": "application/json" }
    });
    
    return instance.get(`${SERVER_URL}/documents`);
};
