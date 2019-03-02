import React, {Component} from 'react';
import confirmSignUp from '../../assets/images/confirmSignUp.jpg';
import Constant from '../utils/Constant';
import {toast} from 'react-toastify';
import ApiConstant from '../utils/ApiConstant';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

class ResetPassword extends Component {

    constructor() {
        super();

        this.resetPasswordKeyPress = this.resetPasswordKeyPress.bind(this);
        this.resetPassword = this.resetPassword.bind(this);  
        
        this.state = {
            username:null
        }
    }
      
    componentDidMount() {
       this.setState({
          //username:this.props.location.state.username            
          username:"nndharbar@gmail.com"
        });
    }

    resetPasswordKeyPress(event) {
        if(event.keyCode === 13) {           
            this.resetPassword(event);
        }
    }
  
    resetPassword(event) { 
        event.preventDefault();

        let errorMessage = null;

        var accessCode = document.getElementById("accessCode").value;
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirmPassword").value;

        if(String.prototype.trim.call(accessCode) === "" ) {
                errorMessage = "Please enter Access Code.";
        } else if (String.prototype.trim.call(password) === "" ) {
            errorMessage = "Please enter password.";
        } else if (String.prototype.trim.call(confirmPassword) === "" ) {
            errorMessage = "Please enter confirm password.";
        } else if(String.prototype.trim.call(password) != 
            String.prototype.trim.call(confirmPassword)) {
            errorMessage = "Password and Confirm Password are not same.";    
        }

        if (errorMessage === null) {                
            axios.post(ApiConstant.IDENTITY_RESET_PASSWORD, {
                username:this.state.username,
                accessCode:accessCode,
                password:password,
            })
            .then((response) => {
                console.log(response);      
                if(response.data.success === true) {
                    this.props.history.push("/resetPasswordResponse");
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
                    <div> <h2>Update Password </h2> </div>
                   
                    <div className="codeParent">                      

                        <div>
                            <div className='fieldParent'>
                                <div className="iloginLabel">
                                Access Code
                                </div>
                                <div className="iloginField">
                                    <input type='text'  id="accessCode" onKeyDown={this.resetPasswordKeyPress}></input>
                                </div>
                            </div>                            
                        </div>
                        <div>
                            <div className='fieldParent'>
                                <div className="iloginLabel">
                                    New Password
                                </div>
                                <div className="iloginField">
                                    <input type='password'  id="password" onKeyDown={this.resetPasswordKeyPress}></input>
                                </div>
                            </div>                            
                        </div>    
                        <div>
                            <div className='fieldParent'>
                                <div className="iloginLabel">
                                    Confirm Password
                                </div>
                                <div className="iloginField">
                                    <input type='password'  id="confirmPassword" onKeyDown={this.resetPasswordKeyPress}></input>
                                </div>
                            </div>                            
                        </div>    

                        <div className="paddingTop10"> 
                            <button style={{width:'200px'}} onClick={this.resetPassword}>Reset Password</button> </div>
                        </div>
                </div>
            </div>
        );
    }
}

export default ResetPassword;