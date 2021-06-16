import { call, put } from "redux-saga/effects";
import axios from "axios";

import * as signinActions from "../actions/signIn";
import { SERVER_URL } from "../configuration/common";

export function* signin_process(action) {
    try {
        const payload = yield call(
            postSigninToAPI,
            action.user
        );
        // const payload = {
        //     'data': {
        //         "auth_token": 'abcdefgh',
        //         id: 5
        //     }
        // }
        yield put(signinActions.signInSuccess(payload));
    } catch (e) {
        yield put(
            signinActions.signInFailure({
                "type": "error",
                "text": "Network Error!"
            })
        );
    }
}

const postSigninToAPI = data => {
    let instance = axios.create({
        headers: { "Content-Type": "application/json" }
    });
    
    return instance.post(`${SERVER_URL}/auth/login`, data);
};
