import { takeEvery } from 'redux-saga/effects'
import {signup_process} from './signUp';
import {signin_process} from './signIn';
import {documents_process} from './documents';
import {signUp, signIn, documents} from '../actions/constant'

export function* rootSaga() {
  yield takeEvery(signUp.REQUEST, signup_process);
  yield takeEvery(signIn.REQUEST, signin_process);
  yield takeEvery(documents.REQUEST, documents_process);
}