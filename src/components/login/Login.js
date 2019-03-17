import React, {Component} from 'react';
import logo from '../../assets/images/logo.png';
import './Login.css';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Redirect} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import ApiConstant from '../utils/ApiConstant';
import Constant from '../utils/Constant';

import {
    withRouter
  } from 'react-router-dom';

  
class Login extends Component {

    constructor() {
        super();

        this.loginClick = this.loginClick.bind(this);
        this.emailFocusOut = this.emailFocusOut.bind(this);
        this.passwordFocusOut = this.passwordFocusOut.bind(this);
        this.logoClick = this.logoClick.bind(this);
        this.forgotPassword = this.forgotPassword.bind(this);
        this.loginKeySubmit = this.loginKeySubmit.bind(this);        

        this.state = {
            username:"Email",
            password:"Password",
            confirmUser:false
        }
    }    
    emailFocus(event) {
        if(event.target.value === "Email") {
            event.target.value = "";
        }
    }

    passwordFocus(event) {
        if(event.target.value === "Password") {
            event.target.value = "";
            event.target.type="password";
        }
    }

    emailFocusOut(event) {
        if(String.prototype.trim.call(event.target.value) === "") {
            event.target.value = "Email";
            this.setState({
                username:"Email"
            })
        } else {
            const username = String.prototype.trim.call(event.target.value);
            this.setState({
                username:username
            })
        }
    }

    passwordFocusOut(event) {
        if(String.prototype.trim.call(event.target.value) === "") {
            event.target.type= "text";
            event.target.value = "Password";
            this.setState({
                password:"Password"
            })
        } else {
            const password = String.prototype.trim.call(event.target.value);
            this.setState({
                password:password
            })
        }
    }

    loginKeySubmit(event) {
        if(event.keyCode === 13) {           
            this.loginClick(event);
        }
    }

    loginClick(event) {
        event.preventDefault();

        let errorMessage = null;

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if(String.prototype.trim.call(username) === "" || 
            String.prototype.trim.call(username) === "Email") {
                errorMessage = "Please enter user name.";
        } else if (String.prototype.trim.call(password) === "" || 
            String.prototype.trim.call(password) === "Password") {
                errorMessage = "Please enter Password.";   
        } 
        
        
        if (errorMessage === null) {   
            //We need to set here again because user may enter key press to submit. during that time onblur may not happen.   
            this.setState({
                username:username,
                password:password
            });

            axios.post(ApiConstant.IDENTITY_USER_LOGIN, {
                username:username,
                password:password
            })
            .then((response) => {
                console.log(response)      
                if (response.data.success === true) {
                    if (response.data.userConfirmed === false){
                        this.setState({
                            confirmUser:true
                        })
                    } else {
                        console.log(response);
                        sessionStorage.setItem(Constant.USER_FIRST_NAME, response.data.firstName);  
                        sessionStorage.setItem(Constant.USER_LAST_NAME, response.data.lastName); 
                        sessionStorage.setItem(Constant.USER_GENDER, response.data.gender);
                        sessionStorage.setItem(Constant.USER_ID_TOKEN, response.data.idToken);
                        sessionStorage.setItem(Constant.USER_REFERESH_TOKEN, response.data.refreshToken);
                        sessionStorage.setItem(Constant.USER_PROFILE_ID, response.data.profileId);
                        sessionStorage.setItem(Constant.PROFILE_PERCENT_COMP, response.data.profilePerCompleted);  
                        sessionStorage.setItem(Constant.USER_NAME, username);  
                        sessionStorage.setItem(Constant.USER_ACCESS_TOKEN, response.data.accessToken);        
                        if(document.getElementById("rememberMe").checked) {
                            localStorage.setItem(Constant.USER_REFERESH_TOKEN, response.data.refreshToken);
                        }  
                        this.props.history.push('/signedIn');   
                    }
                } else if (response.data.errorMessage !== null) {  
                    toast.error(response.data.errorMessage, 
                        {
                            position:toast.POSITION.TOP_CENTER,
                            hideProgressBar:true,
                            autoClose:3000,
                            toastId:Constant.toastIdErr
                        });
                }                                
            }).catch((err) => {
                console.log(err);
                var errMessage = "";
                if (err.code === "UserNotFoundException" || err.code === "NotAuthorizedException") {
                    errMessage = "Invalid Email or Password."
                } else if (err.code === "UserNotConfirmedException" || err.code === "UserNotConfirmedException") {                
                    this.setState({
                        confirmUser:true
                    })
                } else {
                    errMessage = "Server Error Occurred. Please try again later."
                }

                if (errMessage !== "") {
                    toast.error(errMessage, 
                    {
                        position:toast.POSITION.TOP_CENTER,
                        hideProgressBar:true,
                        autoClose:3000,
                        toastId:Constant.toastIdErr
                    });
                }
            });        
        } else {
            toast.error(errorMessage, 
                {
                    position:toast.POSITION.TOP_CENTER,
                    hideProgressBar:true,
                    autoClose:3000,
                    toastId:Constant.toastIdErr
                });
        }
    }

    logoClick() {
        this.props.history.push('/home');
    }

    forgotPassword(event) {        
        this.props.history.push('/forgotPassword');
    }

    render() {

        if (this.state.confirmUser === true) {
            return <Redirect to= {{
                                    pathname:'/confirmSignUp' ,
                                    state:{
                                        username:this.state.username
                                    }                                   
                                 }}/>
        }

        return(
            <div className="loginContainer">   
                <div className="logo">
                    <div style={{display:'inline-block'}}>
                        <img src={logo} alt="Not Available" onClick={this.logoClick} /> 
                    </div>                    
                    <div className="matrimonyName">
                        <label><h2>Chandramathi Matrimony</h2></label> 
                    </div>                 
                </div>
                <div className="loginSection">
                    <div className="hs20" />
                    <div>
                        <div className='lfield'>
                            <input type='text'  onChange={this.onChangeEmail} id="username"
                            defaultValue="Email" onFocus={this.emailFocus} onBlur={this.emailFocusOut} onKeyDown={this.loginKeySubmit}></input>
                        </div>
                        <div className='lfield'>
                            <input type='text' onChange={this.onChangePassword} id="password"
                                defaultValue="Password" onFocus={this.passwordFocus} onBlur={this.passwordFocusOut} onKeyDown={this.loginKeySubmit}></input>
                        </div>
                        <div className='lfield'>
                            <button onClick={this.loginClick}>Login</button>
                        </div>
                    </div>
                    <div style={{paddingTop:'5px'}}>                       
                        <div className='rememberMe'>
                           <input type="checkbox" id="rememberMe"/> <label>Remeber me</label>
                        </div>
                        <div className="vs50" />
                        <div className='rememberMe'>
                            <a href="#" onClick={this.forgotPassword}>Forgot password?</a>
                        </div>
                        <div className="vs100" />
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);