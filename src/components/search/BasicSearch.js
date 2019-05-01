import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import Constant from '../utils/Constant';
import {populateArray} from '../utils/Util';
import Age from '../utils/Age';
import Height from '../utils/Height';
import ShowProfile from '../utils/ShowProfile';
import EducationMultiSelect from '../utils/EducationMultiSelect'; 
import MaritalStatus from '../utils/MaritalStatus';
import ReligionMultiSelect from '../utils/ReligionMultiSelect';
import CasteMultiSelect from '../utils/CasteMultiSelect';
import CountryMultiSelect from '../utils/CountryMultiSelect';
import StateMultiSelect from '../utils/StateMultiSelect';
import DistrictMultiSelect from '../utils/DistrictMultiSelect';
import MotherTongueMultiSelect from '../utils/MotherTongueMultiSelect';
import DropDownConstant from '../utils/DropDownConstant';

class BasicSearch extends Component {

    constructor (props) {
        super(props);
        this.basicSearch = this.basicSearch.bind(this);
        this.genderChange = this.genderChange.bind(this);
        this.ageFromChange = this.ageFromChange.bind(this);
        this.ageToChange = this.ageToChange.bind(this);
        this.maritalStatusChange = this.maritalStatusChange.bind(this); 
        this.educationChange = this.educationChange.bind(this);
        this.handleReligionChange = this.handleReligionChange.bind(this);
        this.handleCasteChange = this.handleCasteChange.bind(this);
        this.showProfileChange = this.showProfileChange.bind(this);
        this.handleMTongueChange = this.handleMTongueChange.bind(this);        

        this.handleCountryChange = this.handleCountryChange.bind(this);  
        this.handleStateChange = this.handleStateChange.bind(this);  
        this.handleDistrictChange = this.handleDistrictChange.bind(this); 

        this.state = {
            searchClicked: false,
            gender:Constant.genderF,
            ageFrom:Constant.ageFrom,
            ageTo:Constant.ageTo,
            minHeight:Constant.minHeight,
            maxHeight:Constant.maxHeight,
            mStatus:[],
            religions:[],
            castes:[],
            countries:[],
            states:[],
            districts:[],
            education:[],
            mtongues:DropDownConstant.mtongue_DF,
            showProfile:[]
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

    maritalStatusChange(value) {
        this.setState({mStatus:value});
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

    handleCasteChange(option) {
        this.setState({
            castes: option
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

    handleMTongueChange(option) {
        this.setState({
            mtongues: option
        });
    }
    

    basicSearch(event) {
        this.setState({searchClicked:true});
        console.log(this.state.searchClicked);
    }

    showProfileChange(value) {
        this.setState({showProfile:value});
    }

    render () {
        if (this.state.searchClicked === true) {
            return <Redirect to= {{
                pathname:'/results',
                state:{
                    fromPage:"B",
                    gender:this.state.gender,
                    ageFrom:this.state.ageFrom,
                    ageTo:this.state.ageTo,
                    minHeight:this.state.minHeight,
                    maxHeight:this.state.maxHeight,
                    mStatus:this.state.mStatus,
                    religions:this.state.religions,
                    castes:this.state.castes,
                    countries:this.state.countries,
                    states:this.state.states,
                    districts:this.state.districts,
                    education:this.state.education,
                    mtongues:this.state.mtongues,
                    showProfile:this.state.showProfile
                }
                }}/>
        }
        return (
                <div>
                    <div className="gFieldRow"> 
                        <div className="glabel" style={{verticalAlign:'top'}}>
                            <label>Profile</label>
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
                    <div className="gFieldRow">            
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
                    <div className="gFieldRow">            
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
                    <div style={{width:'100%',paddingBottom:'5px'}}> 
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
                    <div>                               
                        <button onClick={this.basicSearch}>Search</button>  
                    </div>
                </div>
        );
    }
}

export default BasicSearch;