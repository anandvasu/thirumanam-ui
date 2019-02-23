import React, {Component} from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import ApiConstant from '../utils/ApiConstant';
import '../profile/MyMatchProfileSummary.css';
import MyMatchProfileSummary from '../../components/profile/MyMatchProfileSummary';
import Modal from '../modal/Modal';
import Profile from './profile/Profile';
import {formatDate} from '../../components/utils/Util';
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

        this.state = {
            profiles:[],
            totalMatches:0,
            profileClicked:false,
            profile:''
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
        axios.get(ApiConstant.USER_API+ sessionStorage.getItem("profileId")+"/preference/matches",
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
                    <MyMatchProfileSummary 
                        id={data.id}
                        age={data.age}
                        firstName = {data.firstName}
                        lastName = {data.lastName}                        
                        email = {data.email}
                        thumbImage = {data.image}
                        profileClick = {this.profileClick}
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
                    <b>My Matches ({this.state.totalMatches})</b>&nbsp;&nbsp;<a href="#" onClick={this.viewAllMyMatches} className="hyperlinkHeader">View All</a>
                    </div>
               <div className="hs10" />
               {this.state.profiles}
               <div className="hs10" />
            </div>
        ) ;
    }

}

export default withRouter(MyMatches);