import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import Constant from '../utils/Constant';
import ApiConstant from '../utils/ApiConstant';
import {populateArray, getValueArrFromReactSelect,convertReactSelectValues,convertReactSelectValue } from '../utils/Util';
import Age from '../utils/Age';
import Height from '../utils/Height';
import ShowProfile from '../utils/ShowProfile';
import EducationMultiSelect from '../utils/EducationMultiSelect'; 
import MaritalStatus from '../utils/MaritalStatus';
import ReligionMultiSelect from '../utils/ReligionMultiSelect';
import CasteMultiSelect from '../utils/CasteMultiSelect';
import CountryMultiSelect from '../utils/CountryMultiSelect';
import StateMultiSelect from '../utils/StateMultiSelect';
import OccupationMultiSelect from '../utils/OccupationMultiSelect';
import GothramMultiSelect from '../utils/GothramMultiSelect';
import DhoshamMultiSelect from '../utils/DhoshamMultiSelect';
import DistrictMultiSelect from '../utils/DistrictMultiSelect';
import IncomeSelect from '../utils/IncomeSelect';
import FoodHabit from '../utils/FoodHabit';
import DrinkingHabits from '../utils/DrinkingHabits';
import SmokingHabits from '../utils/SmokingHabits';
import MotherTongueMultiSelect from '../utils/MotherTongueMultiSelect';
import DropDownConstant from '../utils/DropDownConstant';
import ReligionDropdownConsts from '../utils/ReligionDropdownConsts';
import LocationDropdownConsts from '../utils/LocationDropdownConsts';
import {toast} from 'react-toastify';
import axios from 'axios';
import EmploymentCheckbox from '../utils/EmploymentCheckbox';

class AdvancedSearch extends Component {

    constructor (props) {
        super(props);
        this.showProfileChange = this.showProfileChange.bind(this);
        this.search = this.search.bind(this);
        this.savePreference = this.savePreference.bind(this);
        this.genderChange = this.genderChange.bind(this);
        this.ageFromChange = this.ageFromChange.bind(this);
        this.ageToChange = this.ageToChange.bind(this);
        this.handleMTongueChange = this.handleMTongueChange.bind(this);   
        this.maritalStatusChange = this.maritalStatusChange.bind(this);
        this.minHeightChange = this.minHeightChange.bind(this); 
        this.maxHeightChange = this.maxHeightChange.bind(this);  
        
        this.handleReligionChange = this.handleReligionChange.bind(this);
        this.handleCasteChange = this.handleCasteChange.bind(this);
        this.handleGothramChange = this.handleGothramChange.bind(this);
        this.handleDhoshamChange = this.handleDhoshamChange.bind(this);
        
        this.handleCountryChange = this.handleCountryChange.bind(this);  
        this.handleStateChange = this.handleStateChange.bind(this);  
        this.handleDistrictChange = this.handleDistrictChange.bind(this);  
        
        this.handleEducationChange = this.handleEducationChange.bind(this);      
        this.handleOccupationChange = this.handleOccupationChange.bind(this);
        this.handleIncomeChange = this.handleIncomeChange.bind(this);   
        this.handleEmploymentChange = this.handleEmploymentChange.bind(this); 
        
        this.foodHabitChange = this.foodHabitChange.bind(this);        
        this.smokingHabitChange = this.smokingHabitChange.bind(this);    
        this.drinkingHabitChange = this.drinkingHabitChange.bind(this);    

        this.state = {
            searchClicked: false,
            gender:Constant.genderF,
            ageFrom:Constant.ageFrom,
            ageTo:Constant.ageTo,
            minHeight:Constant.minHeight,
            maxHeight:Constant.maxHeight,
            mtongues:DropDownConstant.mtongue_DF,
            mStatus:[],
            religions:[],
            castes:[],
            gothrams:[],
            dhoshams:[],            
            countries:[],
            states:[],
            districts:[],
            educations:[],
            employments:[],
            occupations:[],
            incomeObj:[],
            income:0,
            showProfile:[],
            foodHabits:[],
            drinkingHabits:[],
            smokingHabits:[]  
        }
    }

    componentDidMount() {
        if((this.props.fromPage === "P") && (this.props.preference.searchCriteria !== null)) {  
            this.setState({                
                ageFrom:this.props.preference.searchCriteria.ageGreater,
                ageTo:this.props.preference.searchCriteria.ageLess,
                minHeight:this.props.preference.searchCriteria.minHeight,
                maxHeight:this.props.preference.searchCriteria.maxHeight,
                mStatus:this.props.preference.searchCriteria.maritalStatus,                
                foodHabits:this.props.preference.searchCriteria.foodHabits,
                showProfile:this.props.preference.searchCriteria.showProfile,       
                income:this.props.preference.searchCriteria.income,       
                incomeObj:convertReactSelectValue(this.props.preference.searchCriteria.income, DropDownConstant.incomeValues), 
                religions:convertReactSelectValues(this.props.preference.searchCriteria.religions, ReligionDropdownConsts.regilionValues),
                castes:convertReactSelectValues(this.props.preference.searchCriteria.castes, ReligionDropdownConsts.hinduCasteValues),
                gothrams:convertReactSelectValues(this.props.preference.searchCriteria.gothrams, ReligionDropdownConsts.gothramValues),
                dhoshams:convertReactSelectValues(this.props.preference.searchCriteria.dhoshams, ReligionDropdownConsts.dhoshamValues),  
                countries:convertReactSelectValues(this.props.preference.searchCriteria.countries, LocationDropdownConsts.countries),
                states:convertReactSelectValues(this.props.preference.searchCriteria.states, LocationDropdownConsts.indiaStates),             
                districts:convertReactSelectValues(this.props.preference.searchCriteria.districts, LocationDropdownConsts.tamilnaduDistricts),
                educations:convertReactSelectValues(this.props.preference.searchCriteria.educations, DropDownConstant.educationValuesOptions),
                occupations:convertReactSelectValues(this.props.preference.searchCriteria.occupations, DropDownConstant.occupationValuesAll),     
                mtongues:convertReactSelectValues(this.props.preference.searchCriteria.mtongues, DropDownConstant.motherTongueValues),   
                employments:this.props.preference.searchCriteria.employments,           
                foodHabits:this.props.preference.searchCriteria.foodHabits,
                smokingHabits:this.props.preference.searchCriteria.smokingHabits,
                drinkingHabits:this.props.preference.searchCriteria.drinkingHabits               
            });
        }
    }

    ageFromChange(event) {
        this.setState({ageFrom:event.target.value});
    }

    ageToChange(event) {
        this.setState({ageTo:event.target.value});
    }

    genderChange(event) {
        this.setState({gender:event.target.value});
    }

    handleMTongueChange(option) {
        this.setState({
            mtongues: option
        });
    }

    maritalStatusChange(value) {
        this.setState({mStatus:value});
    }

    minHeightChange(event) {
        this.setState({
            minHeight:event.target.value
        });  
    }

    maxHeightChange(event) {
        this.setState({
            maxHeight:event.target.value
        });  
    }

    handleEducationChange(inputEducation) {
        this.setState({
            educations:inputEducation
        }); 
    }

    handleOccupationChange(option) {
        this.setState({
            occupations:option
        }); 
    }

    handleIncomeChange(valueObj) {
        this.setState({
            incomeObj:populateArray(valueObj),
            income:valueObj.value
        });
    }

    handleEmploymentChange(value) {
        this.setState({
            employments:value
        });
    }

    handleReligionChange(inputReligion) {
        this.setState({
            religions:inputReligion
        });
    }    

    savePreference(event) {
        event.preventDefault();
        const profileId = sessionStorage.getItem(Constant.USER_PROFILE_ID);  
        console.log(profileId);
        axios.put(ApiConstant.PREFERENCE_API, 
            { 
                id:profileId,
                searchCriteria: {   
                    gender:((sessionStorage.getItem(Constant.USER_GENDER)===Constant.genderM) ? Constant.genderF : Constant.genderM),
                    ageGreater:this.state.ageFrom,
                    ageLess:this.state.ageTo,
                    minHeight:this.state.minHeight,
                    maxHeight:this.state.maxHeight,
                    maritalStatus:this.state.mStatus,
                    education:getValueArrFromReactSelect(this.state.education),
                    showProfile:this.state.showProfile,
                    religions:getValueArrFromReactSelect(this.state.religions),
                    castes:getValueArrFromReactSelect(this.state.castes),
                    gothrams:getValueArrFromReactSelect(this.state.gothrams),
                    dhoshams:getValueArrFromReactSelect(this.state.dhoshams),                    
                    countries:getValueArrFromReactSelect(this.state.countries),              
                    states:getValueArrFromReactSelect(this.state.states),
                    districts:getValueArrFromReactSelect(this.state.districts),
                    educations:getValueArrFromReactSelect(this.state.educations),
                    occupations:getValueArrFromReactSelect(this.state.occupations),
                    income:this.state.income,
                    employments:this.state.employments, 
                    foodHabits:this.state.foodHabits,
                    smokingHabits:this.state.smokingHabits,
                    drinkingHabits:this.state.drinkingHabits,
                    mtongues:getValueArrFromReactSelect(this.state.mtongues)
                }   
            })
            .then((res) => {
                console.log(res);                
                toast.success("Preferences Saved Successfully", 
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

    search(event) {        
        this.setState({searchClicked:true});        
    }

    showProfileChange(value) {
        this.setState({showProfile:value});
    }
  
    handleReligionChange(option) {
        this.setState({
            religions: option
        });
    }

    handleCasteChange(option) {
        this.setState({
            castes: option
        });
    }

    handleGothramChange(option) {
        this.setState({
            gothrams: option
        });
    }

    handleDhoshamChange(option) {
        this.setState({
            dhoshams: option
        });
    }


    handleCountryChange(option) {
        this.setState({
            countries: option
        });
    }

    handleStateChange(option) {
        this.setState({
            states: option
        });
    }

    handleDistrictChange(option) {
        this.setState({
            districts: option
        });
    }

    foodHabitChange(inputHabits) {
        this.setState({
            foodHabits:inputHabits
        });
    }

    smokingHabitChange(inputHabits) {
        this.setState({
            smokingHabits:inputHabits
        });
    }

    drinkingHabitChange(inputHabits) {
        this.setState({
            drinkingHabits:inputHabits
        });
    }

    render () {
        if (this.state.searchClicked === true) {
            return <Redirect to= {{
                pathname:'/results',
                state:{
                    fromPage:"A",
                    gender:this.state.gender,
                    ageFrom:this.state.ageFrom,
                    ageTo:this.state.ageTo,
                    minHeight:this.state.minHeight,
                    maxHeight:this.state.maxHeight,
                    mStatus:this.state.mStatus,
                    religions:this.state.religions,
                    education:this.state.education,
                    showProfile:this.state.showProfile,
                    religions:this.state.religions,
                    castes:this.state.castes,
                    gothrams:this.state.gothrams,
                    dhoshams:this.state.dhoshams,                    
                    countries:this.state.countries,              
                    states:this.state.states,
                    districts:this.state.districts,
                    educations:this.state.educations,
                    occupations:this.state.occupations,
                    employments:this.state.employments,
                    incomeObj:this.state.incomeObj,
                    foodHabits:this.state.foodHabits,
                    smokingHabits:this.state.smokingHabits,
                    drinkingHabits:this.state.drinkingHabits,
                    mtongues:this.state.mtongues,
                }
                }}/>
        }
        return (
                <div>
                    <div className={this.props.prefClassName}>
                        <div className="gFieldRow"> 
                            <div className="glabel" style={{verticalAlign:'top'}}>
                                <label>Show Profile</label>
                            </div>
                            <div className="gfield">
                            <ShowProfile 
                                    showProfileChange={this.showProfileChange}
                                    showProfile = {this.state.showProfile}
                                />
                            </div>  
                        </div> 
                        { (sessionStorage.getItem(Constant.USER_PROFILE_ID) == null) && 
                        <div className="gFieldRow">
                            <div className='glabel'>
                                    <label>Gender</label>
                            </div>                    
                            <div className='gfield'>
                                <label>                              
                                    <input type="radio" value="M" checked={this.state.gender === 'M'} onChange={this.genderChange}/>                                    
                                        Male
                                </label>

                                <label style={{paddingLeft:'5px'}}>                           
                                    <input type="radio" value="F" checked={this.state.gender === 'F'} onChange={this.genderChange}/>                                    
                                        Female
                                </label>
                            </div>                        
                        </div>  
                        }
                        <div className="gFieldRow">
                            <div className='glabel'>
                                <label>Age&nbsp;</label>
                            </div>    
                            <div className='gfield'>
                                <Age 
                                    ageFrom = {this.state.ageFrom}
                                    ageTo = {this.state.ageTo}
                                    ageFromChange={this.ageFromChange}
                                    ageToChange={this.ageToChange}
                                />  
                            </div>  
                        </div>
                        <div style={{width:'100%',paddingBottom:'5px'}}> 
                            <div className="glabel">
                                <label>Height</label>
                            </div>
                            <div className="gfield">
                                <Height 
                                    minHeight = {this.state.minHeight}
                                    maxHeight = {this.state.maxHeight}
                                    minHeightChange = {this.minHeightChange}
                                    maxHeightChange = {this.maxHeightChange}
                                />
                            </div>  
                        </div>          
                        <div className="gFieldRow">            
                            <div className='glabel'>       
                                <label>Mother Tongue</label>
                            </div>  
                            <div className='gfield'>
                                <MotherTongueMultiSelect
                                    handleMTongueChange = {this.handleMTongueChange}
                                    mtongues = {this.state.mtongues}
                                />
                            </div> 
                        </div>             
                        <div className="gFieldRow" style={{paddingTop:'5px'}}>            
                            <div className='glabel'>       
                                <label>Marital Status&nbsp;</label>
                            </div>  
                            <div className='gfield' style={{verticalAlign:'top'}}>
                                <MaritalStatus 
                                mStatus = {this.state.mStatus}
                                maritalStatusChange = {this.maritalStatusChange}
                                />
                            </div> 
                        </div>    
                    <div className="sectionParentDiv">
                        <div className="header2bottomborder">
                            <label><h3>Religion</h3></label>
                        </div>
                        <div className="gFieldRow" style={{paddingTop:'25px'}}>            
                            <div className='glabel'>       
                                <label>Religion</label>
                            </div>  
                            <div className='gfield'>
                                <ReligionMultiSelect
                                    handleReligionChange = {this.handleReligionChange}
                                    religions = {this.state.religions}
                                />
                            </div> 
                        </div> 
                        <div className="gFieldRow">
                            <div className="glabel">
                                Caste
                            </div>
                            <div className="gfield">
                                <CasteMultiSelect 
                                    religions = {this.state.religions}
                                    castes = {this.state.castes}
                                    handleCasteChange = {this.handleCasteChange}
                                />
                            </div>
                        </div>     
                        <div className="gFieldRow">
                            <div className="glabel">
                                Gothram
                            </div>
                            <div className="gfield">
                                <GothramMultiSelect 
                                    gothrams = {this.state.gothrams}
                                    handleGothramChange = {this.handleGothramChange}
                                />
                            </div>
                        </div>    
                        <div className="gFieldRow">
                            <div className="glabel">
                                Dhosham
                            </div>
                            <div className="gfield">
                                <DhoshamMultiSelect 
                                    dhoshams = {this.state.dhoshams}
                                    handleDhoshamChange = {this.handleDhoshamChange}
                                />
                            </div>
                        </div>                                
                    </div>   
                        
                    <div className="sectionParentDiv">
                        <div className="header2bottomborder">
                            <label><h3>Location</h3></label>
                        </div>
                        <div className="gFieldRow" style={{paddingTop:'25px'}}>
                            <div className="glabel">
                                Country Living In
                            </div>
                            <div className="gfield">
                                <CountryMultiSelect 
                                    handleCountryChange = {this.handleCountryChange}
                                    countries = {this.state.countries}
                                />
                            </div>
                        </div>
                        <div className="gFieldRow">
                            <div className="glabel">
                                State
                            </div>
                            <div className="gfield">
                                <StateMultiSelect 
                                    countries = {this.state.countries}
                                    states = {this.state.states}
                                    handleStateChange = {this.handleStateChange}
                                />
                            </div>
                        </div>   
                        <div className="gFieldRow">
                            <div className="glabel">
                                District
                            </div>
                            <div className="gfield">
                                <DistrictMultiSelect 
                                    states = {this.state.states}
                                    districts = {this.state.districts}
                                    handleDistrictChange = {this.handleDistrictChange}
                                />
                            </div>
                        </div>                                   
                    </div>  

                    <div className="sectionParentDiv">
                        <div className="header2bottomborder">
                            <label><h3>Education/Occupation/Income</h3></label>
                        </div>
                        <div className="gFieldRow" style={{paddingTop:'25px'}}> 
                            <div className="glabel">
                                <label>Education</label>
                            </div>
                            <div className="gfieldLong">
                                <EducationMultiSelect 
                                    educations = {this.state.educations}
                                    handleEducationChange = {this.handleEducationChange}
                                />
                            </div>  
                        </div> 
                        <div className="gFieldRow">
                            <div className="glabel">
                                Employment
                            </div>
                            <div className="gfield">
                                <EmploymentCheckbox 
                                    employments = {this.state.employments}
                                    handleEmploymentChange = {this.handleEmploymentChange}
                                />
                            </div>
                        </div>    
                        <div className="gFieldRow">
                            <div className="glabel">
                                Occupation
                            </div>
                            <div className="gfield">
                                <OccupationMultiSelect 
                                    occupations = {this.state.occupations}
                                    handleOccupationChange = {this.handleOccupationChange}
                                />
                            </div>
                        </div>     
                        <div className="gFieldRow">
                            <div className="glabel">
                                Income
                            </div>
                            <div className="gfield">
                                <IncomeSelect 
                                    incomeObj = {this.state.incomeObj}
                                    handleIncomeChange = {this.handleIncomeChange}
                                />
                            </div>
                        </div>                                  
                    </div>    
                    <div className="sectionParentDiv">
                        <div className="header2bottomborder">
                            <label><h3>Habits</h3></label>
                        </div>
                        <div className="gFieldRow" style={{paddingTop:'25px'}}>
                            <div className="glabel" style={{verticalAlign:'top'}}>
                                Food Habits
                            </div>
                            <div className="gfield">
                                <FoodHabit
                                    foodHabits = {this.state.foodHabits}
                                    foodHabitChange = {this.foodHabitChange}
                                />
                            </div>
                        </div>                      
                        <div className="gFieldRow" style={{paddingTop:'5px'}}>
                            <div className="glabel" style={{verticalAlign:'top'}}>
                                Smoking
                            </div>
                            <div className="gfield">
                            <SmokingHabits
                                    smokingHabits = {this.state.smokingHabits}
                                    smokingHabitChange = {this.smokingHabitChange}
                            />
                            </div>
                        </div>     
                        <div className="gFieldRow" style={{paddingTop:'5px'}}>
                            <div className="glabel" style={{verticalAlign:'top'}}>
                                Drinking
                            </div>
                            <div className="gfield">
                            <DrinkingHabits
                                    drinkingHabits = {this.state.drinkingHabits}
                                    drinkingHabitChange = {this.drinkingHabitChange}
                            />
                            </div>
                        </div>                               
                    </div> 
                </div>
                { this.props.fromPage === "P" &&
                    <div style={{paddingBottom:'20px',paddingTop:'15px'}}>                               
                        <button onClick={this.savePreference}>Save</button>  
                    </div>
                }
                 { this.props.fromPage !== "P" &&
                    <div style={{paddingBottom:'20px',paddingTop:'15px'}}>                               
                        <button onClick={this.search}>Search</button>  
                    </div>
                }
        </div>
        );
    }
}

export default AdvancedSearch;