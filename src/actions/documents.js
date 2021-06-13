import {documents} from './constant';

export function fetchDocuments(){   return { type: documents.REQUEST }}
export function documentsSuccess(payload){ return { type: documents.SUCCESS, payload }}
export function documentsFailure(){ return { type: documents.FAIL }}