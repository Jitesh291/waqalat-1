//import PropTypes from 'prop-types';
import '../SignIn/SignIn.css';
import { requestSignIn } from '../../actions/signIn';
import { connect } from 'react-redux';

import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../common/FormikControl'
import { Button } from '@material-ui/core';
import IconList from '../IconList/IconList';
import { Link } from 'react-router-dom';

function SignUp (props) {
  const initialValues = {
    firstName: '',
    lastName:  '',
    userName:  '',
    mobile:    '',
    email:     '',
    password:  ''
  }

  const validationSchema = Yup.object({
    firstName: Yup.string()
              .min(2, "Too Short!")
              .max(50, "Too Long!")
              .required("Firstname is required"),
    lastName: Yup.string()
            .min(2, "Too Short!")
            .max(50, "Too Long!")
            .required("Lastname is required"),
    userName: Yup.string().required('Required'),
    mobile: Yup.string()
            .required("Phone number is required")
            .matches(
              /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
              "Invalid phone number"
            ),
    email: Yup.string()
          .email('Invalid email format')
          .required('Required'),
    password: Yup.string()
            .required("Password is required")
            .min(6, "Password is too short - should be 6 chars minimum")
  })

  const onSubmit = values => {
    console.log('Form data', values)
  }

  return (
    <React.Fragment>
    <div className='container'>
      <div className='colContainer'>
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        >
        {formik => {
            return (
            <Form>
              <div className='form-row'>
                <FormikControl
                  control='input'
                  // control='chakraInput'
                  type='firstName'
                  label='First Name'
                  name='firstName'
                  />
                  <FormikControl
                  control='input'
                  // control='chakraInput'
                  type='lastName'
                  label='Last Name'
                  name='lastName'
                  />
              </div>
              
                <FormikControl
                control='input'
                // control='chakraInput'
                type='userName'
                label='User Name'
                name='userName'
                />
                <FormikControl
                control='input'
                // control='chakraInput'
                type='mobile'
                label='Mobile Number'
                name='mobile'
                />
                <FormikControl
                control='input'
                // control='chakraInput'
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
                <Button variant="contained" type='submit' disabled={!formik.isValid}>Submit</Button>
                <div className='noAccount'>Already have an account yet? <Link onClick={()=>props.history.push('./signIn')}>Click here to sign in.</Link></div>
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
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
// Sign Up
	
// 	(R) Required Field
// 	(O) Optional Field
// 	(B) Backend related only

// 	Fields:
// (R) first_name 
// (R) last_name
// (R) email (will be used for login)
// (R) user_name (will be used for login)
// (R) password
// (R) age
// (R) gender (Male/Female/Other)
// (O) mobile
// (B) verified (default False, after email verification, True)
// (B) tnc_accepted (default False, after successful signup, True)

// 	There will be a checkbox for TnC and Privacy Policy.

// 	For verifying sign up we will be sending an OTP to the user’s email address.
// 	After successful verification, users will be allowed to sign in.

// Password:
// Minimum 8 characters and 1 special character required.
// Passwords will not be stored openly in the database, we will store hash of the password which will be one way encrypted only.
