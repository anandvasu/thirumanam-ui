import React, {Component} from 'react';
import TopBar from '../../components/menu/TopBar';
import Footer from '../../components/footer/Footer';
import Location from '../../components/register/Location';
import ProfDetail from '../../components/register/ProfDetail';
import CompletePersonalDetail from '../../components/register/CompletePersonalDetail';
import ApiConstant from '../../components/utils/ApiConstant';
import {populateArray} from '../../components/utils/Util';
import DropDownConstant from '../../components/utils/DropDownConstant'
import {convertReactSelectValue} from '../../components/utils/Util';
import {toast} from 'react-toastify';
import axios from 'axios';
import ReligionDetail from '../../components/register/ReligionDetail';
import LocationDropdownConsts from '../../components/utils/LocationDropdownConsts';
import ReligionDropdownConsts from '../../components/utils/ReligionDropdownConsts';

class ProfileSelf extends Component {

    constructor(props) {
        super(props);
      
        this.firstNameChange = this.firstNameChange.bind(this);
        this.lastNameChange = this.lastNameChange.bind(this);
        this.bDayChange = this.bDayChange.bind(this);
        this.bMonthChange = this.bMonthChange.bind(this);
        this.bYearChange = this.bYearChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.mCountryCodeChange = this.mCountryCodeChange.bind(this);
        this.mobileChange = this.mobileChange.bind(this);
        this.heightInchChange = this.heightInchChange.bind(this);
        this.heightCmChange = this.heightCmChange.bind(this);
        this.weightChange = this.weightChange.bind(this);
        this.mStatusChange = this.mStatusChange.bind(this);
        this.familyTypeChange = this.familyTypeChange.bind(this);
        this.familyValueChange = this.familyValueChange.bind(this);
        this.foodHabitChange = this.foodHabitChange.bind(this);
        this.disabledChange = this.disabledChange.bind(this);
        this.disablityReasonChange = this.disablityReasonChange.bind(this);
        this.bodyTypeChange = this.bodyTypeChange.bind(this);

        this.countryChange = this.countryChange.bind(this);
        this.profileStateChange = this.profileStateChange.bind(this);
        this.districtChange = this.districtChange.bind(this);
        this.cityChange = this.cityChange.bind(this);
        this.otherStateChange = this.otherStateChange.bind(this);

        this.educationChange = this.educationChange.bind(this); 
        this.occupationChange = this.occupationChange.bind(this);     
        this.employmentChange = this.employmentChange.bind(this);        
        this.incomeChange = this.incomeChange.bind(this); 

        this.updateProfileSelf = this.updateProfileSelf.bind(this);     
        
        this.otherCasteChange = this.otherCasteChange.bind(this);
        this.casteChange = this.casteChange.bind(this);
        this.subCasteChange = this.subCasteChange.bind(this);        
        this.otherGothramChange = this.otherGothramChange.bind(this);
        this.gothramChange = this.gothramChange.bind(this);
        this.otherDhoshamChange = this.otherDhoshamChange.bind(this);
        this.hinduDhoshamChange = this.hinduDhoshamChange.bind(this);

        this.state = {
            id:'',
            firstName : '',
            lastName : '',
            bDay : 0,
            bMonth : 0,
            bYear : 0,
            email : '',
            mCountryCode : '',  
            mobile : '',  
            heightCm : '',
            heightInch : '',
            weight : '',
            mStatus : [],
            familyType : '',
            familyValue : '',
            foodHabit : '',
            disabled : '',
            disablityInfo : '',
            bodyType : '',
            country : '',
            countryObj : [],
            pstate : '',      
            pstateObj : [],                            
            district : '',
            otherState:"",
            otherDistrict:"",
            city : '',
            religion : '',
            caste : '',    
            subcaste:'',
            otherCaste:"",
            education : '',
            educationObj:[],
            occupation:"",
            employment : '',
            income : '',
            casteObj:[],
            caste:0,
            gothramObj:[],
            gothram:"",
            dhoshamObj:[],
            dhosham:"",
            religion:0,
        }
    }

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

    componentDidMount(value) {
       
        this.setState({
            id : this.props.location.state.profile.id,
            firstName : this.props.location.state.profile.firstName,
            lastName : this.props.location.state.profile.lastName,
            bDay : this.props.location.state.profile.bDay,
            bMonth : this.props.location.state.profile.bMonth,
            bYear : this.props.location.state.profile.bYear,
            email : this.props.location.state.profile.email,
            mCountryCode : this.props.location.state.profile.mCountryCode,  
            mobile : this.props.location.state.profile.mobile,  
            heightInch : this.props.location.state.profile.heightInch,
            heightCm : this.props.location.state.profile.heightCm,
            weight : this.props.location.state.profile.weight,
            mStatus : this.props.location.state.profile.mStatus,
            familyType : this.props.location.state.profile.familyType,
            familyValue : this.props.location.state.profile.familyValue,
            foodHabit : this.props.location.state.profile.foodHabit,
            disabled : this.props.location.state.profile.disabled,
            disablityInfo : this.props.location.state.profile.disablityInfo,
            bodyType : this.props.location.state.profile.bodyType,
            country : this.props.location.state.profile.country,
            countryObj: convertReactSelectValue(this.props.location.state.profile.country, LocationDropdownConsts.countries),
            pstate : this.props.location.state.profile.pstate,  
            pstateObj: convertReactSelectValue(this.props.location.state.profile.pstate, LocationDropdownConsts.indiaStates),   
            district : this.props.location.state.profile.district,
            districtObj: convertReactSelectValue(this.props.location.state.profile.district, LocationDropdownConsts.tamilnaduDistricts),
            city : this.props.location.state.profile.city,
            religion : this.props.location.state.profile.religion,
            religionObj: convertReactSelectValue(this.props.location.state.profile.religion, ReligionDropdownConsts.regilionValues),
            caste : this.props.location.state.profile.caste,    
            casteObj: convertReactSelectValue(this.props.location.state.profile.caste, ReligionDropdownConsts.hinduCasteValues),
            subcaste : this.props.location.state.profile.subcaste,
            gothram: this.props.location.state.profile.gothram,  
            gothramObj : convertReactSelectValue(this.props.location.state.profile.gothram, ReligionDropdownConsts.gothramValues),
            dhosham : this.props.location.state.profile.dhosham,
            dhoshamObj : convertReactSelectValue(this.props.location.state.profile.dhosham, ReligionDropdownConsts.dhoshamValues),
            education : this.props.location.state.profile.education,
            educationObj: convertReactSelectValue(this.props.location.state.profile.education, DropDownConstant.educationValues),
            occupation : this.props.location.state.profile.occupation,
            employment : this.props.location.state.profile.employment,
            income : this.props.location.state.profile.income           
        });
        this.handleLocationFields(this.props.location.state.profile.country, this.props.location.state.profile.pstate);
        this.handleReligionFields(this.props.location.state.profile.religion);
        if(this.props.location.state.profile.disabled === 'Y') {
            document.getElementById("disablityReason").style.display = "block";
        } else {
            document.getElementById("disablityReason").style.display = "none";
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

    doThisLater() {
       this.redirectLocationDetail();
    }

    redirectLocationDetail() {
        this.props.history.push(
            {
                pathname:'/updateLocation' ,
                state:{
                    profileId : this.state.profileId,
                    email : this.state.email,
                    religion:this.state.religion
                }                                   
            }
        );
    }


    firstNameChange(event) {
        this.setState({
            firstName:event.target.value
        })
    }

    lastNameChange(event) {
        this.setState({
            lastName:event.target.value
        })
    }

    emailChange(event) {
        this.setState({
            email:event.target.value
        })
    }

    bDayChange(event) {
        this.setState({
            bDay:event.target.value
        })
    }

    bMonthChange(event) {
        this.setState({
            bMonth:event.target.value
        })
    }

    bYearChange(event) {
        this.setState({
            bYear:event.target.value
        })
    }

    mCountryCodeChange(value) {
        this.setState({
            mCountryCode:value
        });        
    }

    mobileChange(event) {
        this.setState({
            mobile:event.target.value
        })
    }

    heightCmChange(event) {
        this.setState({
            heightCm:event.target.value
        })
    }

    heightInchChange(event) {
        this.setState({
            heightInch:event.target.value
        })
    }

    weightChange(event) {
        this.setState({
            weight:event.target.value
        })
    }

    mStatusChange(event) {
        this.setState({
            mStatus:event.target.value
        })
    }

    familyTypeChange(event) {
        this.setState({
            familyType:event.target.value
        })
    }

    familyValueChange(event) {
        this.setState({
            familyValue:event.target.value
        })
    }

    foodHabitChange(event) {
        this.setState({
            foodHabit:event.target.value
        })
    }

    disabledChange(event) {
        this.setState({
            disabled:event.target.value
        });
        if(event.target.value === 'Y') {
            document.getElementById("disablityReason").style.display = "block";
        } else {
            document.getElementById("disablityReason").style.display = "none";
        }
    }

    disablityReasonChange(event) {
        this.setState({disablityInfo:event.target.value});
    }

    disInfoChange(event) {
        this.setState({
            disInfo:event.target.value
        })
    }

    bodyTypeChange(event) {
        this.setState({
            bodyType:event.target.value
        })
    }
  
    countryChange(valueObj) {
        this.setState({
            countryObj:populateArray(valueObj),
            country:valueObj.value
        });
        this.handleLocationFields(parseInt(valueObj.value), this.state.pstate);
    }

    profileStateChange(valueObj) {
        this.setState({
            pstateObj:populateArray(valueObj),
            pstate:parseInt(valueObj.value)
        });
        this.handleLocationFields(this.state.country, parseInt(valueObj.value));
    }

    otherStateChange(event) {
        this.setState({
            otherState:event.target.value
        })
    }

    cityChange(event) {
        this.setState({
            city:event.target.value
        })
    }

    districtChange(valueObj) {
        this.setState({
            districtObj:populateArray(valueObj),
            district:parseInt(valueObj.value)
        })
    }

    educationChange(event) {
        this.setState({
            education:event.target.value
        })
    }
    
    employmentChange(event) {
        this.setState({
            employment:event.target.value
        })
    }

    occupationChange(event) {
        this.setState({
            occupation:event.target.value
        })
    }

    incomeChange(event) {
        this.setState({
            income:event.target.value
        })
    }

    updateProfileSelf() {
        axios.put(ApiConstant.USER_COMPLETE_PROFILE_API, 
            { 
                id:this.state.id,
                firstName : this.state.firstName,
                lastName : this.state.lastName,               
                dob:this.state.bDay+"/"+this.state.bMonth+"/"+this.state.bYear,
                email : this.state.email,
                mCountryCode : this.state.mCountryCode,  
                mobile : this.state.mobile,  
                heightInch : this.state.heightInch,
                heightCm : this.state.heightCm,
                weight : this.state.weight,
                mStatus : this.state.mStatus,
                familyType : this.state.familyType,
                familyValue : this.state.familyValue,
                foodHabit : this.state.foodHabit,
                disabled : this.state.disabled,
                disablityInfo:this.state.disablityInfo,
                bodyType : this.state.bodyType,
                country : this.state.country,
                pstate : this.state.pstate,     
                otherState : this.state.otherState,                              
                district : this.state.district,
                otherDistrict : this.state.otherDistrict, 
                city : this.state.city,
                religion : this.state.religion,
                caste : this.state.caste,  
                otherCaste : this.state.otherCaste,  
                subcaste : this.state.subcaste,
                gothram : this.state.gothram,
                dhosham : this.state.dhosham,
                education : this.state.education,
                occupation: this.state.occupation,
                employment : this.state.employment,
                income : this.state.income  
            })
            .then((res) => {
                console.log(res);                
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

    render() {
        return (
            <div>
               <TopBar />
               <div className='hs50' />  
               <div className="prefSectionContainer"> 

               </div>
                <div className="prefSectionContainer"> 
                    <CompletePersonalDetail
                         firstName = {this.state.firstName}
                         lastName = {this.state.lastName}
                         bDay = {this.state.bDay}
                         bMonth = {this.state.bMonth}
                         bYear = {this.state.bYear}
                         email = {this.state.email}
                         bYear = {this.state.bYear}
                         mCountryCode = {this.state.mCountryCode}
                         mobile = {this.state.mobile}
                         heightInch = {this.state.heightInch}
                         heightCm = {this.state.heightCm}
                         weight = {this.state.weight}
                         mStatus = {this.state.mStatus}
                         familyType = {this.state.familyType}
                         familyValue = {this.state.familyValue}
                         foodHabit = {this.state.foodHabit}
                         disabled = {this.state.disabled}
                         disablityInfo = {this.state.disablityInfo}
                         bodyType = {this.state.bodyType}
                         firstNameChange = {this.firstNameChange}
                         lastNameChange = {this.lastNameChange}
                         bDayChange = {this.bDayChange}
                         bMonthChange = {this.bMonthChange}
                         bYearChange = {this.bYearChange}
                         emailChange = {this.emailChange}
                         mCountryCodeChange = {this.mCountryCodeChange}
                         mobileChange = {this.mobileChange}
                         heightInchChange = {this.heightInchChange}
                         heightCmChange = {this.heightCmChange}
                         weightChange = {this.weightChange}
                         mStatusChange = {this.mStatusChange}
                         familyTypeChange = {this.familyTypeChange}
                         familyValueChange = {this.familyValueChange}
                         foodHabitChange = {this.foodHabitChange}
                         disabledChange = {this.disabledChange}
                         disablityReasonChange = {this.disablityReasonChange}
                         disInfoChange = {this.disInfoChange}
                         bodyTypeChange = {this.bodyTypeChange}
                    />
                     <ReligionDetail 
                        casteObj = {this.state.casteObj}
                        caste = {this.state.caste}
                        religionObj = {this.state.religionObj}
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
                    <Location 
                        countryObj = {this.state.countryObj}
                        country = {this.state.country}
                        pstateObj = {this.state.pstateObj}
                        pstate = {this.state.pstate}
                        districtObj = {this.state.districtObj}
                        district = {this.state.district}
                        city = {this.state.city}
                        countryChange = {this.countryChange}
                        profileStateChange = {this.profileStateChange}
                        otherStateChange = {this.otherStateChange}
                        districtChange = {this.districtChange}
                        cityChange = {this.cityChange}
                    />
                    <ProfDetail 
                        educationObj = {this.state.educationObj}
                        employment = {this.state.employment}
                        income = {this.state.income}
                        occupation = {this.state.occupation}
                        educationChange = {this.educationChange}
                        occupationChange = {this.occupationChange}
                        employmentChange = {this.employmentChange}
                        incomeChange = {this.incomeChange}
                    />
                </div>
                <div className="hs20" />
                <div>
                    <button onClick={this.updateProfileSelf}>Submit</button>
                </div>
                <div className="hs10" />
                <Footer />
            </div>
        );
    }
}

export default ProfileSelf;