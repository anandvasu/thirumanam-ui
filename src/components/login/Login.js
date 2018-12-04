import React, {Component} from 'react';
import logo from '../../assets/images/logo.gif';
import './Login.css';
import {Auth} from 'aws-amplify';
import {toast} from 'react-toastify';
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


        this.state = {
            username:"Email or Phone",
            password:"Password",
            messageClassName:"messageHide",
            message:""
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
                this.setState({
                    messageClassName:"messageDisplay",
                    message:"Please enter Password."
                });
        } else {      
            Auth.signIn(this.state.username,this.state.password)
            .then((user) => {
                console.log(user)
                alert("Logged In");
            }).catch((err) => {
                console.log(err);
                var errMessage = "";
                if (err.code === "UserNotFoundException") {
                    errMessage = "Invalid Email or Password."
                } else {
                    errMessage = "Server Error Occurred. Please try again later."
                }
                 
                this.setState({
                    messageClassName:"messageDisplay",
                    message:errMessage
                });
            });        
        }
    }

    logoClick() {
        this.props.history.push('/home');
    }

    render() {
        return(
            <div style={{backgroundColor:'green'}}>           
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
                            <a href="#">Forgot password?</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);