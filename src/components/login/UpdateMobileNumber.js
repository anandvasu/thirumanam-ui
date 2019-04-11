import React, {Component} from 'react';
import TopBar from '../menu/TopBar';
import Footer from '../footer/Footer';
import './Identity.css';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ApiConstant from '../utils/ApiConstant';
import Constant from '../utils/Constant';
import PhoneCountryCode from '../utils/PhoneCountryCode';
import {preventNumbers} from '../utils/Util';

class UpdateMobileNumber extends Component {

    constructor() {
        super();
        this.updateAccountDetail = this.updateAccountDetail.bind(this);
        this.onChangeCountryCode = this.onChangeCountryCode.bind(this);
        this.state = {
            countryCode:"+91"
        }
        
    }

    onChangeCountryCode(event){
        this.setState({countryCode:event.target.value});
    }


    updateAccountDetail() {
        event.preventDefault();

        let errorMessage = null;

        const phoneNumber = document.getElementById("phoneNumber").value;

        if (String.prototype.trim.call(phoneNumber) === "") {
            errorMessage = "Please enter Phone Number.";   
        } 
        
        
        if (errorMessage === null) {   
            axios.put(ApiConstant.IDENTITY_PHONE_UPDATE, {
                phoneNumber:phoneNumber,
                profileId:sessionStorage.getItem(Constant.USER_PROFILE_ID)
            })
            .then((response) => {
                console.log(response)      
                if (response.data.success === true) {                   
                    toast.success("Email updated successfully", 
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
                <div className="identityContainer">
                    <div className="header2">
                        <div><label>Update Mobile Number</label></div>                    
                    </div>                   
                    <div className="identityFieldParent" style={{paddingTop:'50px'}}>
                        <div  className="identityLabel">
                            Phone Number
                        </div>
                        <div className="identityField">
                            <PhoneCountryCode
                                onChangeCountryCode = {this.onChangeCountryCode}
                            />
                            <div style={{width:'3px',display:'inline-block'}} />  
                            <input type="text" id="phoneNumber" style={{width:'140px'}} maxLength='10' 
                                    onKeyPress={preventNumbers}></input>
                        </div>
                    </div>                   
                    <div className="identityFieldParent" style={{paddingBottom:'50px'}}>
                        <button onClick={this.updateAccountDetail}>Submit</button>
                    </div>
                </div>
        </div>
        );
    }
}

export default UpdateMobileNumber;