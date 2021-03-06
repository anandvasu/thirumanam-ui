import React, {Component} from 'react';
import './Identity.css';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ApiConstant from '../utils/ApiConstant';
import Constant from '../utils/Constant';

class ChangePassword extends Component {

    constructor() {
        super();
        this.changePassword = this.changePassword.bind(this);
    }

    changePassword() {
        event.preventDefault();

        let errorMessage = null;

        const currentPassword = document.getElementById("currentPassword").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if(String.prototype.trim.call(currentPassword) === "") {
            errorMessage = "Please enter Current Password.";
        } else if (String.prototype.trim.call(password) === "") {
            errorMessage = "Please enter New Password.";   
        } else if (String.prototype.trim.call(confirmPassword) === "") {
            errorMessage = "Please enter Confirm Password.";   
        } 
        
        
        if (errorMessage === null) {   
            axios.post(ApiConstant.IDENTITY_CHANGE_PASSWORD, {
                accessToken:sessionStorage.getItem(Constant.USER_ACCESS_TOKEN) ,
                currentPassword:currentPassword,
                newPassword:password
            })
            .then((response) => {
                console.log(response)      
                if (response.data.success === true) {                   
                    toast.success("Password Changed Successfully", 
                        {
                            position:toast.POSITION.TOP_CENTER,
                            hideProgressBar:true,
                            autoClose:3000,
                            toastId:Constant.toastIdErr
                        });  
                } else {
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
                if (err !== "") {
                    toast.error(err, 
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
        return(
        <div>
            <div className="hs100" />
            <div>
                <div className="identityContainer">
                    <div className="header2">
                        <div><label>Change Password</label></div>                    
                    </div>
                    <div className="identityFieldParent" style={{paddingTop:'50px'}}>
                        <div className="identityLabel">
                            Current Password
                        </div>
                        <div className="identityField">
                            <input type="password" id="currentPassword" ></input>
                        </div>
                    </div>
                    <div className="identityFieldParent">
                        <div  className="identityLabel">
                            New Password
                        </div>
                        <div className="identityField">
                            <input type="password" id="password" ></input>
                        </div>
                    </div>
                    <div className="identityFieldParent">
                        <div className="identityLabel">
                            Confirm Password
                        </div>
                        <div className="identityField">
                            <input type="password" id="confirmPassword" ></input>
                        </div>
                    </div>
                    <div className="identityFieldParent" style={{paddingBottom:'50px'}}>
                        <button className="standard-button" onClick={this.changePassword}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default ChangePassword;