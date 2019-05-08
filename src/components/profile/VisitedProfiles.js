import React, {Component} from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import prevImage from '../../assets/images/prev.png';
import nextImage from '../../assets/images/next.png';
import ApiConstant from '../utils/ApiConstant';
import '../profile/MyMatchProfileSummary.css';
import {formatDate} from '../../components/utils/Util';
import {
    withRouter
  } from 'react-router-dom';
import ProfileSummary from './ProfileSummary';
  
class VisitedProfiles extends Component {

    constructor(props) {
        super(props);

        this.profileClick = this.profileClick.bind(this);     
        this.unBlockProfile = this.unBlockProfile.bind(this);  
        this.loadVisitedProfiles = this.loadVisitedProfiles.bind(this);  
        this.nextClick = this.nextClick.bind(this);  
        this.prevClick = this.prevClick.bind(this);  

        this.state = {
            profiles:[],
            totalMatches:0,
            pageNo:1

        }
    }

    nextClick() {
        const pageNo = this.state.pageNo;
        if((pageNo * 10) < this.state.totalMatches) {
            this.setState({
                pageNo:pageNo + 1
            });
            this.loadVisitedProfiles(pageNo+1);
        }
    }

    prevClick() {
        const pageNo = this.state.pageNo;
        if(pageNo > 1) {
            this.setState({
                pageNo:pageNo-1
            });
            this.loadVisitedProfiles(pageNo-1);
        }
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

    loadVisitedProfiles(pageNumber) {
        axios.get(ApiConstant.VISITED_PROFILE_LIST+ sessionStorage.getItem("profileId")+"?pageNo="+pageNumber,
            {                    
            }) .then((res) => {
               // Update User Detail to session
               console.log(res);
               const totalMatches = res.headers["x-total-docs"]; 
               this.setState({
                totalMatches:totalMatches
               })
               this.displayResults(res.data);
             
            }).catch((err) => {
                console.log(err);
            });  
    }

    componentDidMount() {
        this.loadVisitedProfiles(1);
    }

    displayResults(profileData) {    


        let profiles = profileData.map((data, i) => {
            return (
                <div key={"blockedProfileParent"+ i}>                
                    <ProfileSummary 
                        id={data.id}
                        age={data.age}
                        firstName = {data.firstName}
                        lastName = {data.lastName}                        
                        email = {data.email}
                        thumbImage = {data.image}
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
                    <div className="inlineBlock"><b>People Visited Your Profiles ({this.state.totalMatches})</b>&nbsp;&nbsp;</div>
                    <div className="inlineBlock" style={{float:'right'}}>
                        <img className="prevNextImage" src={prevImage} onClick={this.prevClick}/> 
                        <img className="prevNextImage" src={prevImage} src={nextImage} onClick={this.nextClick}/> 
                        </div>
                </div>
               <div className="hs10" />
               {this.state.profiles}
               <div className="hs20" />
            </div>            
        ) ;
    }

}

export default withRouter(VisitedProfiles);