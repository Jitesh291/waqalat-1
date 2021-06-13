import { upload } from './constant';

export function uploadRequest(user){ return { type: upload.REQUEST, user }}
export function uploadSuccess(user){ return { type: upload.SUCCESS, user }}
export function uploadFailure(){ return { type: upload.FAIL }}

