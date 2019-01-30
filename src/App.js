import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './container/home/Home';
import Contact from './components/contact/Contact';
import Results from './components/results/Results';
import RegisterDetail from './container/register/RegisterDetail';
import Message from './components/message/Message';
import {ToastContainer} from 'react-toastify';
import Register from './components/register/Register'
import ConfirmSignUp from './components/login/ConfirmSignUp'
import ILogin from './components/login/ILogin'
import Account from './container/account/Account';
import Payment from './components/payment/Payment';
import Aux from './hoc/Aux';
import LoggedInHome from './components/login/LoggedInHome';
import Preference from './container/preference/Preference';
import ProfileSelf from './container/profile/ProfileSelf';

class App extends Component {

  constructor() {
    super();
    this.state = {     
      messageClassName:"messageHide",
      message:""
    }
  }

  render() {
    return (
      <Router>
        <Aux className="app">
        <ToastContainer />          
          <Message id="message" message={this.state.message} messageClassName={this.state.messageClassName} />                  
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/signedIn" component={LoggedInHome} />
            <Route exact path="/quickRegister" component={Register} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/results" component={Results} />
            <Route exact path="/register" component={RegisterDetail} />   
            <Route exact path="/confirmSignUp" component={ConfirmSignUp} />  
            <Route exact path="/ilogin" component={ILogin} />
            <Route exact path="/account" component={Account} />     
            <Route exact path="/loggedInHome" component={LoggedInHome} /> 
            <Route exact path="/payment" component={Payment} /> 
            <Route exact path="/preference" component={Preference} /> 
            <Route exact path="/profileSelf" component={ProfileSelf} /> 
        </Aux>
      </Router>
    );
  }
}

export default App;