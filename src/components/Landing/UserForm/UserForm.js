import React, {useState, useEffect} from 'react';
import { connect } from "react-redux";
import { fetchFields } from '../../../actions/fields';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import FormikControl from '../../common/FormikControl'
import { Button, Link } from '@material-ui/core';

function UserForm(props) {
    useEffect(()=>{
        if(props.field.status === 'INITIAL') props.fetchFields(props.match.params.id);
    })
    const initialValues = {
        name: '',
        age: '',
        date: '',
        email: '',
        password: ''
    }
    const validationSchema = Yup.object({
        name: Yup.string()
          .required('Required'),
          birthDate: Yup.date()
            .required('Required')
            .nullable(),
        email: Yup.string()
          .email('Invalid email format')
          .required('Required'),
        password: Yup.string()
        .required("Password is required")
        .min(6, "Password is too short - should be 6 chars minimum")
    })
    const onSubmit = values => {
        props.requestUpload((values));
      }
    const { id } = props.match.params;
    console.log(id);
    const isLoading = props.upload && props.upload.status && props.upload.status === 'REQUESTED' ? true : false;

    return (
        <div>
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          onSubmit(values)
        }}
        >
        {formik => {
            return (
            <Form>
                <FormikControl
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
                />
                <Button variant="contained" type='submit' disabled={!formik.isValid || isLoading}>{isLoading ? 'Loading...' : 'Submit'}</Button>
                {props.signIn && props.signIn.status === 'ERROR' ? <div className='error'>{"There was an error while logging you in "}</div> : null}
                <div className='noAccount'>Don't have an account yet? <Link style={{cursor: 'pointer'}} onClick={()=>props.history.push('./signUp')}>Click here.</Link></div>
            </Form>
            )
        }}
        </Formik>
    </div>
    )
}
const mapStateToProps = state => {
    return {
        field: state.field
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchFields: (id) => dispatch(fetchFields(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserForm);

