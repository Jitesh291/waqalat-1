import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import './SignIn.css';
import { requestSignIn } from '../../actions/signIn';
import { connect } from 'react-redux';
class SignIn extends Component {
    // constructor(props) {
    //     super(props);

    // }

    // componentWillMount() {

    // }

    componentDidMount() {
        this.props.requestSignIn('123');
    }

    componentDidUpdate(prevProps, prevState) {

    }
    render() {
        return (
            <div>
                <h1 className='heading'>Create Your Free Account</h1>
                <div className='row'>
                    {/* Sign In/Up Table */}
                    <div className='col'>
                        
                    </div>{}
                    {/* Icons List */}
                    <div className='col'>
                        
                    </div>
                </div>
            </div>
        );
    }
}

// SignIn.propTypes = {

// };
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
