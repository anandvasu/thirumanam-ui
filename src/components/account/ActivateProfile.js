import React, {Component} from 'react';
import './Identity.css';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ApiConstant from '../utils/ApiConstant';
import Constant from '../utils/Constant';

class ActivateProfile extends Component {

    constructor() {
        super();
        this.activateProfile = this.activateProfile.bind(this);        
    }
     
    activateProfile() {
        event.preventDefault();

        axios.put(ApiConstant.IDENTITY_BASE_URI+sessionStorage.getItem(Constant.USER_PROFILE_ID)+"/status", {
                status:Constant.USER_STATUS_ACTIVE,
        })
        .then((response) => {
            console.log(response)      
            if (response.data.success === true) {                   
                toast.success("Your account is activated successfully", 
                    {
                        position:toast.POSITION.TOP_CENTER,
                        hideProgressBar:true,
                        autoClose:3000,
                        toastId:Constant.toastIdErr
                    });   
                this.props.updateStatus(Constant.USER_STATUS_ACTIVE);
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
    }

    render() {
        return(
        <div>
                <div className="hs100" />
                <div className="identityContainer">
                    <div className="header2">
                        <div><label>Activate Profile</label></div>                    
                    </div>
                    <div className="identityFieldParent" style={{paddingTop:'50px'}}>
                        <div className="deleteTextDiv">
                            <label>Your profile status is <b>Inactive</b> now. If you would like to change your status, please click Activate Now.</label>
                        </div>                
                    </div>                                      
                    <div className="identityFieldParent" style={{paddingBottom:'50px'}} id="submitButton">
                        <button onClick={this.activateProfile}>Activate</button>
                    </div>
                </div>
        </div>
        );
    }
}

export default ActivateProfile;