import React, {Component} from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import prevImage from '../../assets/images/prev.png';
import nextImage from '../../assets/images/next.png';
import ApiConstant from '../utils/ApiConstant';
import Constant from '../utils/Constant';
import MessageProfileSummary from './MessageProfileSummary';
import {formatDate} from '../utils/Util';
import {
    withRouter
  } from 'react-router-dom';
  
class MessageProfiles extends Component {

    constructor(props) {
        super(props);

        this.profileClick = this.profileClick.bind(this);     
        this.updateMessageStatus = this.updateMessageStatus.bind(this);  
        this.loadMessageProfiles = this.loadMessageProfiles.bind(this);          
        this.nextClick = this.nextClick.bind(this);  
        this.prevClick = this.prevClick.bind(this);  

        this.state = {
            profiles:[],
            totalProfiles:0,
            status:"",
            pageNo:1

        }
    }

    updateMessageStatus(profileId, status) {
        axios.put(ApiConstant.MESSAGE_API+ sessionStorage.getItem(Constant.USER_PROFILE_ID),
        {                    
            partnerMatrimonyId:profileId,
            status:status
        }) .then((res) => {
           console.log(res);  
           this.loadMessageProfiles(this.state.pageNo, this.props.status);
         
        }).catch((err) => {
            console.log(err);
        }); 
    }

    profileClick(profileId) {

        if (sessionStorage.getItem(Constant.USER_PROFILE_ID) != null) {

            axios.get(ApiConstant.USER_API+profileId+"?userId="+sessionStorage.getItem(Constant.USER_PROFILE_ID))
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

    nextClick() {
        const pageNo = this.state.pageNo;
        if((pageNo * 10) < this.state.totalProfiles) {
            this.setState({
                pageNo:pageNo + 1
            });
            this.loadMessageProfiles(pageNo+1, this.props.status);
        }
    }

    prevClick() {
        const pageNo = this.state.pageNo;
        if(pageNo > 1) {
            this.setState({
                pageNo:pageNo-1
            });
            this.loadMessageProfiles(pageNo-1,this.props.status);
        }
    }        
    
    loadMessageProfiles(pageNumber, status) {
        let url ="/inbox";
        if((status === Constant.MESSAGE_STATUS_ALL) || (status === Constant.MESSAGE_STATUS_AWAITING_REPLY)) {
            url="/sentItems";
        }
        axios.get(ApiConstant.MESSAGE_API+ sessionStorage.getItem(Constant.USER_PROFILE_ID)+url+"?pageNo="+pageNumber+"&status="+status,
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
                        updateMessageStatus = {this.updateMessageStatus}
                        gender = {data.gender}
                        bDate = {formatDate(data.bDay, data.bMonth, data.bYear)}
                        education = {data.education}
                        status={this.props.status}
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

export default withRouter(MessageProfiles);