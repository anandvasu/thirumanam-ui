import React, {Component} from 'react';
import Location from '../../components/register/Location';
import PersonalDetail from '../../components/register/PersonalDetail';
import ProfDetail from '../../components/register/ProfDetail';
import UploadImage from '../../components/register/UploadImage';
import './RegisterDetail.css';
import axios from 'axios';
import {toast} from 'react-toastify';
import {Redirect} from "react-router-dom";
import Aux from '../../hoc/Aux';
import TopBar from '../../components/menu/TopBar';
import ApiConstant from '../../components/utils/ApiConstant';
import Footer from '../../components/footer/Footer';
import ReligionDetail from '../../components/register/ReligionDetail';

class RegisterDetail extends Component {

    constructor(props) {
        super(props);       

        this.imageHandler = this.imageHandler.bind(this);
        this.updateProfile = this.updateProfile.bind(this);
        this.countryChange = this.countryChange.bind(this);
        this.profileStateChange = this.profileStateChange.bind(this);
        this.districtChange = this.districtChange.bind(this);
        this.cityChange = this.cityChange.bind(this);

        

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
           
            education:"",
            employment:"",
            income:0,
            regProfileId:"",
            updateSuccess:false            
        }
    }

    countryChange(event) {
        this.setState({country:event.target.value});
    }

    profileStateChange(event) {
        this.setState({pstate:event.target.value});
    }

    districtChange(event) {
        this.setState({district:event.target.value});
    }

    cityChange(event) {
        this.setState({city:event.target.value});
    }

    imageHandler(image) {
        this.setState({image:image});
    }

   
    educationChange(event) {
        this.setState({education:event.target.value});
    }

    employmentChange(event) {
        this.setState({employment:event.target.value});
    }

    incomeChange(event) {
        this.setState({income:event.target.value});
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
                    <div className="hs10" />
                    <PersonalDetail 
                        maritalStatusChange = {this.maritalStatusChange}
                        heightInchChange = {this.heightInchChange}
                        heightCmChange = {this.heightCmChange}
                        weightChange = {this.weightChange}
                        familyTypeChange = {this.familyTypeChange}
                        familyValueChange = {this.familyValueChange}
                        foodHabitChange = {this.foodHabitChange}
                        bodyTypeChange = {this.bodyTypeChange}
                        disabilityChange = {this.disabilityChange}
                    />
                     <div className="hs10" />
                    <ReligionDetail />
                    <div className="hs10" />
                    <Location 
                        countryChange = {this.countryChange}
                        profileStateChange = {this.profileStateChange}
                        districtChange = {this.districtChange}
                        cityChange = {this.cityChange}
                    />
                     <div className="hs10" />
                    <ProfDetail 
                        educationChange = {this.educationChange}
                        employmentChange = {this.employmentChange}
                        incomeChange = {this.incomeChange}
                    />
                    <div className="hs10" />
                    <div className='rfield'>
                                <button onClick={this.updateProfile}>Submit</button>
                    </div>
                    <div className="hs20" />
                    <Footer />

                    
                </div>
            </Aux>
        );
    }
}

export default RegisterDetail;