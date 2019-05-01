import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import Constant from '../utils/Constant';
import {populateArray, getValueArrFromReactSelect } from '../utils/Util';
import Age from '../utils/Age';
import Height from '../utils/Height';
import ShowProfileSelect from '../utils/ShowProfileSelect';
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

class AdvancedSearch extends Component {

    constructor (props) {
        super(props);
        this.showProfileChange = this.showProfileChange.bind(this);
        this.search = this.search.bind(this);
        this.genderChange = this.genderChange.bind(this);
        this.ageFromChange = this.ageFromChange.bind(this);
        this.ageToChange = this.ageToChange.bind(this);
        this.handleMTongueChange = this.handleMTongueChange.bind(this);   
        this.maritalStatusChange = this.maritalStatusChange.bind(this); 
        
        this.handleReligionChange = this.handleReligionChange.bind(this);
        this.handleCasteChange = this.handleCasteChange.bind(this);
        this.handleGothramChange = this.handleGothramChange.bind(this);
        this.handleDhoshamChange = this.handleDhoshamChange.bind(this);
        
        this.handleCountryChange = this.handleCountryChange.bind(this);  
        this.handleStateChange = this.handleStateChange.bind(this);  
        this.handleDistrictChange = this.handleDistrictChange.bind(this);  
        
        this.educationChange = this.educationChange.bind(this);      
        this.handleOccupationChange = this.handleOccupationChange.bind(this);
        this.handleIncomeChange = this.handleIncomeChange.bind(this);   
        
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
            education:[],
            occupations:[],
            incomeObj:[],
            showProfile:"A",
            foodHabits:[],
            drinkingHabits:[],
            smokingHabits:[]  
        }
    }

    componentDidMount() {
        if((this.props.fromPage === "P") && (this.props.preference != null)) {  
            this.setState({
                ageFrom:this.props.preference.ageFrom,
                ageTo:this.props.preference.ageTo,
                minHeight:this.props.preference.minHeight,
                maxHeight:this.props.preference.maxHeight,
                mStatus:this.props.preference.mStatus,
                foodHabits:this.props.preference.foodHabits,
                countries:convertReactSelectValues(this.props.preference.countries, LocationDropdownConsts.countries),
                states:convertReactSelectValues(this.props.preference.states, LocationDropdownConsts.indiaStates),
                religions:convertReactSelectValues(this.props.preference.religions, ReligionDropdownConsts.regilionValues)            
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

    educationChange(inputEducation) {
        this.setState({
            education:inputEducation
        }); 
    }

    handleOccupationChange(option) {
        this.setState({
            occupations:option
        }); 
    }

    handleIncomeChange(option) {
        this.setState({
            incomeObj:option
        });
    }

    handleReligionChange(inputReligion) {
        this.setState({
            religions:inputReligion
        });
    }    

    search(event) {
        if(this.props.location.state.fromPage === "P") {
            event.preventDefault();
            const profileId = sessionStorage.getItem("profileId");  
            console.log(profileId);
            axios.put(ApiConstant.PREFERENCE_API, 
                { 
                    id:profileId,
                    ageFrom:this.state.ageFrom,
                    ageTo:this.state.ageTo,
                    mStatus:this.state.mStatus,
                    city:this.state.city,
                    minHeight:this.state.minHeight,
                    maxHeight:this.state.maxHeight,
                    foodHabits:this.state.foodHabits,  
                    religions:getValueArrFromReactSelect(this.state.religions),
                    castes:getValueArrFromReactSelect(this.state.castes),
                    countries:getValueArrFromReactSelect(this.state.countries),              
                    states:getValueArrFromReactSelect(this.state.states)      
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
        } else {
            this.setState({searchClicked:true});
        }
    }

    showProfileChange(event) {
        this.setState({showProfile:event.target.value});
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
                    <div className="gFieldRow"> 
                        <div className="glabel">
                            <label>Profile</label>
                        </div>
                        <div className="gfield">
                           <ShowProfileSelect 
                                showProfileChange={this.showProfileChange}
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
                        <label><h2>Religion</h2></label>
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
                        <label><h2>Location</h2></label>
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
                        <label><h2>Education/Occupation/Income</h2></label>
                    </div>
                    <div className="gFieldRow" style={{paddingTop:'25px'}}> 
                        <div className="glabel">
                            <label>Education</label>
                        </div>
                        <div className="gfield">
                            <EducationMultiSelect 
                                education = {this.state.education}
                                educationChange = {this.educationChange}
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
                        <label><h2>Habits</h2></label>
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
        <div style={{paddingBottom:'20px'}}>                               
            <button onClick={this.search}>Search</button>  
        </div>
    </div>
        );
    }
}

export default AdvancedSearch;