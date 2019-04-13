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

        const noOfDays = document.getElementById("noOfDays").value;
        if(noOfDays === "") {
            errorMessage = "Please select an option.";
        }
       
        if (errorMessage === null) {   
            axios.put(ApiConstant.IDENTITY_BASE_URI+sessionStorage.getItem(Constant.USER_PROFILE_ID)+"/status", {
                status:Constant.USER_STATUS_INACTIVE,
                inactiveDays:noOfDays
            })
            .then((response) => {
                console.log(response)      
                if (response.data.success === true) {                   
                    toast.success("Your account is set Inactive", 
                        {
                            position:toast.POSITION.TOP_CENTER,
                            hideProgressBar:true,
                            autoClose:3000,
                            toastId:Constant.toastIdErr
                        });   
                    this.props.updateStatus(Constant.USER_STATUS_INACTIVE);
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
                <div className="hs30" />
                <div className="identityContainer">
                    <div className="header2">
                        <div><label>Inactivate Profile</label></div>                    
                    </div>
                    <div className="identityFieldParent" style={{paddingTop:'50px'}}>
                        <div className="deleteTextDiv">
                            <label>Your profile status is <b>Active</b> now.</label>
                        </div>
                        <div className="deleteTextDiv">
                            <label>You can inactivate your profile if you want to make your profile hidden for a period.</label>
                        </div>
                        <div className="deleteTextDiv">
                            <label>Choose an option:</label>
                             <select id="noOfDays">
                                 <option value="">--Select--</option>
                                 <option value="10">10 Days</option>
                                 <option value="20">20 Days</option>
                                 <option value="30">1 Month</option>
                                 <option value="60">2 Months</option>
                                 <option value="90">3 Months</option>
                             </select>
                        </div>      
                        <div className="deleteTextDiv">
                            <label><b>Note:</b>Once you make your profile Inactive, other users cannot view it.</label>
                        </div>                  
                    </div>                                      
                    <div className="identityFieldParent" style={{paddingBottom:'50px'}} id="submitButton">
                        <button onClick={this.inactivateProfile}>Submit</button>
                    </div>
                </div>
        </div>
        );
    }
}

export default InactivateProfile;