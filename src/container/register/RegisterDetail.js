import React, {Component} from 'react';
import Location from '../../components/register/Location';
import PersonalDetail from '../../components/register/PersonalDetail';
import ProfDetail from '../../components/register/ProfDetail';
import UploadImage from '../../components/register/UploadImage';
import './RegisterDetail.css';
import TopMenu from '../../components/menu/TopMenu';
import axios from 'axios';
import {toast} from 'react-toastify';
import {Redirect} from "react-router-dom";
import Aux from '../../hoc/Aux';
import TopBar from '../../components/menu/TopBar';
import ApiConstant from '../../components/utils/ApiConstant';

class RegisterDetail extends Component {

    constructor(props) {
        super(props);       

        this.imageHandler = this.imageHandler.bind(this);
        this.updateProfile = this.updateProfile.bind(this);
        this.countryChange = this.countryChange.bind(this);
        this.profileStateChange = this.profileStateChange.bind(this);
        this.districtChange = this.districtChange.bind(this);
        this.cityChange = this.cityChange.bind(this);

        this.maritalStatusChange = this.maritalStatusChange.bind(this);
        this.heightChange = this.heightChange.bind(this);
        this.weightChange = this.weightChange.bind(this);
        this.familyTypeChange = this.familyTypeChange.bind(this);
        this.familyValueChange = this.familyValueChange.bind(this);
        this.disablityChange = this.disablityChange.bind(this);

        this.educationChange = this.educationChange.bind(this);
        this.employmentChange = this.employmentChange.bind(this);
        this.incomeChange = this.incomeChange.bind(this);

        this.state = {
            image : null,
            email : null,
            phonenumber : null,
            country: "IND",
            pstate:"TN",
            district:"",
            city:"",
            mStatus:"",
            height:0,
            weight:0,
            familyType:"",
            familyValue:"",
            disability:"",
            education:"",
            employment:"",
            income:0,
            regProfileId:"",
            updateSuccess:false            
        }
    }

    countryChange(value) {
        this.setState({country:value});
    }

    profileStateChange(value) {
        this.setState({pstate:value});
    }

    districtChange(value) {
        this.setState({district:value});
    }

    cityChange(value) {
        this.setState({city:value});
    }

    imageHandler(image) {
        this.setState({image:image});
    }

    maritalStatusChange(value) {
        this.setState({mStatus:value});
    }

    heightChange(value) {
        this.setState({height:value});
    }

    weightChange(value) {
        this.setState({weight:value});
    }

    familyTypeChange(value) {
        this.setState({familyType:value});
    }

    familyValueChange(value) {
        this.setState({familyValue:value});
    }

    disablityChange(value) {
        this.setState({disability:value});
    }

    educationChange(value) {
        this.setState({education:value});
    }

    employmentChange(value) {
        this.setState({employment:value});
    }

    incomeChange(value) {
        this.setState({income:value});
    }


    componentDidMount() {
       // console.log("this.props.location.state" + this.props.location.state.profileId);
        this.setState({
            regProfileId:this.props.location.state.profileId,
            email:this.props.location.state.email            
        });
    }

    updateProfileInformation() {
        axios.put(ApiConstant.USER_PROFILE_API, 
                { 
                    country:this.state.country,
                    pstate:this.state.pstate,
                    district:this.state.district,
                    city:this.state.city,
                    mStatus: this.state.mStatus,
                    height: this.state.height,
                    weight: this.state.weight,
                    familyType: this.state.familyType,
                    familyValue: this.state.familyValue,
                    disabled: this.state.disability,
                    education: this.state.education,
                    employment: this.state.employment,
                    income: this.state.income,
                    id:this.state.regProfileId
                })
                .then((res) => {
                    console.log(res);
                    this.setState({
                        updateSuccess:true,
                    });
                    toast.success("Profile Saved Successfully", 
                        {
                            position:toast.POSITION.TOP_CENTER,
                            hideProgressBar:true,
                            autoClose:3000,
                            testId:20
                        });
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


    updateProfile(event) {
        var errorMessage = "";

        if (this.state.district === "") {
            errorMessage = "Please select District."; 
        } else if (this.state.city === "") {
            errorMessage = "Please enter City.";      
        } else if (this.state.mStatus === "") {
            errorMessage = "Please select Marital Status."; 
        } else if (this.state.height === "") {
            errorMessage = "Please enter Height."; 
        } else if (this.state.education === "") {
            errorMessage = "Please select Education."; 
        } else if (this.state.employment === "") {
            errorMessage = "Please select Employment."; 
        } else if (this.state.income === 0) {
            errorMessage = "Please enter Income."; 
        } 

        if (errorMessage === "") {
            if(this.state.image !== null) {
                const formData = new FormData();
                formData.append("imageFile", this.state.image, this.state.profileId);
                axios.post(ApiConstant.USER_PROFILE_IMAGE_API+'?profileId='+this.state.regProfileId, formData,
                        { 
                            country:this.state.country,                        
                        })
                .then((res) => {
                    this.updateProfileInformation();
                })
                .catch((error) => {
                    console.log(error);
                    toast.error(error.response.data.message, 
                        {
                            position:toast.POSITION.TOP_CENTER,
                            hideProgressBar:true,
                            autoClose:3000,
                            testId:20
                        });
                
                });
            } else {
                this.updateProfileInformation();
            }
        } else {
            toast.error(errorMessage, 
                {
                    position:toast.POSITION.TOP_CENTER,
                    hideProgressBar:true,
                    autoClose:3000,
                    testId:20
                });
        }        
    }

    render () {

        if (this.state.updateSuccess === true) {
            return <Redirect to= {{
                    pathname:'/confirmSignUp' ,
                        state:{
                            username:this.state.email
                        }                                   
                    }}/>
        }
        return(
            <Aux>
                <TopBar />
                <div className="hs10" />
                <div>
                     You have successfully registered. Please complete the below detail to complete full registration.
                </div>

                <div className="rdcontaniner">
                    <div className="hs10" />
                    <UploadImage imageHandler={this.imageHandler}/>                
                    <Location 
                        countryChange = {this.countryChange}
                        profileStateChange = {this.profileStateChange}
                        districtChange = {this.districtChange}
                        cityChange = {this.cityChange}
                    />
                    <PersonalDetail 
                        maritalStatusChange = {this.maritalStatusChange}
                        heightChange = {this.heightChange}
                        weightChange = {this.weightChange}
                        familyTypeChange = {this.familyTypeChange}
                        familyValueChange = {this.familyValueChange}
                        disabilityChange = {this.disabilityChange}
                    />
                    <ProfDetail 
                        educationChange = {this.educationChange}
                        employmentChange = {this.employmentChange}
                        incomeChange = {this.incomeChange}
                    />
                    <div className="hs10" />
                    <div className='rfield'>
                                <button onClick={this.updateProfile}>Submit</button>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default RegisterDetail;