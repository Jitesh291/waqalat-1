import {fields} from './constant';

export function fetchFields(id){  return { type: fields.REQUEST, id }}
export function fieldsSuccess(payload){ return { type: fields.SUCCESS, payload }}
export function fieldsFailure(){ return { type: fields.FAIL }}