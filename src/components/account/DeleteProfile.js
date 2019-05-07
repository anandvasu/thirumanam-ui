import React, {Component} from 'react';
import './Identity.css';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ApiConstant from '../utils/ApiConstant';
import Constant from '../utils/Constant';

class DeleteProfile extends Component {

    constructor() {
        super();
        this.deleteProfile = this.deleteProfile.bind(this);        
    }
     
    deleteProfile() {
        event.preventDefault();

        let errorMessage = null;
       
        if (errorMessage === null) {   
            axios.put(ApiConstant.IDENTITY_BASE_URI+sessionStorage.getItem(Constant.USER_PROFILE_ID)+"/delete", {
                accessToken:sessionStorage.getItem(Constant.USER_ACCESS_TOKEN),
                source:"C",
                reason:"R"
            })
            .then((response) => {
                console.log(response)      
                if (response.data.success === true) {                   
                      
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
                        <div><label>Delete Profile</label></div>                    
                    </div>
                    <div className="identityFieldParent" style={{paddingTop:'20px'}}>
                        <div style={{width:'100%'}}>
                            <div className="deleteTextDiv">
                                <label>Note: Profile cannot be restored after deletion.</label>
                            </div>
                            <div className="deleteTextDiv">
                                <label>Please choose a reason:</label>
                                <select style={{paddingLeft:'10px'}}>
                                    <option value="">--Select--</option>
                                    <option value="F">Match Found</option>
                                    <option value="M">Married</option>
                                    <option value="O">Other</option>
                                </select>
                            </div>
                        </div>
                    </div>                                      
                    <div className="identityFieldParent" style={{paddingBottom:'50px'}} id="submitButton">
                        <button className="standard-button" onClick={this.deleteProfile}>Submit</button>
                    </div>
                </div>
        </div>
        );
    }
}

export default DeleteProfile;