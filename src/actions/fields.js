import {fields} from './constant';

export function fetchFields(){   return { type: fields.REQUEST }}
export function fieldsSuccess(payload){ return { type: fields.SUCCESS, payload }}
export function fieldsFailure(){ return { type: fields.FAIL }}