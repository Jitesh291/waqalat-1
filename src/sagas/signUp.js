
import { takeEvery, delay } from "redux-saga";
import { call, put, select } from "redux-saga/effects";
import axios from "axios";

import * as signupActions from "actions/signUp";

function* signup_process(action) {
    try {
        const payload = yield call(
            postSignupToAPI,
            action.signupData
        );
    } catch (e) {
        yield put(
            signupActions.signInFailure({
                "type": "error",
                "text": "Network Error!"
            })
        );
    }
}

const postSignupToAPI = data => {

    let bodydata = JSON.stringify({
        first_name: data.first_name,
        last_name: data.last_name,
        user_name: data.user_name,
        email: data.email,
        age: data.age,
        gender: data.gender,
        mobile: data.mobile,
        tnc_accepted: data.tnc_accepted,
        password: data.password

    });
    let instance = axios.create({
        headers: { "Content-Type": "application/json" }
    });

    return instance.post("https://cd8a68fef241.ngrok.io/user-management/users", bodydata);

};
export function* watchSignupRequest() {
    yield* takeEvery( signupActions.SIGNUP_REQUEST, signup_process );
}