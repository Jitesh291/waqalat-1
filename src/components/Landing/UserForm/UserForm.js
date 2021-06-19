import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { fetchFields } from '../../../actions/fields';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import FormikControl from '../../common/FormikControl'
import { Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { uploadRequest } from '../../../actions/upload';
import { uploadPayload } from '../../../utils/upload';
import { getInitVals, createYupSchema } from '../../../utils/common';
import Success from './Success';

const useStyles = makeStyles({
    formContainer: {
        left: '20px',
        margin: '40px 340px',
        width: '480px',
        height: '100%',
        padding: '40px',
        boxShadow: '5px 10px 18px grey',
        borderRadius: '20px'
    },
    userForm:{
        padding: '20px'
    }
});

function UserForm(props) {
    const [initialValues, setInitVals] = useState(getInitVals(props.field.fieldsFetched));
    const genderDropdownOptions = [
        { key: 'Choose Gender', value: '' },
        { key: 'Female', value: 'f' },
        { key: 'Male', value: 'm' },
        { key: 'Others', value: 'o' }
      ]
    useEffect(() => {
        if (props.field.status === 'INITIAL') props.fetchFields(props.match.params.id);
        if(Object.keys(initialValues).length === 0 && props.field && props.field.fieldsFetched && props.field.fieldsFetched.length > 0) setInitVals(getInitVals(props.field.fieldsFetched));
        // props.field && props.field.fieldsFetched && props.field.fieldsFetched.length > 0 && props.field.fieldsFetched.map((item, i) => {
        //     var obj = {};
        //     obj[item.key] = '';
        //     return setInitVals({...initialValues, ...obj})
        // })
    },[props, props.field, initialValues])

    //let initialValues = {};
    
    
    // const initialValues = {
    //     name: '',
    //     age: '',
    //     gender: '',
    //     date: '',
    //     email: '',
    //     password: ''
    // }
    const validationSchema = Yup.object(createYupSchema(initialValues));
    const onSubmit = values => {
        const payload = uploadPayload(values, props.userId, props.match.params.id);
        console.log(payload);
        props.requestUpload(payload);
    }
    const isLoading = props.upload && props.upload.status && props.upload.status === 'REQUESTED' ? true : false;
    const classes = useStyles();
    console.log(initialValues)
    return (
        <div className={classes.formContainer}>
            { props.upload.status !== 'AVAILABLE'?
                <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={async (values) => {
                    console.log(values)
                    onSubmit(values)
                }}
                className={classes.userForm}
            >
                {formik => {
                    console.log(formik);
                    return (
                        <Form>
                            {
                                props.field && props.field.fieldsFetched && props.field.fieldsFetched.map((item, i)=>{
                                    return <FormikControl
                                                control={item.key === 'gender'? 'select':'input'}
                                                type={item.key}
                                                label={(item.name)}
                                                name={item.key}
                                                options={item.key === 'gender'? genderDropdownOptions : null}
                                            />
                                })
                            }
                            {/* <FormikControl
                                control='input'
                                type='email'
                                label='Email'
                                name='email'
                            />
                            <FormikControl
                                control='input'
                                type='password'
                                label='Password'
                                name='password'
                            /> */}
                            <Button variant="contained" type='submit' disabled={!formik.isValid || isLoading}>{isLoading ? 'Loading...' : 'Submit'}</Button>
                            {props.upload && props.upload.status === 'ERROR' ? <div style={{marginTop: '20px'}} className='error'>{"There was an error while generating the document. Please check all your inputs. "}</div> : null}
                        </Form>
                    )
                }}
                
            </Formik>
            
            : <Success upload={props.upload}/>
}        </div>
    )
}
const mapStateToProps = state => {
    return {
        field: state.field,
        upload: state.upload,
        userId: state.signIn.userId
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchFields: (id) => dispatch(fetchFields(id)),
        requestUpload: fields => dispatch(uploadRequest(fields))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserForm);

