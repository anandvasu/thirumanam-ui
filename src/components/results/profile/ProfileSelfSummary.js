import React, {Component} from 'react';
import defaultFImage from '../../../assets/images/defalt_female.png';
import defaultMImage from '../../../assets/images/default_male.jpg';
import './ProfileSelfSummary.css';
import ApiConstant from '../../../components/utils/ApiConstant';
import axios from 'axios';
import {toast} from 'react-toastify';
import {
    withRouter
  } from 'react-router-dom';


class ProfileSelfSummary extends Component {

    constructor(props) {
        super(props);
        this.goToPreference = this.goToPreference.bind(this);
    }

    goToPreference() {
        const profileId = sessionStorage.getItem("profileId");
        console.log("profileId:"+profileId)
        axios.get(ApiConstant.PREFERENCE_API+profileId, {                
        })
        .then((res) => {
            console.log(res);
            console.log(res.data);            
            this.props.history.push({
                pathname: '/preference',
                state: {
                    preference : res.data                                    
                }
              })
            
        }) .catch((error) => {
            console.log(error);
            toast.error("Server Error Occurred. Please try again", 
                {
                    position:toast.POSITION.TOP_CENTER,
                    hideProgressBar:true,
                    autoClose:3000,
                    testId:20
                });
        
        });
    }

    render() {

        let image; 

        if(this.props.gender === "F") {
            image = <img src={defaultFImage} alt="Not Available" style={{width:'80px'}} onClick={this.goToHome} /> 
        } else {
            image = <img src={defaultMImage} alt="Not Available" style={{width:'80px'}} onClick={this.goToHome} />
        }

        return(
            <div className="profileSummaryContainer">
                <div>
                    {image}
                </div>
                <div>
                   Add Photo testing
                </div>
                <div>
                   Edit Profile
                </div>
                <div>
                   <button className="linkButton" onClick={this.goToPreference}>Edit Preferences</button>
                </div>
                <div>
                   Privacy
                </div>
            </div>
        );
    }
}

export default withRouter(ProfileSelfSummary);