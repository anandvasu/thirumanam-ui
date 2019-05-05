import React, {Component} from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import ApiConstant from '../utils/ApiConstant';
import '../profile/MyMatchProfileSummary.css';
import {
    withRouter
  } from 'react-router-dom';
import MyMatchProfileSummary from '../profile/MyMatchProfileSummary';

class VisitedProfilesMini extends Component {

    constructor(props) {
        super(props);
        
        this.viewAllMyMatches = this.viewAllMyMatches.bind(this);  

        this.state = {
            content:[],
            totalProfiles:0,
            profileClicked:false,
            profile:''
        }
    }

    viewAllMyMatches() {
        this.props.history.push({
            pathname:"/visitedProfilesHome"
        });
    }

    componentDidMount() {
        axios.get(ApiConstant.VISITED_PROFILE_LIST+ sessionStorage.getItem("profileId")+"?pageNo=0",
       // axios.get(ApiConstant.VISITED_PROFILE_LIST+ "CM984209?pageNo=1",
            {                    
            }) .then((res) => {
               // Update User Detail to session
               console.log(res);
               const totalMatches = parseInt(res.headers["x-total-docs"]); 
               this.setState({
                    totalProfiles:totalMatches
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
                        thumbImage = {data.thumbImage}
                        profileClick = {this.props.profileClick}
                        gender = {data.gender}
                        education = {data.education}
                        city = {data.city}
                        bDate = "12/12/1990"
                    />
                   { 
                       ((i < 3) && <hr style={{width:'90%'}} /> )                 
                    }                   
                </div>
            );

            
            
        });

        this.setState({content:profiles});
    }

    render() {     
        
        return(
            <div className="myMatchContainer">               
               <div className="header2" style={{paddingTop:'5px'}}> 
                    <div className="vs5px"/>
        <b>People Viewed Your Profile ({this.state.totalProfiles})</b>&nbsp;&nbsp; {this.state.totalProfiles > 3 && <a href="#" onClick={this.viewAllMyMatches} className="hyperlinkHeader">View All</a> }
                    </div>
               <div className="hs10" />
               {(this.state.totalProfiles > 0 ) && this.state.content}
               {(this.state.totalProfiles === 0 ) && 
                    <div style={{textAlign:'left',paddingLeft:'5px'}}>
                        <label className="text14pxNormal">
                            Members viewed you profile will be listed in this section. Currenlty, No one visited profiles.
                        </label>
                    </div>
               }
               <div className="hs10" />
            </div>
        ) ;
    }

}

export default withRouter(VisitedProfilesMini);