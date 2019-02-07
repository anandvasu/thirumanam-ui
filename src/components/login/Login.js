import React, {Component} from 'react';
import logo from '../../assets/images/logo.png';
import './Login.css';
import axios from 'axios';
import {Auth} from 'aws-amplify';
import {toast} from 'react-toastify';
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

        this.state = {
            username:"Email or Phone",
            password:"Password",
            confirmUser:false
        }
    }

    emailFocus(event) {
        if(event.target.value === "Email or Phone") {
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
            event.target.value = "Email or Phone";
            this.setState({
                username:"Email or Phone"
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

    loginClick(event) {
        event.preventDefault();

        let errorMessage = null;

        if(String.prototype.trim.call(this.state.username) === "" || 
            String.prototype.trim.call(this.state.username) === "Email or Phone") {
                errorMessage = "Please enter user name.";
        } else if (String.prototype.trim.call(this.state.password) === "" || 
            String.prototype.trim.call(this.state.password) === "Password") {
                errorMessage = "Please enter Password.";   
        } 
        
        
        if (errorMessage === null) {      
            Auth.signIn(this.state.username,this.state.password)
            .then((user) => {
                console.log(user)      
                sessionStorage.setItem("userSession", user.signInUserSession);   
                axios.get(ApiConstant.EXTERNAL_USER_API+user.username,
                {                    
                }) .then((res) => {
                   // Update User Detail to session
                   console.log(res);
                   console.log(res.data.id);
                   const prefix = ((res.data.gender==="M") ? "Mr." : "Ms.");
                   sessionStorage.setItem("thirumanamUser", res.data);   
                   sessionStorage.setItem("profileId", res.data.id);  
                   sessionStorage.setItem("name", prefix + " " +res.data.firstName + " " + res.data.lastName);  
                   sessionStorage.setItem("percentageCompleted", res.data.profileCompPercent); 
                   sessionStorage.setItem("gender", res.data.gender); 
                   this.props.history.push('/signedIn'); 
                }).catch((err) => {
                    toast.error("Server Error Occurred. Please try again later.", 
                        {
                            position:toast.POSITION.TOP_CENTER,
                            hideProgressBar:true,
                            autoClose:3000,
                            toastId:Constant.toastIdErr
                        });
                });                          
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
                            <input type='text'  onChange={this.onChangeEmail} 
                            defaultValue="Email or Phone" onFocus={this.emailFocus} onBlur={this.emailFocusOut}></input>
                        </div>
                        <div className='lfield'>
                            <input type='text' onChange={this.onChangePassword} 
                                defaultValue="Password" onFocus={this.passwordFocus} onBlur={this.passwordFocusOut}></input>
                        </div>
                        <div className='lfield'>
                            <button onClick={this.loginClick}>Login</button>
                        </div>
                    </div>
                    <div>
                       
                        <div className='rememberMe'>
                           <input type="checkbox" /> <label>Remeber me</label>
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