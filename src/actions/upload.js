import { upload } from './constant';

export function uploadRequest(fields){ return { type: upload.REQUEST, fields }}
export function uploadSuccess(user){ return { type: upload.SUCCESS, user }}
export function uploadFailure(){ return { type: upload.FAIL }}

