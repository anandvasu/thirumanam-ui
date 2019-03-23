import React, {Component} from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import prevImage from '../../assets/images/prev.png';
import nextImage from '../../assets/images/next.png';
import ApiConstant from '../utils/ApiConstant';
import MessageProfileSummary from './MessageProfileSummary';
import {formatDate} from '../utils/Util';
  
class MessageProfiles extends Component {

    constructor(props) {
        super(props);

        this.profileClick = this.profileClick.bind(this);     
        this.unBlockProfile = this.unBlockProfile.bind(this);  
        this.loadMessageProfiles = this.loadMessageProfiles.bind(this);  
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
            this.loadMessageProfiles(pageNo+1);
        }
    }

    prevClick() {
        const pageNo = this.state.pageNo;
        if(pageNo > 1) {
            this.setState({
                pageNo:pageNo-1
            });
            this.loadMessageProfiles(pageNo-1);
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
            this.loadMessageProfiles(this.state.pageNo);
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

    loadMessageProfiles(pageNumber, status) {
        axios.get(ApiConstant.MESSAGE_API+ sessionStorage.getItem("profileId")+"/inbox?pageNo="+pageNumber+"&status="+status,
            {                    
            }) .then((res) => {
               // Update User Detail to session
               console.log(res);
               const totalProfiles = res.headers["x-total-docs"]; 
               this.setState({
                    totalProfiles:parseInt(totalProfiles)
               })
               this.displayResults(res.data);
             
            }).catch((err) => {
                console.log(err);
            });  
    }

    componentDidMount() {
        this.loadMessageProfiles(1, this.props.status);
    }

    displayResults(profileData) {    


        let profiles = profileData.map((data, i) => {
            return (
                <div key={"blockedProfileParent"+ i}>                
                    <MessageProfileSummary 
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
                </div>
            );

            
            
        });

        this.setState({profiles:profiles});
    }

    render() {     
        
        return(
            <div style={{width:'100%'}}>    
            { (this.state.totalProfiles > 10) &&
               <div style={{float:'right'}}>
                        <img className="prevNextImage" src={prevImage} onClick={this.prevClick}/> 
                        <img className="prevNextImage" src={prevImage} src={nextImage} onClick={this.nextClick}/> 
                </div>
            }
               <div className="hs20" />
               {this.state.profiles}
               <div className="hs20" />
               {                   
                   (this.state.totalProfiles === 0 ) && 
                   <div>
                        <label><b>Currently there is no communication in this folder.</b></label>
                   </div>
               }
            </div>            
        ) ;
    }

}

export default MessageProfiles;