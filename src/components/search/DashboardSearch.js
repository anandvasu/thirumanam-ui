import React, {Component} from 'react';
import './QuickSearch.css';
import {Redirect} from "react-router-dom";
import './DashboardSearch.css';
import Height from '../../components/utils/Height';
import Age from '../../components/utils/Age';
import ReligionSelect from '../utils/ReligionSelect';
import MaritalStatusSelect from '../utils/MaritalStatusSelect';
import GothramSelect from '../utils/GothramSelect';
import Constant from '../utils/Constant';
import {populateArray} from '../utils/Util';

class DashboardSearch extends Component {

    constructor (props) {
        super(props);
        this.searchProfile = this.searchProfile.bind(this);
        this.genderChange = this.genderChange.bind(this);
        this.ageFromChange = this.ageFromChange.bind(this);
        this.ageToChange = this.ageToChange.bind(this);
        this.maritalStatusChange = this.maritalStatusChange.bind(this);
        this.minHeightChange = this.minHeightChange.bind(this);
        this.maxHeightChange = this.maxHeightChange.bind(this);
        this.religionChangeHandler = this.religionChangeHandler.bind(this);
        this.gothramChangeHandler = this.gothramChangeHandler.bind(this);
        
        this.state = {
            searchClicked: false,
            gender:((sessionStorage.getItem("gender")===Constant.genderM) ? Constant.genderF : Constant.genderM),
            ageFrom:Constant.ageFrom,
            ageTo:Constant.ageTo,
            minHeight:Constant.minHeight,
            maxHeight:Constant.maxHeight,
            mStatus:"NM",
            religions:[],
            gothrams:[]          
        }
    }

    ageFromChange(event) {
        this.setState({ageFrom:event.target.value});
    }

    ageToChange(event) {
        this.setState({ageTo:event.target.value});
    }

    minHeightChange(event) {
        this.setState({minHeight:event.target.value});
    }

    maxHeightChange(event) {
        this.setState({maxHeight:event.target.value});
    }

    genderChange(event) {
        this.setState({gender:event.target.value});
    }

    maritalStatusChange(event) {   
        this.setState({
            mStatus:event.target.value
        });    
    }
    
    religionChangeHandler(value) {
        this.setState({
            religions:populateArray(value)
        });
    }

    gothramChangeHandler(value) {
        this.setState({
            gothrams:populateArray(value)
        });
    }

    searchProfile(event) {
        this.setState({searchClicked:true});
        console.log(this.state.searchClicked);
    }

    render () {
        if (this.state.searchClicked === true) {
            return <Redirect to= {{
                pathname:'/results',
                state:{                   
                    ageFrom:this.state.ageFrom,
                    ageTo:this.state.ageTo,
                    minHeight:this.state.minHeight,
                    maxHeight:this.state.maxHeight,
                    gender:this.state.gender,
                    mStatus:populateArray(this.state.mStatus),
                    religions:this.state.religions
                }
                }}/>
        }
        return (
            <form>
                <div className="dashboardContainer">   
                    <div className="header2" style={{paddingTop:'5px'}}>
                        <div className="vs5px"/>
                        <b>Search Partner Profile</b>
                    </div>       
                    <div style={{width:'100%',paddingTop:'3px'}}> 
                        <div className="dashLeftLabel">
                            <label>Age:&nbsp;</label>
                        </div>
                        <div className="dashRightField">
                            <Age 
                                ageFrom = {this.state.ageFrom}
                                ageTo = {this.state.ageTo}
                                ageFromChange={this.ageFromChange}
                                ageToChange={this.ageToChange}
                            />                               
                        </div>  
                    </div>  

                    <div style={{width:'100%',paddingBottom:'5px'}}> 
                        <div className="dashLeftLabel">
                            <label>Height:&nbsp;</label>
                        </div>
                        <div className="dashRightField">
                            <Height 
                                minHeight = {this.state.minHeight}
                                maxHeight = {this.state.maxHeight}
                                minHeightChange = {this.minHeightChange}
                                maxHeightChange = {this.maxHeightChange}
                            />
                        </div>  
                    </div>  
              
                    <div style={{width:'100%',paddingBottom:'10px'}}>   
                        <div className="dashLeftLabel">                
                            <label>Marital Status:&nbsp;</label>
                        </div> 
                        <div className="dashRightField">
                            <MaritalStatusSelect 
                                maritalStatusChange = {this.maritalStatusChange}
                                mStatus = {this.state.mStatus}
                            />
                        </div>
                    </div>
                    <div style={{width:'100%',paddingBottom:'10px'}}>  
                        <div className="dashLeftLabel">                
                            <label>Religion:</label>
                        </div> 
                        <div className="dashRightField">
                             <ReligionSelect 
                                religions = {this.state.religions}
                                religionChangeHandler = {this.religionChangeHandler}
                             />
                        </div>
                    </div>                                      
                    <div style={{paddingBottom:'10px'}}>                               
                        <button onClick={this.searchProfile}>Search</button>  
                    </div>
                </div>
            </form>
        );
    }
}

export default DashboardSearch;