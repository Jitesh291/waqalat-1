import { signUp } from './constant';

export function requestSignUp(user){ return { type: signUp.REQUEST, user }}
export function signInSuccess(user){ return { type: signUp.SUCCESS, user }}
export function signInFailure(user){ return { type: signUp.FAIL, user }}

