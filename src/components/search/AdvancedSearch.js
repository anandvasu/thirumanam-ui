import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import Constant from '../utils/Constant';
import {populateArray, getValueArrFromReactSelect } from '../utils/Util';
import Age from '../utils/Age';
import Height from '../utils/Height';
import ShowProfileSelect from '../utils/ShowProfileSelect';
import EducationMultiSelect from '../utils/EducationMultiSelect'; 
import MaritalStatusSelect from '../utils/MaritalStatusSelect';
import ReligionMultiSelect from '../utils/ReligionMultiSelect';
import CasteMultiSelect from '../utils/CasteMultiSelect';
import CountryMultiSelect from '../utils/CountryMultiSelect';
import StateMultiSelect from '../utils/StateMultiSelect';
import OccupationMultiSelect from '../utils/OccupationMultiSelect';
import GothramMultiSelect from '../utils/GothramMultiSelect';
import DhoshamMultiSelect from '../utils/DhoshamMultiSelect';
import DistrictMultiSelect from '../utils/DistrictMultiSelect';

class AdvancedSearch extends Component {

    constructor (props) {
        super(props);
        this.showProfileChange = this.showProfileChange.bind(this);
        this.basicSearch = this.basicSearch.bind(this);
        this.genderChange = this.genderChange.bind(this);
        this.ageFromChange = this.ageFromChange.bind(this);
        this.ageToChange = this.ageToChange.bind(this);
        this.maritalStatusChange = this.maritalStatusChange.bind(this); 
        
        this.handleReligionChange = this.handleReligionChange.bind(this);
        this.handleCasteChange = this.handleCasteChange.bind(this);
        this.handleGothramChange = this.handleGothramChange.bind(this);
        this.handleDhoshamChange = this.handleDhoshamChange.bind(this);
        
        this.handleCountryChange = this.handleCountryChange.bind(this);  
        this.handleStateChange = this.handleStateChange.bind(this);  

        
        this.educationChange = this.educationChange.bind(this);      

        this.state = {
            searchClicked: false,
            gender:Constant.genderF,
            ageFrom:Constant.ageFrom,
            ageTo:Constant.ageTo,
            minHeight:Constant.minHeight,
            maxHeight:Constant.maxHeight,
            mStatus:"NM",
            religions:[],
            castes:[],
            gothrams:[],
            dhoshams:[],            
            countries:[],
            states:[],
            districts:[],
            education:[],
            showProfile:"A"
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

    maritalStatusChange(event) {
        this.setState({mStatus:event.target.value});
    }

    educationChange(inputEducation) {
        this.setState({
            education:inputEducation
        }); 
    }

    handleReligionChange(inputReligion) {
        this.setState({
            religions:inputReligion
        });
    }    

    basicSearch(event) {
        this.setState({searchClicked:true});
        console.log(this.state.searchClicked);
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
                    mStatus:populateArray(this.state.mStatus),
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
                            <label>Marital Status&nbsp;</label>
                        </div>  
                        <div className='gfield'>
                            <MaritalStatusSelect 
                                maritalStatusChange = {this.maritalStatusChange}
                                mStatus = {this.state.mStatus}
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
                        <label><h2>Education</h2></label>
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
                                 countries = {this.state.countries}
                            />
                        </div>
                    </div>                                     
                </div>    
                <div className="sectionParentDiv">
                    <div className="header2bottomborder">
                        <label><h2>Horoscope</h2></label>
                    </div>
                    <div className="gFieldRow" style={{paddingTop:'25px'}}>
                        <div className="glabel">
                            Country Living In
                        </div>
                        <div className="gfield">
                            <CountryMultiSelect 
                                handleCountryChange = {this.handleCountryChange}
                                countries = {this.state.countries}
                                countryObj = {this.state.countryObj}
                                pstateObj = {this.state.pstateObj}
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
                            />
                        </div>
                    </div>                                     
                </div>    
        <div>                               
            <button onClick={this.basicSearch}>Search</button>  
        </div>
    </div>
        );
    }
}

export default AdvancedSearch;