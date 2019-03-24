import React, {Component} from 'react';
import {toast} from 'react-toastify';
import Constant from '../utils/Constant';
import ApiConstant from '../utils/ApiConstant';
import SearchImage from '../../assets/images/view.png';
import axios from 'axios';
import {
    withRouter
  } from 'react-router-dom';

class ProfileIdSearch extends Component {

    constructor (props) {
        super(props);       
        this.viewProfile = this.viewProfile.bind(this);
    }   

    viewProfile(event) {

        event.preventDefault();

        const profileId = document.getElementById("profileId").value;

        if (String.prototype.trim.call(profileId) !== "") {

            axios.get(ApiConstant.USER_API+profileId+"?userId="+sessionStorage.getItem(Constant.USER_PROFILE_ID))
                .then((response) => {
                    console.log(response);
                        this.props.history.push({
                            pathname: '/viewProfile',
                            state: {
                                profile:response.data
                            }
                }).catch((err) => {
                        
                });
            });
        } else {
            toast.error("Please enter Profile ID", 
                {
                    position:toast.POSITION.TOP_CENTER,
                    hideProgressBar:true,
                    autoClose:3000,
                    toastId:Constant.toastIdErr
                });
        } 
    }

    render () {       
        return (
            <form>
                <div className="dashboardContainer">   
                    <div className="header2" style={{paddingTop:'5px'}}>
                        <div className="vs5px"/>
                        <b>Search By ID:</b>
                    </div>       

                    <div style={{width:'100%',paddingTop:'3px'}}> 
                            <div className="inlineBlock">
                                <input type="text" id="profileId" style={{width:'140px'}}/>
                           </div>
                           <div className="inlineBlock" style={{verticalAlign:'middle',paddingLeft:'5px'}}>
                                <img className="searchImage" src={SearchImage} onClick={this.viewProfile} />
                           </div>
                    </div>  
                </div>
            </form>
        );
    }
}

export default withRouter(ProfileIdSearch);