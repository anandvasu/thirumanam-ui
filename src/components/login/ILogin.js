import React,{Component} from 'react';
import './ConfirmSignUp.css';
import Constant from '../../Constant';
import welcomeImage from '../../assets/images/wedding.png';
import {Auth} from 'aws-amplify';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';
import axios from 'axios';
import './ILogin.css';
import TopBar from '../menu/TopBar';
import GlobalMenu from '../menu/GlobalMenu';
import Footer from '../footer/Footer';

class ILogin extends Component {

    constructor() {
        super();

        this.loginClick = this.loginClick.bind(this);

        this.state = {
            username:"",
            password:"",
            success:false
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
            Auth.signIn(username,password)
            .then((user) => {
                console.log(user)      
                sessionStorage.setItem("userSession", user.signInUserSession);   
                axios.get('/thirumanam/user/external/'+user.username,
                {                    
                }) .then((res) => {
                   // Update User Detail to session
                   sessionStorage.setItem("userSession", res.signInUserSession);   
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
            <div className="ilogincontainer">
               <TopBar />
               <div className='hs1'></div>
               <GlobalMenu />
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
                                Email or Phone:
                                </div>
                                <div className="iloginField">
                                    <input type='text'  id="iLoginUser" ></input>
                                </div>
                            </div>                            
                        </div>
                        <div>
                            <div className='fieldParent'>
                                <div className="iloginLabel">
                                    Password:
                                </div>
                                <div className="iloginField">
                                <input type='password' id="iLoginPass" ></input>
                                </div>
                            </div>                            
                        </div>      
                        <div>
                            <div className='fieldParent'>
                                <div className="iloginLabel">                                  
                                </div>
                                <div className="iloginField">
                                    <button onClick={this.loginClick}>Login</button>
                                </div>
                            </div>                            
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