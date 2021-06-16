import * as Yup from 'yup';

export function createYupSchema(initialVals) {
    let yupObj = {}
    Object.keys(initialVals).forEach(item => {
        switch(item) {
        case 'name':
            return Object.assign(yupObj, {name: Yup.string().required('Required')});
        case 'gender':
            return Object.assign(yupObj, {gender: Yup.string().required('Required')});
        case 'age':
            return Object.assign(yupObj, {age: Yup.number().typeError('Invalid age format').required('Required').min(18, "You must be atleast 18 years old.").max(60, "Maximum age can be 60")});

      }
  })
    return yupObj;
}

export const getInitVals = fields => {
    let initVals = {};
    fields && fields.map(item => initVals[item.key] = '')

    return initVals;
}