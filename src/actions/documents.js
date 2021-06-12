import {documents} from './constant';

export function fetchDocuments(){   return { type: documents.REQUEST }}
export function documentsSuccess(){ return { type: documents.SUCCESS }}
export function documentsFailure(){ return { type: documents.FAIL }}