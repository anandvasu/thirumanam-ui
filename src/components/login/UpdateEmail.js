import React, {Component} from 'react';
import TopBar from '../menu/TopBar';
import Footer from '../footer/Footer';
import './Identity.css';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ApiConstant from '../utils/ApiConstant';
import Constant from '../utils/Constant';

class UpdateEmail extends Component {

    constructor() {
        super();
        this.updateEmail = this.updateEmail.bind(this);
    }

    updateEmail() {
        event.preventDefault();

        let errorMessage = null;

        const email = document.getElementById("email").value;

        if(String.prototype.trim.call(email) === "") {
            errorMessage = "Please enter Email.";
        }        
        
        if (errorMessage === null) {   
            axios.put(ApiConstant.IDENTITY_ACCOUNT_UPDATE, {
                accessToken:sessionStorage.getItem(Constant.USER_ACCESS_TOKEN) ,
                email:email,
                phoneNumber:phoneNumber
            })
            .then((response) => {
                console.log(response)      
                if (response.data.success === true) {                   
                    this.props.history.push('/signedIn');   
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
                        <div><label>Update Email</label></div>                    
                    </div>
                    <div className="identityFieldParent" style={{paddingTop:'50px'}}>
                        <div className="identityLabel">
                            Email
                        </div>
                        <div className="identityField">
                            <input type="text" id="email" ></input>
                        </div>
                    </div>                                      
                    <div className="identityFieldParent" style={{paddingBottom:'50px'}}>
                        <button onClick={this.updateEmail}>Submit</button>
                    </div>
                </div>
        </div>
        );
    }
}

export default UpdateEmail;