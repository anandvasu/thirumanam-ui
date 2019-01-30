import React, {Component} from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import ApiConstant from '../utils/ApiConstant';
import '../profile/MyMatchProfileSummary.css';
import MyMatchProfileSummary from '../../components/profile/MyMatchProfileSummary'

class MyMatches extends Component {

    constructor(props) {
        super(props);

        this.state = {
            profiles:[],
            totalMatches:0
        }
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
               <div className="header2"> <b>My Matches ({this.state.totalMatches})</b> <b>View All Matches</b></div>
               <div className="hs10" />
               {this.state.profiles}
               <div className="hs10" />
            </div>
        ) ;
    }

}

export default MyMatches;