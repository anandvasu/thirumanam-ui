import React, {Component} from 'react';
import './Identity.css';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ApiConstant from '../utils/ApiConstant';
import Constant from '../utils/Constant';

class Notification extends Component {

    constructor() {
        super();
        this.updateNotification = this.updateNotification.bind(this);        
    }

    componentDidMount() {
        axios.get(ApiConstant.NOTIFICATION_BASE_URI+sessionStorage.getItem(Constant.USER_PROFILE_ID), {           
        })
        .then((response) => {
            console.log(response);                     
           if(response.data.productPromotion === 1) {
                document.getElementById("product").checked = true;
           }
           if(response.data.weeklyMatch === 1) {
                document.getElementById("weeklyMatch").checked = true;
           }
           if(response.data.dailyMatch === 1) {
                document.getElementById("dailyMail").checked = true;
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
     
    updateNotification() {
        event.preventDefault();

        let dailyMatch = 0;
        let product = 0;
        let weeklyMatch = 0;

        if(document.getElementById("product").checked) {
            product = 1;
        }

        if(document.getElementById("dailyMail").checked) {
            dailyMatch = 1;
        }

        if(document.getElementById("weeklyMatch").checked) {
            weeklyMatch = 1;
        }

        axios.put(ApiConstant.NOTIFICATION_BASE_URI+sessionStorage.getItem(Constant.USER_PROFILE_ID), {
            productPromotion:product,
            weeklyMatch:weeklyMatch,
            dailyMatch:dailyMatch
        })
        .then((response) => {
            console.log(response);                     
            toast.success("Notification settings updated successfully", 
                {
                    position:toast.POSITION.TOP_CENTER,
                    hideProgressBar:true,
                    autoClose:3000,
                    toastId:Constant.toastIdErr
                });                                    
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
                <div className="hs30" />
                <div className="identityContainer">
                    <div className="header2">
                        <div><label>Notification Settings</label></div>                    
                    </div>
                    <div className="identityFieldParent" style={{paddingTop:'50px'}}>
                        <div className="identityField">
                            Products and Promotions
                        </div>                        
                        <div className="identityLabel">
                            <input id="product" type="checkbox" value="P" onChange={this.handleInputChange}/>
                        </div>    
                    </div>  
                    <div className="identityFieldParent">
                        <div className="identityField">
                            Daily Match Mailer
                        </div>                        
                        <div className="identityLabel">
                            <input id="dailyMail" type="checkbox" value="D" onChange={this.handleInputChange}/>
                        </div>            
                    </div>   
                    <div className="identityFieldParent">
                        <div className="identityField">
                            Weekly Match Mailer
                        </div>                        
                        <div className="identityLabel">
                            <input id="weeklyMatch" type="checkbox" value="D" onChange={this.handleInputChange}/>
                        </div>            
                    </div>                                    
                    <div className="identityFieldParent" style={{paddingBottom:'50px'}} id="submitButton">
                        <button onClick={this.updateNotification}>Submit</button>
                    </div>
                </div>
        </div>
        );
    }
}

export default Notification;