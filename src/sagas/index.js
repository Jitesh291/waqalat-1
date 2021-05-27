import { takeEvery } from 'redux-saga/effects'
import {signup_process} from './signUp';
import {signin_process} from './signIn';
import {signUp, signIn} from '../actions/constant'

export function* rootSaga() {
  yield takeEvery(signUp.REQUEST, signup_process);
  yield takeEvery(signIn.REQUEST, signin_process);
}