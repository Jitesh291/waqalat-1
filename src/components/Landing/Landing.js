import React from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
                {/* <Route component={NotFound} /> */}
          </Switch>
          <Footer />
        </BrowserRouter>
    </div>
    )
  }
}
