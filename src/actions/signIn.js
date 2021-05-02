import { signIn } from './constant';

export function requestSignIn(user){ return { type: signIn.REQUEST, user }}
const signInSuccess = (user) => { return { type: signIn.SUCCESS, user }}
const signInFailure = (user) => { return { type: signIn.FAIL, user }}

export const signInActions = {
    // requestSignIn,
    signInSuccess,
    signInFailure
}