import React, {Component} from 'react';
import confirmSignUp from '../../assets/images/confirmSignUp.jpg';
import Constant from '../utils/Constant';
import {toast} from 'react-toastify';
import ApiConstant from '../utils/ApiConstant';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

class ForgotPassword extends Component {

    constructor() {
        super();

        this.recoverPasswordKeyPress = this.recoverPasswordKeyPress.bind(this);
        this.recoverPassowrd = this.recoverPassowrd.bind(this);       
    }    

    recoverPasswordKeyPress(event) {
        if(event.keyCode === 13) {           
            this.recoverPassowrd(event);
        }
    }
  
    recoverPassowrd(event) { 
        event.preventDefault();

        let errorMessage = null;

        var username = document.getElementById("username").value;

        if(String.prototype.trim.call(username) === "" ) {
                errorMessage = "Please enter email.";
        } 
        if (errorMessage === null) {                
            axios.post(ApiConstant.IDENTITY_FORGOT_PASSWORD, {
                username:username
            })
            .then((response) => {
                console.log(response);      
                if(response.data.success === true) {
                    this.props.history.push({ 
                        pathname:'/resetPassword',
                        state:{
                            deliveryMedium:response.data.deliveryMedium,
                            destination:response.data.destination,
                        }
                    });
                } else if(response.data.limitExceed === true) {
                    toast.error("Access code delivered more than 5 times. Please try later." , 
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


    render() {
        return (
            <div className="confirmSignUpContainer">
                <div className="signUpLeft">
                    <img src={confirmSignUp} alt="Not Available"></img>
                </div>
                <div className="signUpRight">
                    <div style={{textAlign:'left'}}> <h2>Recover Password </h2> </div>
                    <div style={{textAlign:'left'}}> Enter your email address to send a recovery email.</div>
                    <div className="codeParent">       
                        <div className='fieldParent'>
                            <div className="iloginLabel">
                                Email
                            </div>
                            <div className="iloginField">
                                <input type='text'  id="username" onKeyDown={this.recoverPasswordKeyPress}></input>
                            </div>
                        </div>                         
                        <div className="fieldParent"> 
                            <div>
                                <button style={{width:'100%'}} onClick={this.recoverPassowrd}>Recover Password</button> </div>
                            </div>
                        </div>
                        <div className='fieldParent'>
                            <div style={{display:'inline-block',textAlign:'left',width:'50%'}}>
                                Goto <a href="#" onClick = {() => this.props.history.push("/ilogin")} >Login</a></div>
                            <div style={{display:'inline-block',textAlign:'right',width:'50%'}}> 
                                Goto <a href="#" onClick = {() => this.props.history.push("/home")}>Home </a>
                            </div>
                        </div>
                </div>
            </div>
        );
    }
}

export default ForgotPassword;