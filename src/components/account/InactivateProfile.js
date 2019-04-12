import React, {Component} from 'react';
import './Identity.css';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ApiConstant from '../utils/ApiConstant';
import Constant from '../utils/Constant';

class InactivateProfile extends Component {

    constructor() {
        super();
        this.inactivateProfile = this.inactivateProfile.bind(this);        
    }
     
    inactivateProfile() {
        event.preventDefault();

        let errorMessage = null;
       
        if (errorMessage === null) {   
            axios.put(ApiConstant.IDENTITY_EMAIL_UPDATE, {
                profileId:sessionStorage.getItem(Constant.USER_PROFILE_ID),
                email:email
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
                        <div><label>Inactivate Profile</label></div>                    
                    </div>
                    <div className="identityFieldParent" style={{paddingTop:'50px'}}>
                        <label>Note: Profile cannot be restored after deletion.</label>
                        <label>Please choose a reason:</label>
                    </div>                                      
                    <div className="identityFieldParent" style={{paddingBottom:'50px'}} id="submitButton">
                        <button onClick={this.updateEmail}>Submit</button>
                    </div>
                </div>
        </div>
        );
    }
}

export default InactivateProfile;