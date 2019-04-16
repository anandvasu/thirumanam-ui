import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import Constant from '../utils/Constant';
import {populateArray} from '../utils/Util';
import Age from '../utils/Age';
import Height from '../utils/Height';
import ShowProfileSelect from '../utils/ShowProfileSelect';
import EducationMultiSelect from '../utils/EducationMultiSelect'; 
import MaritalStatusSelect from '../utils/MaritalStatusSelect';
import ReligionMultiSelect from '../utils/ReligionMultiSelect';

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
        this.showProfileChange = this.showProfileChange.bind(this);

        this.state = {
            searchClicked: false,
            gender:Constant.genderF,
            ageFrom:Constant.ageFrom,
            ageTo:Constant.ageTo,
            minHeight:Constant.minHeight,
            maxHeight:Constant.maxHeight,
            mStatus:"NM",
            religions:[],
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
                    mStatus:populateArray(this.state.mStatus),
                    religions:this.state.religions,
                    education:this.state.education,
                    showProfile:this.state.showProfile
                }
                }}/>
        }
        return (
                <div>
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
                    <div style={{width:'100%',paddingBottom:'5px'}}> 
                        <div className="glabel">
                            <label>Profile</label>
                        </div>
                        <div className="gfield">
                           <ShowProfileSelect 
                                showProfileChange={this.showProfileChange}
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