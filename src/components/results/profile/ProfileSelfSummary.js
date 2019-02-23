import React, {Component} from 'react';
import defaultFImage from '../../../assets/images/defalt_female.png';
import defaultMImage from '../../../assets/images/default_male.jpg';
import './ProfileSelfSummary.css';
import ApiConstant from '../../../components/utils/ApiConstant';
import Constant from '../../utils/Constant'
import axios from 'axios';
import {toast} from 'react-toastify';
import {
    withRouter
  } from 'react-router-dom';


class ProfileSelfSummary extends Component {

    constructor(props) {
        super(props);
        this.goToPreference = this.goToPreference.bind(this);
        this.editProfile = this.editProfile.bind(this);
        this.uploadPhoto = this.uploadPhoto.bind(this);
        this.uploadHoroscope = this.uploadHoroscope.bind(this);        

        this.state = {
            image:null
        }
    }

    uploadPhoto() {
        this.props.history.push({
            pathname: '/uploadProfilePhoto',
            state:{
                fromPage : 'E',
            }
        });
    }

    uploadHoroscope() {
        this.props.history.push({
            pathname: '/uploadHoroscope',
            state:{
                fromPage : 'E',
            }
        });
    }

    componentDidMount() {
        axios.get(ApiConstant.USER_API_SELF+sessionStorage.getItem("profileId"),
            {                    
            }) .then((res) => {
               console.log(res);
               console.log(res.data.id);              
               this.setState({
                    image:res.data.image
               });
            }).catch((err) => {
                console.log(err);
                toast.error("Server Error Occurred. Please try again later!!!", 
                    {
                        position:toast.POSITION.TOP_CENTER,
                        hideProgressBar:true,
                        autoClose:3000,
                        toastId:Constant.toastIdErr
                    });
            });    
    }

    editProfile() {
        axios.get(ApiConstant.USER_API_SELF+sessionStorage.getItem("profileId"),
            {                    
            }) .then((res) => {
               console.log(res);
               console.log(res.data.id);              
               this.props.history.push({
                    pathname: '/profileSelf',
                    state: {
                        id : res.data.id,
                        firstName : res.data.firstName,
                        lastName : res.data.lastName,
                        bDay : res.data.bDay,
                        bMonth : res.data.bMonth,
                        bYear : res.data.bYear,
                        email : res.data.email,
                        mCountryCode : res.data.mCountryCode,  
                        mobile : res.data.mobile,  
                        heightInch : res.data.heightInch,
                        heightCm : res.data.heightCm,
                        weight : res.data.weight,
                        mStatus : res.data.mStatus,
                        familyType : res.data.familyType,
                        familyValue : res.data.familyValue,
                        foodHabit : res.data.foodHabit,
                        disabled : res.data.disabled,
                        disInfo : res.data.disInfo,
                        bodyType : res.data.bodyType,
                        country : res.data.country,
                        pstate : res.data.pstate,                                  
                        district : res.data.district,
                        city : res.data.city,
                        religion : res.data.religion,
                        caste : res.data.caste,    
                        education : res.data.education,
                        employment : res.data.employment,
                        income : res.data.income,                        
                    }
                }) 
            }).catch((err) => {
                toast.error("Server Error Occurred. Please try again later.", 
                    {
                        position:toast.POSITION.TOP_CENTER,
                        hideProgressBar:true,
                        autoClose:3000,
                        toastId:Constant.toastIdErr
                    });
            });    
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
            toast.error("Server Error Occurred. Please try again!!", 
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

        if (this.state.image !== null) {
            image = <img src={"data:image/jpeg;base64,"+this.state.image} alt="Not Available" width="100px" height="100px"></img>;            
        } else {
            if(this.props.gender === "F") {
                image = <img src={defaultFImage} alt="Not Available" style={{width:'80px'}} onClick={this.goToHome} /> 
            } else {
                image = <img src={defaultMImage} alt="Not Available" style={{width:'80px'}} onClick={this.goToHome} />
            }
        }        

        return(
            <div className="profileSummaryContainer">
                <div className="hs10" />
                <div style={{paddingBottom:'5px'}}>
                    {image}
                </div>
                <div style={{paddingBottom:'5px'}}>
                   
                </div>
                <div style={{paddingBottom:'5px'}}>
                   
                </div>
                <div style={{paddingBottom:'5px'}}>
                   <a href="#" onClick={this.uploadHoroscope} style={{color:'blue'}}>Upload Horoscope</a>
                </div>               
                <div>
                   <a href="#" onClick={this.goToPreference} style={{color:'blue'}}>Edit Preferences</a>
                </div>   
                <div style={{width:'100%'}}>
                    <div className="profileSelfBtmLink">
                        <a href="#" onClick={this.editProfile} style={{color:'blue'}}>Edit Profile </a>
                    </div>
                    <div className="profileSelfBtmLink">
                        <a href="#" onClick={this.uploadPhoto} style={{color:'blue'}}>Upload Photo</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ProfileSelfSummary);