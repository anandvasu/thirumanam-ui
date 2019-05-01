import React, {Component} from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import ApiConstant from '../utils/ApiConstant';
import '../profile/MyMatchProfileSummary.css';
import MyMatchProfileSummary from '../../components/profile/MyMatchProfileSummary';
import {formatDate} from '../../components/utils/Util';
import Constant from '../utils/Constant';
import {
    withRouter
  } from 'react-router-dom';
  
class MyMatches extends Component {

    constructor(props) {
        super(props);

        this.profileClick = this.profileClick.bind(this);
        this.profileClosed = this.profileClosed.bind(this);     
        this.profileCloseHandler = this.profileCloseHandler.bind(this);         
        this.viewAllMyMatches = this.viewAllMyMatches.bind(this);  
        this.blockProfile = this.blockProfile.bind(this);  
        this.sendInterest = this.sendInterest.bind(this);
        this.shortlistProfile = this.shortlistProfile.bind(this);
        this.loadMyMatches = this.loadMyMatches.bind(this);
        this.goToPreferences = this.goToPreferences.bind(this);       

        this.state = {
            content:[],
            totalMatches:0,
            profileClicked:false,
            prefExists:true
        }
    }

    viewAllMyMatches() {       
        axios.get(ApiConstant.PREFERENCE_API+sessionStorage.getItem(Constant.USER_PROFILE_ID), {                
        })
        .then((res) => {
            console.log(res);
            console.log(res.data);            
            this.props.history.push({
                pathname: '/results',
                state: {
                    preference : res.data,
                    fromPage : "MyMatch"                                   
                }
              })
            
        }) .catch((error) => {
            console.log(error);
            toast.error("Server Error Occurred. Please try again!", 
                {
                    position:toast.POSITION.TOP_CENTER,
                    hideProgressBar:true,
                    autoClose:3000,
                    testId:20
                });
        
        });
    }
        
    profileClick(profileId) {

        if (sessionStorage.getItem(Constant.USER_ID_TOKEN) != null) {

            axios.get(ApiConstant.USER_API+profileId+ "?userId="+sessionStorage.getItem(Constant.USER_PROFILE_ID))
                .then(res => {
                    console.log(res);                    
                    this.props.history.push({
                        pathname: '/viewProfile',
                        state: {
                            profile:res.data
                        }
                    });
            });
        } 
    }

    blockProfile(profileId) {
        axios.put(ApiConstant.BLOCKED_PROFILE+sessionStorage.getItem(Constant.USER_PROFILE_ID)+"?blockedProfileId="+profileId, {                
        })
        .then((res) => {
            this.loadMyMatches();
            toast.success("Profile -"+profileId+" is blocked successfully.", 
            {
                position:toast.POSITION.TOP_CENTER,
                hideProgressBar:true,
                autoClose:3000,
                testId:20
            });                
        }) .catch((error) => {
            console.log(error);     
            toast.error("Server Error Occurred. Please try again!", 
            {
                position:toast.POSITION.TOP_CENTER,
                hideProgressBar:true,
                autoClose:3000,
                testId:20
            });
        });
    }

    sendInterest(profileId) {
        axios.put(ApiConstant.BLOCKED_PROFILE+sessionStorage.getItem(Constant.USER_PROFILE_ID)+"?blockedProfileId="+profileId, {                
        })
        .then((res) => {
            this.loadMyMatches();
            toast.success("Profile -"+profileId+" is blocked successfully.", 
            {
                position:toast.POSITION.TOP_CENTER,
                hideProgressBar:true,
                autoClose:3000,
                testId:20
            });                
        }) .catch((error) => {
            console.log(error);     
            toast.error("Server Error Occurred. Please try again!", 
            {
                position:toast.POSITION.TOP_CENTER,
                hideProgressBar:true,
                autoClose:3000,
                testId:20
            });
        });
    }

    shortlistProfile(profileId) {
        axios.put(ApiConstant.SHORT_LISTED_PROFILE+sessionStorage.getItem(Constant.USER_PROFILE_ID)+"?shortListedProfileId="+profileId, {                
        })
        .then((res) => {
            this.loadMyMatches();
            toast.success("Profile -"+profileId+" is shortlisted successfully.", 
            {
                position:toast.POSITION.TOP_CENTER,
                hideProgressBar:true,
                autoClose:3000,
                testId:20
            });                
        }) .catch((error) => {
            console.log(error);     
            toast.error("Server Error Occurred. Please try again!", 
            {
                position:toast.POSITION.TOP_CENTER,
                hideProgressBar:true,
                autoClose:3000,
                testId:20
            });
        });
    }

    profileCloseHandler() {
        this.setState({
            profileClicked:false
        });
    }

    profileClosed() {
        this.setState({
            profileClicked:false
        });
    }

    goToPreferences() {
        const profileId = sessionStorage.getItem("profileId");
        console.log("profileId:"+profileId)
        axios.get(ApiConstant.PREFERENCE_API+profileId, {                
        })
        .then((res) => {
            console.log(res);
            console.log(res.data);            
            this.props.history.push({
                pathname: '/preference',
                state: {
                    preference : res.data                                    
                }
              })
            
        }) .catch((error) => {
            console.log(error);
            toast.error("Server Error Occurred. Please try again!!", 
                {
                    position:toast.POSITION.TOP_CENTER,
                    hideProgressBar:true,
                    autoClose:3000,
                    testId:20
                });
        
        });
    }

    loadMyMatches() {       

        var headers = {
            'Content-Type': 'application/json',
            'Authorization': sessionStorage.getItem(Constant.USER_ID_TOKEN)
        }

        axios.get(ApiConstant.USER_SEARCH_API+ sessionStorage.getItem(Constant.USER_PROFILE_ID)+"/preference/matches",
        {               
            headers:headers
        }) .then((res) => {
           // Update User Detail to session
           console.log(res);
           const totalMatches = parseInt(res.headers["x-total-docs"]); 
           if(res.data.prefernceExists === true) {                
                this.displayResults(res.data.userList, totalMatches);
           } else {
                this.setState({
                    totalMatches:totalMatches,
                    prefExists:res.data.prefernceExists
                });
           }
            
           
         
        }).catch((err) => {
            console.log(err);
        });  
    }

    componentDidMount() {
       this.loadMyMatches();
    }

    displayResults(profileData, totalMatches) {    

        let i = 0;

        let profiles = profileData.map((data) => {
            { i = i + 1}
            return (
                <div key={"myMatchSummaryParent"+ i}>                
                    <MyMatchProfileSummary 
                        id={data.id}
                        age={data.age}
                        firstName = {data.firstName}
                        lastName = {data.lastName}                        
                        email = {data.email}
                        thumbImage = {data.thumbImage}
                        profileClick = {this.profileClick}
                        sendInterest = {this.sendInterest}
                        blockProfile = {this.blockProfile}
                        shortlistProfile = {this.shortlistProfile}
                        gender = {data.gender}
                        bDate = {formatDate(data.bDay, data.bMonth, data.bYear)}
                        education = {data.education}
                        city = {data.city}
                    />
                   { 
                       ((i < 3) && <hr style={{width:'90%'}} /> )                 
                    }                   
                </div>
            );

            
            
        });

        this.setState({
            totalMatches:totalMatches,
            content:profiles
        });
    }

    render() {     
        
        return(
            <div className="myMatchContainer">               
               <div className="header2"> 
                    <div className="vs5px"/>
                    <b>My Matches ({this.state.totalMatches})</b>&nbsp;&nbsp;
                        {(this.state.totalMatches > 3) && 
                            <a href="#" onClick={this.viewAllMyMatches} className="hyperlinkHeader">View All
                            </a>
                        }
                    </div>
               <div className="hs10" />
                    {this.state.prefExists && (this.state.totalMatches > 0) && 
                        <div>
                            {this.state.content}
                        </div>    
                    }
                    {(this.state.prefExists === false) && 
                       <div style={{textAlign:'left',paddingLeft:'5px'}}>
                            <label className="text14pxNormal">
                                You don't have updated your partner preferences. Please update your partner preferences&nbsp;  
                                <a href="#" onClick={this.goToPreferences}> here</a>.
                            </label>
                        </div>
                    }
                    {(this.state.prefExists === true) && (this.state.totalMatches === 0) &&
                       <div style={{textAlign:'left',paddingLeft:'5px'}}>
                            <label className="text14pxNormal">
                                No profiles available matching your prferences. Please check and update your proferences&nbsp;   
                                <a href="#" onClick={this.goToPreferences}> here</a>.
                            </label>
                        </div>
                    }
               <div className="hs10" />
            </div>
        ) ;
    }

}

export default withRouter(MyMatches);