import React, {Component} from 'react';
import TopBar from '../menu/TopBar';
import Footer from '../footer/Footer';
import './Identity.css';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ApiConstant from '../utils/ApiConstant';
import Constant from '../utils/Constant';

class UpdateAccountDetail extends Component {

    constructor() {
        super();
        this.updateAccountDetail = this.updateAccountDetail.bind(this);
    }

    updateAccountDetail() {
        event.preventDefault();

        let errorMessage = null;

        const email = document.getElementById("email").value;
        const phoneNumber = document.getElementById("phoneNumber").value;

        if(String.prototype.trim.call(email) === "") {
            errorMessage = "Please enter Email.";
        } else if (String.prototype.trim.call(phoneNumber) === "") {
            errorMessage = "Please enter Phone Number.";   
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
            <TopBar />
            <div className="hs100" />
            <div>
                <div className="identityContainer">
                    <div>
                        <div className="identityLabel">
                            Email
                        </div>
                        <div className="identityField">
                            <input type="text" id="email" ></input>
                        </div>
                    </div>
                    <div style={{paddingTop:'10px'}}>
                        <div  className="identityLabel">
                            Phone Number
                        </div>
                        <div className="identityField">
                            <input type="text" id="phoneNumber" ></input>
                        </div>
                    </div>                   
                    <div style={{paddingTop:'10px'}}>
                        <button onClick={this.updateAccountDetail}>Submit</button>
                    </div>
                </div>
            </div>
            <Footer /> 
        </div>
        );
    }
}

export default UpdateAccountDetail;