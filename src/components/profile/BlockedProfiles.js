import React, {Component} from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import prevImage from '../../assets/images/prev.png';
import nextImage from '../../assets/images/next.png';
import ApiConstant from '../utils/ApiConstant';
import '../profile/MyMatchProfileSummary.css';
import BlockedProfile from './BlockedProfile';
import {formatDate} from '../../components/utils/Util';
import {
    withRouter
  } from 'react-router-dom';
  
class BlockedProfiles extends Component {

    constructor(props) {
        super(props);

        this.profileClick = this.profileClick.bind(this);     
        this.viewAllMyMatches = this.viewAllMyMatches.bind(this);  
        this.unBlockProfile = this.unBlockProfile.bind(this);  
        this.loadBlockedProfiles = this.loadBlockedProfiles.bind(this);  
        this.nextClick = this.nextClick.bind(this);  
        this.prevClick = this.prevClick.bind(this);  

        this.state = {
            profiles:[],
            totalProfiles:0,
            pageNo:1

        }
    }

    nextClick() {
        const pageNo = this.state.pageNo;
        if((pageNo * 10) < this.state.totalProfiles) {
            this.setState({
                pageNo:pageNo + 1
            });
            this.loadBlockedProfiles(pageNo+1);
        }
    }

    prevClick() {
        const pageNo = this.state.pageNo;
        if(pageNo > 1) {
            this.setState({
                pageNo:pageNo-1
            });
            this.loadBlockedProfiles(pageNo-1);
        }
    }

    viewAllMyMatches() {
        axios.get(ApiConstant.PREFERENCE_API+sessionStorage.getItem("profileId"), {                
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

        if (sessionStorage.getItem("userSession") != null) {

            axios.get(ApiConstant.USER_API+profileId+ "?userId="+sessionStorage.getItem("profileId"))
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

    unBlockProfile(profileId) {
        axios.put(ApiConstant.UN_BLOCK_PROFILE+sessionStorage.getItem("profileId")+"?unBlockProfileId="+profileId, {                
        })
        .then((res) => {
            this.loadBlockedProfiles(this.state.pageNo);
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

    loadBlockedProfiles(pageNumber) {
        axios.get(ApiConstant.BLOCKED_PROFILE_LIST+ sessionStorage.getItem("profileId")+"?pageNo="+pageNumber,
            {                    
            }) .then((res) => {
               // Update User Detail to session
               console.log(res);
               const totalDocs = parseInt(res.headers["x-total-docs"]); 
               this.setState({
                    totalProfiles:totalDocs
               })
               this.displayResults(res.data);
             
            }).catch((err) => {
                console.log(err);
            });  
    }

    componentDidMount() {
        this.loadBlockedProfiles(1);
    }

    displayResults(profileData) {    


        let profiles = profileData.map((data, i) => {
            return (
                <div key={"blockedProfileParent"+ i}>                
                    <BlockedProfile 
                        id={data.id}
                        age={data.age}
                        firstName = {data.firstName}
                        lastName = {data.lastName}                        
                        email = {data.email}
                        thumbImage = {data.thumbImage}
                        profileClick = {this.profileClick}
                        unBlockProfile = {this.unBlockProfile}
                        gender = {data.gender}
                        bDate = {formatDate(data.bDay, data.bMonth, data.bYear)}
                        education = {data.education}
                        city = {data.city}
                    />
                   { 
                       ((i < 10) && <hr style={{width:'90%'}} /> )                 
                    }                   
                </div>
            );

            
            
        });

        this.setState({profiles:profiles});
    }

    render() {     
        
        return(
            <div className="myMatchContainer">               
               <div className="header2"> 
                    <div className="vs5px inlineBlock"/>
                    <div className="inlineBlock"><b>Blocked Profiles ({this.state.totalProfiles})</b>&nbsp;&nbsp;</div>
                    {(this.state.totalProfiles > 10 ) &&
                        <div className="inlineBlock" style={{float:'right'}}>
                            <img className="prevNextImage" src={prevImage} onClick={this.prevClick}/> 
                            <img className="prevNextImage" src={prevImage} src={nextImage} onClick={this.nextClick}/> 
                        </div>
                    }
                </div>
               <div className="hs10" />
               {(this.state.totalProfiles > 0 ) && this.state.profiles}
               {(this.state.totalProfiles === 0 ) && 
                    <div style={{textAlign:'left',paddingLeft:'5px'}}>
                        <label className="text14pxNormal">
                            Profiles blocked by you will be listed in this section. Currenlty, you have not blocked any profile.
                        </label>
                    </div>
               }
               <div className="hs20" />
            </div>            
        ) ;
    }

}

export default withRouter(BlockedProfiles);