import React,{Component} from 'react';
import './ConfirmSignUp.css';
import Constant from '../../Constant';
import confirmSignUp from '../../assets/images/confirmSignUp.jpg';
import {Auth} from 'aws-amplify';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';
import axios from 'axios';

class ILogin extends Component {

    constructor() {
        super();

        this.loginClick = this.loginClick.bind(this);

        this.state = {
            success:false
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
                axios.get('http://localhost:8080/thirumanam/user/external/'+user.username,
                {                    
                }) .then((res) => {
                   // Update User Detail to session
                  
                })
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
                    <div> <h2>Welcome to Chandramathi Matrimony! </h2> </div>
                    <div> <h3>You hava successfully confirmed the code. Please login to continue. </h3></div>
                   
                    <div className="codeParent">
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
                </div>
            </div>
        );
    }
}
export default ILogin;