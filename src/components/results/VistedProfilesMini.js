import React, {Component} from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import ApiConstant from '../utils/ApiConstant';
import '../profile/MyMatchProfileSummary.css';
import Modal from '../modal/Modal';
import Profile from './profile/Profile';
import {
    withRouter
  } from 'react-router-dom';
import VisitedProfileSummary from './profile/VisitedProfileSummary';

class VisitedProfilesMini extends Component {

    constructor(props) {
        super(props);

        this.profileClick = this.profileClick.bind(this);
        this.profileClosed = this.profileClosed.bind(this);     
        this.profileCloseHandler = this.profileCloseHandler.bind(this);         
        this.viewAllMyMatches = this.viewAllMyMatches.bind(this);  

        this.state = {
            profiles:[],
            totalMatches:0,
            profileClicked:false,
            profile:''
        }
    }

    viewAllMyMatches() {
        this.props.history.push({
            pathname:"/visitedProfilesHome"
        });
    }
        
    profileClick(profileId) {

        if (sessionStorage.getItem("userSession") != null) {

            axios.get(ApiConstant.USER_API+profileId+"?userId="+sessionStorage.getItem("profileId"))
                .then(res => {
                    console.log(res);
                    this.setState(
                        {
                            profile:res.data,
                            profileClicked:true
                        }
                    );
            });
        } 
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

    componentDidMount() {
        axios.get(ApiConstant.VISITED_PROFILE_LIST+ sessionStorage.getItem("profileId")+"?pageNo=0",
       // axios.get(ApiConstant.VISITED_PROFILE_LIST+ "CM984209?pageNo=1",
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

    displayResults(profileData) {    

        let i = 0;

        let profiles = profileData.map((data) => {
            { i = i + 1}
            return (
                <div key={"myMatchSummaryParent"+ i}>                
                    <VisitedProfileSummary 
                        id={data.id}
                        age={data.age}
                        firstName = {data.firstName}
                        lastName = {data.lastName}                        
                        email = {data.email}
                        thumbImage = {data.image}
                        profileClick = {this.profileClick}
                        gender = {data.gender}
                        bDate = "12/12/1990"
                    />
                   { 
                       ((i < 3) && <hr style={{width:'90%'}} /> )                 
                    }                   
                </div>
            );

            
            
        });

        this.setState({profiles:profiles});
    }

    render() {     
        
        return(
            <div className="myMatchContainer">
                <Modal show={this.state.profileClicked} modalClosed={this.profileClosed} className="Modal">
                    <Profile
                        profile={this.state.profile}
                        closeProfile = {this.profileCloseHandler}
                    />
                </Modal> 
               <div className="header2" style={{paddingTop:'5px'}}> 
                    <div className="vs5px"/>
        <b>People Viewed Your Profile ({this.state.totalMatches})</b>&nbsp;&nbsp; {this.state.totalMatches > 3 && <a href="#" onClick={this.viewAllMyMatches} className="hyperlinkHeader">View All</a> }
                    </div>
               <div className="hs10" />
               {this.state.profiles}
               <div className="hs10" />
            </div>
        ) ;
    }

}

export default withRouter(VisitedProfilesMini);