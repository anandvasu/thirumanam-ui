import React, {Component} from 'react';
import TopBar from '../menu/TopBar';
import Footer from '../footer/Footer';
import './Identity.css';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ApiConstant from '../utils/ApiConstant';
import Constant from '../utils/Constant';
import {validateEmail} from '../utils/Util';

class UpdateEmail extends Component {

    constructor() {
        super();
        this.updateEmail = this.updateEmail.bind(this);
        this.editEmail = this.editEmail.bind(this);
        this.state = {
            email:""
        }
    }
    
    componentDidMount() {
        document.getElementById("email").readOnly = true;
        document.getElementById("email").style.borderWidth = "0px";
        document.getElementById("submitButton").style.display = "none";
        axios.get(ApiConstant.IDENTITY_BASE_URI+sessionStorage.getItem(Constant.USER_PROFILE_ID)+"/email", {            
        })
        .then((response) => {                                 
            this.setState({
                email:response.data.email
            })
        }).catch((err) => {
            console.log(err)
        });        
    }

    editEmail() {
        document.getElementById("submitButton").style.display = "block";
        document.getElementById("editLink").style.display = "none";        
        document.getElementById("email").readOnly = false;
        document.getElementById("email").style.borderWidth = "1px";
    }

    updateEmail() {
        event.preventDefault();

        let errorMessage = null;

        const email = String.prototype.trim.call(document.getElementById("email").value);

        if(email === "") {
            errorMessage = "Please enter Email.";
        } else {
            const result = validateEmail(email);
            if(result === false) {
                errorMessage = "Please enter valid Email.";
            }
        }        
        
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
                        <div><label>Update Email</label></div>                    
                    </div>
                    <div className="identityFieldParent" style={{paddingTop:'50px'}}>
                        <div className="identityLabel">
                            Email
                        </div>                        
                        <div className="identityField">
                            <input type="text" id="email" defaultValue={this.state.email} style={{width:'200px'}}/>
                            <a href="#" onClick={this.editEmail} id="editLink" style={{paddingLeft:'10px'}}> Edit </a>
                        </div>
                    </div>                                      
                    <div className="identityFieldParent" style={{paddingBottom:'50px'}} id="submitButton">
                        <button onClick={this.updateEmail}>Submit</button>
                    </div>
                </div>
        </div>
        );
    }
}

export default UpdateEmail;