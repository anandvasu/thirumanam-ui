import React,{Component} from 'react';
import './ConfirmSignUp.css';
import Constant from '../utils/Constant';
import ApiConstant from '../utils/ApiConstant';
import welcomeImage from '../../assets/images/wedding.png';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';
import axios from 'axios';
import './ILogin.css';
import {Redirect} from "react-router-dom";
import TopMenu from '../menu/TopMenu';
import Footer from '../footer/Footer';


class ILogin extends Component {

    constructor() {
        super();

        this.loginClick = this.loginClick.bind(this);
        this.loginKeySubmit = this.loginKeySubmit.bind(this);       
        this.forgotPassword = this.forgotPassword.bind(this);  

        this.state = {
            username:"",
            password:"",
            success:false
        }
    }

    forgotPassword(event) {        
        this.props.history.push('/forgotPassword');
    }

    loginKeySubmit(event) {
        if(event.keyCode === 13) {           
            this.loginClick(event);
        }
    }
  
    loginClick(event) { 
        event.preventDefault();

        let errorMessage = null;

        var username = document.getElementById("iLoginUser").value;
        var password = document.getElementById("iLoginPass").value;

        if(String.prototype.trim.call(username) === "" ) {
                errorMessage = "Please enter user name.";
        } else if (String.prototype.trim.call(password) === "" ) {
                errorMessage = "Please enter Password.";   
        }         
        
        if (errorMessage === null) {      
            //We need to set here again because user may enter key press to submit. during that time onblur may not happen.   
            this.setState({
                username:username,
                password:password
            })
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
                        sessionStorage.setItem(Constant.USER_FIRST_NAME, response.data.firstName);  
                        sessionStorage.setItem(Constant.USER_LAST_NAME, response.data.lastName); 
                        sessionStorage.setItem(Constant.USER_GENDER, response.data.gender);
                        sessionStorage.setItem(Constant.USER_ID_TOKEN, response.data.idToken);
                        sessionStorage.setItem(Constant.USER_REFERESH_TOKEN, response.data.refreshToken);
                        sessionStorage.setItem(Constant.USER_PROFILE_ID, response.data.profileId);
                        sessionStorage.setItem(Constant.PROFILE_PERCENT_COMP, response.data.profilePerCompleted);    
                        sessionStorage.setItem(Constant.USER_NAME, username);  
                        sessionStorage.setItem(Constant.USER_ACCESS_TOKEN, response.data.accessToken);       
                        sessionStorage.setItem(Constant.USER_STATUS, response.data.status);             
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

    render() {

        if (this.state.confirmUser === true) {
            return <Redirect to= {{
                            pathname:'/confirmSignUp' ,
                            state:{
                                username:this.state.username
                            }                                   
                    }}/>
        }

        return (
            <div className="ilogincontainer">
               <TopMenu 
                    homePage="false"
                />               
               <div className='hs100'></div>             
                <div className="iLoginLeft">
                    <img src={welcomeImage} alt="Not Available"></img>
                </div>
                <div className="iLoginRight">         
                    <div className="iLoginImage"> 
                        <div>
                        <div>
                            <div className='fieldParent'>
                                <div className="iloginLabel">
                                Email
                                </div>
                                <div className="iloginField">
                                    <input type='text'  id="iLoginUser" onKeyDown={this.loginKeySubmit}></input>
                                </div>
                            </div>                            
                        </div>
                        <div>
                            <div className='fieldParent'>
                                <div className="iloginLabel">
                                    Password
                                </div>
                                <div className="iloginField">
                                <input type='password' id="iLoginPass" onKeyDown={this.loginKeySubmit}></input>
                                </div>
                            </div>                            
                        </div>      
                        <div>
                            <div className='fieldParent'>                               
                                <button style={{width:'350px'}} onClick={this.loginClick}>Login</button>                               
                            </div>                            
                        </div>   
                        </div>  
                        <div style={{paddingTop:'5px'}}>                       
                            <div className='rememberMe'>
                                <input type="checkbox" /> <label>Remeber me</label>
                            </div>
                            <div className="vs50" />
                            <div className='rememberMe'>
                                <a href="#" onClick={this.forgotPassword}>Forgot password?</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hs20'></div>
                <div className="footerDiv">
                    <Footer />
                </div>
            </div>
        );
    }
}
export default ILogin;