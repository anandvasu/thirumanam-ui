import React, {Component} from 'react';
import './QuickSearch.css';
import {Redirect} from "react-router-dom";
import './DashboardSearch.css';
import {toast} from 'react-toastify';
import Height from '../../components/utils/Height';
import Age from '../../components/utils/Age';
import ReligionSelect from '../utils/ReligionSelect';
import MaritalStatusSelect from '../utils/MaritalStatusSelect';
import Constant from '../utils/Constant';
import ApiConstant from '../utils/ApiConstant';
import {populateArray} from '../utils/Util';
import axios from 'axios';
import {
    withRouter
  } from 'react-router-dom';

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
        this.viewProfile = this.viewProfile.bind(this);

        this.state = {
            searchClicked: false,
            gender:((sessionStorage.getItem("gender")===Constant.genderM) ? Constant.genderF : Constant.genderM),
            ageFrom:Constant.ageFrom,
            ageTo:Constant.ageTo,
            minHeight:Constant.minHeight,
            maxHeight:Constant.maxHeight,
            mStatus:"NM",
            religions:[],
            gothrams:[],
            religionValue:null        
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
    
    religionChangeHandler(valueObj) {
        this.setState({
            religions:populateArray(valueObj),
            religionValue:valueObj.value
        });
    }
   
    searchProfile(event) {
        this.setState({searchClicked:true});
        console.log(this.state.searchClicked);
    }

    viewProfile(event) {

        event.preventDefault();

        const profileId = document.getElementById("profileId").value;

        if (String.prototype.trim.call(profileId) !== "") {

            axios.get(ApiConstant.USER_API+profileId+"?userId="+sessionStorage.getItem(Constant.USER_PROFILE_ID))
                .then((response) => {
                    console.log(response);
                        this.props.history.push({
                            pathname: '/viewProfile',
                            state: {
                                profile:response.data
                            }
                }).catch((err) => {
                        
                });
            });
        } else {
            toast.error("Please enter Profile ID", 
                {
                    position:toast.POSITION.TOP_CENTER,
                    hideProgressBar:true,
                    autoClose:3000,
                    toastId:Constant.toastIdErr
                });
        } 
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
                    religions:populateArray(this.state.religionValue)
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
                            <label>Profile ID:&nbsp;</label>
                        </div>
                        <div className="dashRightField">
                           <input type="text" id="profileId"/> <button onClick={this.viewProfile}>Search</button>
                        </div>  
                    </div>  

                    <div style={{width:'100%',paddingTop:'3px'}}> 
                        <div style={{width:'100%'}}>
                            <label>OR</label>
                        </div>
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

export default withRouter(DashboardSearch);