import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './container/home/Home';
import Contact from './components/contact/Contact';
import Results from './components/results/Results';
import RegisterDetail from './container/register/RegisterDetail';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';
import axios from 'axios';
import Register from './components/register/Register'
import ConfirmSignUp from './components/login/ConfirmSignUp'
import ILogin from './components/login/ILogin'
import Account from './container/account/Account';
import Payment from './components/payment/Payment';
import Aux from './hoc/Aux';
import LoggedInHome from './container/home/LoggedInHome';
import ViewProfile from './container/profile/ViewProfile';
import Preference from './container/preference/Preference';
import ProfileSelf from './container/profile/ProfileSelf';
import UploadProfilePhoto from './container/profile/UploadProfilePhoto';
import UpdatePersonal from './container/register/UpdatePersonal';
import UpdateProfessional from './container/register/UpdateProfessional';
import UpdateReligion from './container/register/UpdateReligion';
import UpdateLocation from './container/register/UpdateLocation';
import UpdateGroomBride from './container/register/UpdateGroomBride';
import UploadHoroscope from './container/register/UploadHoroscope';
import BlockedProfilesHome from './container/home/BlockedProfilesHome';
import ShortListedProfilesHome from './container/home/ShortListedProfilesHome';
import VisitedProfilesHome from './container/home/VisitedProfilesHome';
import ForgotPassword from './components/login/ForgotPassword';
import ResetPassword from './components/login/ResetPassword';
import ResetPasswordResponse from './components/login/ResetPasswordResponse';
import Logout from './components/logout/Logout';
import Constant from './components/utils/Constant';
import ApiConstant from './components/utils/ApiConstant';

class App extends Component {
  
  render() {
    return (
      <Router>
        <Aux className="app">
        <ToastContainer />                    
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/signedIn" component={LoggedInHome} />
            <Route path="/quickRegister" component={Register} />
            <Route path="/contact" component={Contact} />
            <Route path="/results" component={Results} />
            <Route path="/register" component={RegisterDetail} />   
            <Route path="/confirmSignUp" component={ConfirmSignUp} />  
            <Route path="/ilogin" component={ILogin} />
            <Route path="/account" component={Account} />     
            <Route path="/loggedInHome" component={LoggedInHome} /> 
            <Route path="/payment" component={Payment} /> 
            <Route path="/preference" component={Preference} /> 
            <Route path="/profileSelf" component={ProfileSelf} /> 
            <Route path="/updatePersonal" component={UpdatePersonal} /> 
            <Route path="/updateLocation" component={UpdateLocation} /> 
            <Route path="/updateProfessional" component={UpdateProfessional} /> 
            <Route path="/updateReligion" component={UpdateReligion} /> 
            <Route path="/uploadProfilePhoto" component={UploadProfilePhoto} /> 
            <Route path="/uploadHoroscope" component={UploadHoroscope} /> 
            <Route path="/updateGroomBride" component={UpdateGroomBride} /> 
            <Route path="/viewProfile" component={ViewProfile} />    
            <Route path="/blockedProfilesHome" component={BlockedProfilesHome} />          
            <Route path="/shortlistedProfilesHome" component={ShortListedProfilesHome} />     
            <Route path="/visitedProfilesHome" component={VisitedProfilesHome} /> 
            <Route path="/forgotPassword" component={ForgotPassword} /> 
            <Route path="/resetPassword" component={ResetPassword} />  
            <Route path="/resetPasswordResponse" component={ResetPasswordResponse} />   
            <Route path="/logout" component={Logout} />  

                    
        </Aux>
      </Router>
    );
  }
}

export default App;