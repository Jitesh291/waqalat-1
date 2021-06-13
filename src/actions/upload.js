import { signIn } from './constant';

export function requestSignIn(user){ return { type: signIn.REQUEST, user }}
export function signInSuccess(user){ return { type: signIn.SUCCESS, user }}
export function signInFailure(){ return { type: signIn.FAIL }}

