//import PropTypes from 'prop-types';
import './SignIn.css';
import { requestSignIn } from '../../actions/signIn';
import { connect } from 'react-redux';

import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../common/FormikControl'
import { Button, Link } from '@material-ui/core';
import IconList from '../IconList/IconList';
import { getSignInPayload } from '../../utils/signIn';
//import { Link } from 'react-router-dom';

function SignIn (props) {
  const initialValues = {
    email: '',
    password: ''
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Required'),
    password: Yup.string()
    .required("Password is required")
    .min(6, "Password is too short - should be 6 chars minimum")
  })

  const onSubmit = values => {
    props.requestSignIn(getSignInPayload(values));
  }

  const isLoading = props.signIn && props.signIn.status && props.signIn.status === 'REQUESTED' ? true : false;

  return (
    <React.Fragment>
    <div className='container'>
      <div className='colContainer'>
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
      <div className='colContainerIcon'>
          <IconList/>
      </div>
    </div>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
    return {
        signIn: state.signIn
    }
}
const mapDispatchToProps = dispatch => {
    return {
        requestSignIn: (user) => dispatch(requestSignIn(user))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);