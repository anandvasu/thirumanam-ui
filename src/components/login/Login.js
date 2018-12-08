import React, {Component} from 'react';
import logo from '../../assets/images/logo.gif';
import './Login.css';
import {Auth} from 'aws-amplify';
import {toast} from 'react-toastify';
import {Redirect} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

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
            messageClassName:"messageHide",
            message:"",
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
                username:"Email or Phone",
                messageClassName:"messageHide"
            })
        } else {
            const username = String.prototype.trim.call(event.target.value);
            this.setState({
                username:username,
                messageClassName:"messageHide"
            })
        }
    }

    passwordFocusOut(event) {
        if(String.prototype.trim.call(event.target.value) === "") {
            event.target.type= "text";
            event.target.value = "Password";
            this.setState({
                password:"Password",
                messageClassName:"messageHide"
            })
        } else {
            const password = String.prototype.trim.call(event.target.value);
            this.setState({
                password:password,
                messageClassName:"messageHide"
            })
        }
    }

    loginClick(event) {
        event.preventDefault();

        if(String.prototype.trim.call(this.state.username) === "" || 
            String.prototype.trim.call(this.state.username) === "Email or Phone") {
                console.log("username");
                toast.error("Please enter user name.", 
                    {
                        position:toast.POSITION.TOP_CENTER,
                        hideProgressBar:true,
                        autoClose:3000,
                        testId:20
                    });

        } else if (String.prototype.trim.call(this.state.password) === "" || 
            String.prototype.trim.call(this.state.password) === "Password") {
                console.log("password");               
            toast.error("Please enter Password", 
                {
                    position:toast.POSITION.TOP_CENTER,
                    hideProgressBar:true,
                    autoClose:3000,
                    testId:20
                });
        } else {      
            Auth.signIn(this.state.username,this.state.password)
            .then((user) => {
                console.log(user)      
                sessionStorage.setItem("userSession", user.signInUserSession);      
                this.props.history.push('/signedIn');           
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
                        testId:20
                    });
                }
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
                                        profileId:this.state.profileId
                                    }                                   
                                 }}/>
        }

        return(
            <div>           
                <div className="logo">
                    <img src={logo} alt="Not Available" style={{width:'80px'}} onClick={this.logoClick} /> 
                </div>
                <div className="loginSection">
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
                        <div className='lfield' style={{paddingRight:'20px'}}>
                           <input type="checkbox" /> Remeber me
                        </div>
                        <div className='lfield' style={{paddingLeft:'20px'}}>
                            <a href="#" onClick={this.forgotPassword}>Forgot password?</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);