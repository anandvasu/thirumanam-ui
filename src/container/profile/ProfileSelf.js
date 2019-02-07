import React, {Component} from 'react';
import TopBar from '../../components/menu/TopBar';
import Footer from '../../components/footer/Footer';
import Location from '../../components/register/Location';
import ProfDetail from '../../components/register/ProfDetail';
import CompletePersonalDetail from '../../components/register/CompletePersonalDetail';
import ApiConstant from '../../components/utils/ApiConstant';
import DropDownConstant from '../../components/utils/DropDownConstant'
import {convertReactSelectValue} from '../../components/utils/Util';
import {toast} from 'react-toastify';
import axios from 'axios';

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
        this.disInfoChange = this.disInfoChange.bind(this);
        this.bodyTypeChange = this.bodyTypeChange.bind(this);

        this.countryChange = this.countryChange.bind(this);
        this.profileStateChange = this.profileStateChange.bind(this);
        this.districtChange = this.districtChange.bind(this);
        this.cityChange = this.cityChange.bind(this);

        this.educationChange = this.educationChange.bind(this);
        this.employmentChange = this.employmentChange.bind(this);        
        this.incomeChange = this.incomeChange.bind(this);

        this.updateProfileSelf = this.updateProfileSelf.bind(this);        

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
            disInfo : '',
            bodyType : '',
            country : '',
            pstate : '',                                  
            district : '',
            city : '',
            religion : '',
            caste : '',    
            education : '',
            employment : '',
            income : ''
        }
    }

    componentDidMount(value) {
       
        this.setState({
            id : this.props.location.state.id,
            firstName : this.props.location.state.firstName,
            lastName : this.props.location.state.lastName,
            bDay : this.props.location.state.bDay,
            bMonth : this.props.location.state.bMonth,
            bYear : this.props.location.state.bYear,
            email : this.props.location.state.email,
            mCountryCode : this.props.location.state.mCountryCode,  
            mobile : this.props.location.state.mobile,  
            heightInch : this.props.location.state.heightInch,
            heightCm : this.props.location.state.heightCm,
            weight : this.props.location.state.weight,
            mStatus : this.props.location.state.mStatus,
            familyType : this.props.location.state.familyType,
            familyValue : this.props.location.state.familyValue,
            foodHabit : this.props.location.state.foodHabit,
            disabled : this.props.location.state.disabled,
            disInfo : this.props.location.state.disInfo,
            bodyType : this.props.location.state.bodyType,
            country : this.props.location.state.country,
            pstate : this.props.location.state.pstate,                                  
            district : this.props.location.state.district,
            city : this.props.location.state.city,
            religion : this.props.location.state.religion,
            caste : this.props.location.state.caste,    
            education : this.props.location.state.education,
            employment : this.props.location.state.employment,
            income : this.props.location.state.income,     
        });
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
        })
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
        })
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

  
    countryChange(event) {
        this.setState({
            country:event.target.value
        })
    }

    profileStateChange(event) {
        this.setState({
            pstate:event.target.value
        })
    }

    cityChange(event) {
        this.setState({
            city:event.target.value
        })
    }

    districtChange(event) {
        this.setState({
            district:event.target.value
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
                bDay : this.state.bDay,
                bMonth : this.state.bMonth,
                bYear : this.state.bYear,
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
                disInfo : this.state.disInfo,
                bodyType : this.state.bodyType,
                country : this.state.country,
                pstate : this.state.pstate,                                  
                district : this.state.district,
                city : this.state.city,
                religion : this.state.religion,
                caste : this.state.caste,    
                education : this.state.education,
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
                         disInfo = {this.state.disInfo}
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
                         disInfoChange = {this.disInfoChange}
                         bodyTypeChange = {this.bodyTypeChange}
                    />
                    <Location 
                        country = {this.state.country}
                        pstate = {this.state.pstate}
                        district = {this.state.district}
                        city = {this.state.city}
                        countryChange = {this.countryChange}
                        profileStateChange = {this.profileStateChange}
                        districtChange = {this.districtChange}
                        cityChange = {this.cityChange}
                    />
                    <ProfDetail 
                        education = {this.state.education}
                        employment = {this.state.employment}
                        income = {this.state.income}
                        educationChange = {this.educationChange}
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