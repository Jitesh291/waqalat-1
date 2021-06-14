import React from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from './Home/Home';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Documents from './Documents/Documents';
import UserForm from './UserForm/UserForm';
import './Landing.css';

export default class Landing extends React.Component {
  render() {
    return (
    <div>
         <BrowserRouter>
          <Header />
          <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/signIn" component={SignIn} />
                <Route path="/signUp" component={SignUp} />
                <Route path="/documents" component={Documents} />
                <Route path="/fields/:id" render={(props) => <UserForm {...props} />} />
                {/* <Route component={NotFound} /> */}
          </Switch>
          <Footer />
        </BrowserRouter>
    </div>
    )
  }
}
