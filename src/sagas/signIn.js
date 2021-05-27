import { call, put } from "redux-saga/effects";
import axios from "axios";

import * as signinActions from "../actions/signIn";

export function* signin_process(action) {
    try {
        const payload = yield call(
            postSigninToAPI,
            action.user
        );
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
    
    return instance.post("https://cd8a68fef241.ngrok.io/auth/login", data);
};
