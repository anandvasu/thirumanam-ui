import React, {Component} from 'react';
import Location from '../../components/register/Location';
import PersonalDetail from '../../components/register/PersonalDetail';
import ProfDetail from '../../components/register/ProfDetail';
import './RegisterDetail.css';
import axios from 'axios';
import {toast} from 'react-toastify';
import {Redirect} from "react-router-dom";
import Aux from '../../hoc/Aux';
import TopBar from '../../components/menu/TopBar';
import ApiConstant from '../../components/utils/ApiConstant';
import Footer from '../../components/footer/Footer';
import ReligionDetail from '../../components/register/ReligionDetail';
import {populateArray} from '../../components/utils/Util';
import LocationDropdownConsts from '../../components/utils/LocationDropdownConsts';
import AboutGroomBride from '../../components/register/AboutGroomBride';

class RegisterDetail extends Component {

    constructor(props) {
        super(props);       

        this.maritalStatusChange = this.maritalStatusChange.bind(this);
        this.heightCmChange = this.heightCmChange.bind(this);
        this.heightInchChange = this.heightInchChange.bind(this);
        this.weightChange = this.weightChange.bind(this);
        this.familyTypeChange = this.familyTypeChange.bind(this);
        this.familyValueChange = this.familyValueChange.bind(this);
        this.foodHabitChange = this.foodHabitChange.bind(this);
        this.bodyTypeChange = this.bodyTypeChange.bind(this);         
        this.disablityChange = this.disablityChange.bind(this);       
        this.disablityReasonChange = this.disablityReasonChange.bind(this);   

        this.otherCasteChange = this.otherCasteChange.bind(this);
        this.casteChange = this.casteChange.bind(this);
        this.subCasteChange = this.subCasteChange.bind(this);        
        this.otherGothramChange = this.otherGothramChange.bind(this);
        this.gothramChange = this.gothramChange.bind(this);
        this.otherDhoshamChange = this.otherDhoshamChange.bind(this);
        this.hinduDhoshamChange = this.hinduDhoshamChange.bind(this);

        this.countryChange = this.countryChange.bind(this);
        this.profileStateChange = this.profileStateChange.bind(this);
        this.districtChange = this.districtChange.bind(this);
        this.cityChange = this.cityChange.bind(this);
        this.otherStateChange = this.otherStateChange.bind(this);       

        this.educationChange = this.educationChange.bind(this);
        this.employmentChange = this.employmentChange.bind(this);
        this.incomeChange = this.incomeChange.bind(this);
        this.occupationChange = this.occupationChange.bind(this);

        this.aboutGroomBrideChange = this.aboutGroomBrideChange.bind(this); 

        this.updateProfile = this.updateProfile.bind(this);

        this.state = {          
            profileId:"",
            email:"",
            mStatus:"",
            heightInch:0,
            heightCm:0,
            weight:0,
            familyType:"",
            familyValue:"",
            bodyType:"",
            foodHabit:"",
            disability:"",
            disablityInfo:null,      
            religion:0,
            casteObj:[],
            caste:0,
            otherCaste:"",
            subcaste:"",
            gothramObj:[],
            gothram:"",
            dhoshamObj:[],
            dhosham:"",
            country: "IN",
            countryObj:LocationDropdownConsts.country_DF,
            pstateObj:LocationDropdownConsts.state_DF,
            pstate:58,
            otherState:"",
            otherDistrict:"",
            districtObj:[],
            district:"",
            city:"",
            educationObj:[],
            education:"",
            employment:"",
            occupation:"",
            income:0,         
            about:"",
            updateSuccess:false            
        }
    }

    componentDidMount() {
        this.setState({
            regProfileId:this.props.location.state.profileId,
            email:this.props.location.state.email,
            religion:this.props.location.state.religion   
        });
        const religionValue = this.props.location.state.religion;
        this.handleReligionFields(religionValue);
        this.handleLocationFields(this.state.country, this.state.pstate);
        document.getElementById("disablityReason").style.display = "none";
    }

    //Personal Detail Changes
    maritalStatusChange(event) {
        this.setState({mStatus:event.target.value});
    }

    heightCmChange(event) {
        this.setState({heightCm:event.target.value});
    }

    heightInchChange(event) {
        this.setState({heightInch:event.target.value});
    }

    weightChange(event) {
        this.setState({weight:event.target.value});
    }

    familyTypeChange(event) {
        this.setState({familyType:event.target.value});
    }

    familyValueChange(event) {
        this.setState({familyValue:event.target.value});
    }

    foodHabitChange(event) {
        this.setState({foodHabit:event.target.value});
    }

    bodyTypeChange(event) {
        this.setState({bodyType:event.target.value});
    }

    disablityChange(event) {
        this.setState({disability:event.target.value});       
        if(event.target.value === 'Y') {
            document.getElementById("disablityReason").style.display = "block";
        } else {
            document.getElementById("disablityReason").style.display = "none";
        }
    }    

    disablityReasonChange(event) {
        console.log(event.target.value);
        this.setState({disablityInfo:event.target.value});
    }

    //Religion Changes
    handleReligionFields(religionValue) {
        if(parseInt(religionValue) === 1) {
            document.getElementById("otherCaste").style.display = "none";
            document.getElementById("otherGothram").style.display = "none";
            document.getElementById("otherDhosham").style.display = "none";
        } else if ((religionValue === 4) || (religionValue === 5) || (religionValue === 6)) { 
            document.getElementById("otherCaste").style.display = "none";  
            document.getElementById("gothram").style.display = "none";
            document.getElementById("hinduDhosham").style.display = "none";
        } else {
            document.getElementById("caste").style.display = "none";
        }
    }

    casteChange(valueObj) {
        this.setState(
            {
                casteObj:populateArray(valueObj),
                caste:valueObj.value
            }
        );
    }

    otherCasteChange(event) {
        this.setState({otherCaste:event.target.value});
    }

    subCasteChange(event) {
        this.setState({subcaste:event.target.value});
    }

    gothramChange(valueObj) {
        this.setState(
            {
                gothramObj:populateArray(valueObj),
                gothram:valueObj.value
            }
        );
    }

    otherGothramChange(event) {
        this.setState({gothram:event.target.value});
    }

    hinduDhoshamChange(valueObj) {
        this.setState(
            {
                dhoshamObj:populateArray(valueObj),
                dhosham:valueObj.value
            }
        );
    }
    otherDhoshamChange(event) {
        this.setState({dhosham:event.target.value});
    }

    //Country Changes
    handleLocationFields(country, pstate) {
        if(country === "IN" || country === "US") {            
            document.getElementById("stateText").style.display = "none";
            document.getElementById("stateDropDown").style.display = "block";
        } else {
            document.getElementById("stateDropDown").style.display = "none";
            document.getElementById("stateText").style.display = "block";
        }

        if(pstate == 58) {
            document.getElementById("districtText").style.display = "none";
            document.getElementById("districtDropDown").style.display = "block";
        } else {
            document.getElementById("districtText").style.display = "block";
            document.getElementById("districtDropDown").style.display = "none";
        }
    }

    countryChange(valueObj) {
        const country = valueObj.value;        
        let state = 0;
        if(country === "IN") {
            this.setState({
                countryObj:populateArray(valueObj),
                country:country,
                pstate:58
            });
            state = 58;
        } else {
            this.setState({
                countryObj:populateArray(valueObj),
                country:country,
                pstate:0
            });
        }
        
        this.handleLocationFields(country, state);
    }

    profileStateChange(valueObj) {
        this.setState({
            pstateObj:populateArray(valueObj),
            pstate:valueObj.value,
        });
    }

    otherStateChange(event) {
        this.setState({otherState:event.target.value});
    }

    districtChange(valueObj) {
        this.setState({
            districtObj:populateArray(valueObj),
            district:valueObj.value,
        });
    }

    cityChange(event) {
        this.setState({city:event.target.value});
    }
    //Location Changes - Starts

    //Professional Changes - Starts
    occupationChange(event) {
        this.setState({occupation:event.target.value});
    }

    educationChange(valueObj) {
        this.setState({
            educationObj:populateArray(valueObj),
            education:valueObj.value
        });
    }

    employmentChange(event) {
        this.setState({employment:event.target.value});
    }

    incomeChange(event) {
        this.setState({income:event.target.value});
    }   
    //Location Changes - Ends

    aboutGroomBrideChange(event) {
        this.setState({about:event.target.value});
    }

    updateProfile(event) {
        var errorMessage = null;

        if (this.state.mStatus === "") {
            errorMessage = "Please select Marital Status."; 
        } else if (this.state.heightCm === 0 && this.state.heightInch === 0) {
            errorMessage = "Please enter Height."; 
        } else if (this.state.familyType === "") {
            errorMessage = "Please select Family Type."; 
        } else if (this.state.foodHabit === "") {
            errorMessage = "Please select Food Habit."; 
        } else if (this.state.country === "") {
            errorMessage = "Please select Country."; 
        } else if ((this.state.pstate ==="") && (this.state.otherState ==="")) {
            errorMessage = "Please enter State."; 
        } else if ((this.state.district === "")  && (this.state.otherDistrict ==="")) {
            errorMessage = "Please enter District."; 
        } else if (this.state.city === "") {
            errorMessage = "Please enter City."; 
        } else if ((this.state.caste === 0) && (this.state.otherCaste ==="")) {
            errorMessage = "Please enter Caste."; 
        } else if (this.state.education === "") {
            errorMessage = "Please select Education."; 
        } else if (this.state.employment === "") {
            errorMessage = "Please select Employment."; 
        } else if (this.state.occupation === "") {
            errorMessage = "Please enter Occupation."; 
        } else if (this.state.income === 0) {
            errorMessage = "Please enter income."; 
        } else if (this.state.about === "") {
            errorMessage = "Please write something about yourself."; 
        } 

        if (errorMessage === null) {
            axios.put(ApiConstant.USER_PROFILE_API, 
                { 
                    id:this.state.profileId,
                    mStatus: this.state.mStatus,
                    heightCm: this.state.heightCm,
                    heightInch: this.state.heightInch,
                    weight: this.state.weight,
                    familyType: this.state.familyType,
                    familyValue: this.state.familyValue,
                    foodHabit:this.state.foodHabit,
                    bodyType:this.state.bodyType,
                    disabled: this.state.disability,
                    disablityInfo:this.state.disablityInfo,
                    caste: this.state.caste,
                    otherCaste: this.state.otherCaste,
                    subcaste:this.state.subcaste,
                    gothram:this.state.gothram,
                    dhosham:this.state.dhosham,
                    country:this.state.country,
                    pstate:this.state.pstate,
                    district:this.state.district,
                    otherDistrict:this.state.otherDistrict,
                    city:this.state.city,
                    otherState:this.state.otherState,
                    occupation:this.state.occupation,
                    education: this.state.education,
                    employment: this.state.employment,
                    income: this.state.income,
                    about: this.state.about                   
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
                    pathname:'/uploadProfilePhoto' ,
                        state:{
                            profileId : this.state.profileId,
                            email : this.state.email,
                            religion:this.state.religion,
                            fromPage : 'R'
                        }                                   
                    }}/>
        }
        return(
            <div>
                <TopBar />
                <div className="hs30" />
                <div>
                     You have successfully registered. Please complete the below detail to complete full registration.
                </div>
                <div className="hs20" />
                <div className="rdcontaniner">
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
                       disablityChange = {this.disablityChange}
                       disablityReasonChange = {this.disablityReasonChange}
                    />
                     <div className="hs10" />
                    <ReligionDetail 
                        casteObj = {this.state.casteObj}
                        caste = {this.state.caste}
                        religion = {this.state.religion}
                        casteChange = {this.casteChange}
                        otherCasteChange = {this.otherCasteChange}  
                        
                        subcaste = {this.state.subcaste}
                        subCasteChange = {this.subCasteChange}
                       
                        gothramObj = {this.state.gothramObj}
                        gothram = {this.state.gothram}
                        gothramChange = {this.gothramChange}
                        otherGothramChange = {this.otherGothramChange}
                        
                        dhoshamObj = {this.state.dhoshamObj}
                        dhosham = {this.state.dhosham}
                        hinduDhoshamChange = {this.hinduDhoshamChange}
                        otherDhoshamChange = {this.otherDhoshamChange}
                    />
                    <div className="hs10" />
                    <Location 
                        countryChange = {this.countryChange}
                        profileStateChange = {this.profileStateChange}
                        otherStateChange = {this.otherStateChange}
                        districtChange = {this.districtChange}
                        cityChange = {this.cityChange}
                        pstate = {this.state.pstate}
                        pstateObj = {this.state.pstateObj}
                        country = {this.state.country}
                        countryObj = {this.state.countryObj}
                    />
                     <div className="hs10" />
                    <ProfDetail 
                        educationObj = {this.educationObj}
                        educationChange = {this.educationChange}
                        employmentChange = {this.employmentChange}
                        incomeChange = {this.incomeChange}
                        occupationChange = {this.occupationChange}
                        occupation = {this.state.occupation}
                        education = {this.state.education}
                        income = {this.state.income}
                        employment = {this.state.employment}
                    />
                    <div className="hs10" />
                    <AboutGroomBride 
                        aboutGroomBrideChange = {this.aboutGroomBrideChange}                       
                    />
                    <div className="hs10" />
                    <div className='rfield'>
                        <button onClick={this.updateProfile}>Submit</button>
                    </div>
                    <div className="hs20" />                    
                </div>
                <Footer />
            </div>
        );
    }
}

export default RegisterDetail;