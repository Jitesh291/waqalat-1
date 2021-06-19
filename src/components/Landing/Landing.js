import React from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from './Home/Home';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import NotSignedIn from './NotSignedIn/NotSignedIn';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Documents from './Documents/Documents';
import UserForm from './UserForm/UserForm';
import './Landing.css';

class Landing extends React.Component {
  render() {
    const isSignedIn = this.props.signIn && this.props.signIn.isSignedIn ? true : false;
    return (
    <div>
         <BrowserRouter>
          <Header />
          <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/signIn" component={SignIn} />
                <Route exact path="/signUp" component={SignUp} />
                {isSignedIn ?
                <Switch>
                  <Route exact path="/documents" component={Documents} />
                  <Route path="/documents/:id" component={UserForm} />
                </Switch>
                :
                <NotSignedIn />
                // <Route exact path="/notSignedIn" component={NotSignedIn} /> 
                }
                {/* <Route path="/documents/:id" render={(props) => <UserForm {...props} />} /> */}
                {/* <Route component={NotFound} /> */}
          </Switch>
          <Footer />
        </BrowserRouter>
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      signIn: state.signIn
  }
}

export default connect(mapStateToProps)(Landing);
