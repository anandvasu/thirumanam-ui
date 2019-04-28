import React, {Component} from 'react';

import './Profile.css';
import {getDropDownLabel,formatDate} from '../../utils/Util';
import DropDownConstant from '../../utils/DropDownConstant';
import ReligionDropdownConsts from '../../utils/ReligionDropdownConsts';
import LocationDropdownConsts from '../../utils/LocationDropdownConsts';
import heartImage from '../../../assets/images/heart.png';
import axios from 'axios';
import ApiConstant from '../../../components/utils/ApiConstant';
import Constant from '../../../components/utils/Constant';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import addImage from '../../../assets/images/add.png';
import ProfileIdSearch from '../../search/ProfileIdSearch';
import DisplayMessage from '../../utils/DisplayMessage';
import Modal from '../../modal/Modal';

class Profile extends Component {

    constructor () {
        super();
        this.sendInterest = this.sendInterest.bind(this);
        this.shortlist = this.shortlist.bind(this);        
        this.closeMessageHandler = this.closeMessageHandler.bind(this);   
        this.uploadProfilePhoto = this.uploadProfilePhoto.bind(this);
        
        this.state = {
            modelDisplay:false
        }
    }

    closeMessageHandler() {
        this.setState({
            modelDisplay:false
        });
    }

    uploadProfilePhoto(event) {
        event.preventDefault();
        this.props.history.push({
            pathname: '/uploadProfilePhoto',
            state:{
                fromPage : 'E',
            }
        });
    }

    sendInterest(event) {     
        event.preventDefault();   
        axios.post(ApiConstant.MESSAGE_API+sessionStorage.getItem(Constant.USER_PROFILE_ID),
        { 
            partnerMatrimonyId: this.props.profile.id
        }) .then((res) => {
            console.log(res);
            this.setState({
                modelDisplay:true
            })
                       
        }) .catch((error) => {
            console.log(error);
            if (! toast.isActive(this.toastId)) {
                toast.error(error.response.data.message, 
                    {
                        position:toast.POSITION.TOP_CENTER,
                        hideProgressBar:true,
                        autoClose:3000,
                        toastId:Constant.toastIdErr
                    });
            }                
        });       
    }

    shortlist(event) {     
        event.preventDefault();   
        axios.put(ApiConstant.SHORT_LISTED_PROFILE+sessionStorage.getItem(Constant.USER_PROFILE_ID)+"?shortListedProfileId="+this.props.profile.id, {                
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

    render () {

        return (
            <div className="profileParentContainer">                   
                <Modal show={this.state.modelDisplay}
                        displayClose = "block"
                        className="DisplayMessageModal"
                        modalClosed={this.closeMessageHandler}>  
                        <div className="displayMessageContainer">                           
                            <DisplayMessage 
                                message = "Interest has been sent."
                                closeModel = {this.closeMessageHandler}
                                uploadProfilePhoto = {this.uploadProfilePhoto}
                            /> 
                         </div> 
                 </Modal>
                <div className="hs20" />
                <div className="profileParentLeft">
                <div className="sectionContainer"> 
                    <div className="profileRowContainer">
                        <div className="hs10" />
                        <div style={{width:'100%'}}>
                            <div className= "profileHeading" style={{textAlign:'left'}}>
                                <label> 
                                    {this.props.profile.firstName}, {this.props.profile.lastName}
                                </label>
                            </div>
                            <div className= "profileHeading" style={{textAlign:'right'}}>
                                <label> 
                                    ID:{this.props.profile.id}
                                </label>
                            </div>
                        </div>
                        <div className="hs20" />
                        <div>
                            <div className="profileLeftConNoborder">             
                                <div className="profileImage">
                                    <img src={"data:image/jpeg;base64,"+this.props.profile.image} alt="Not Available" width="300px" height="400px"></img>&nbsp;&nbsp;&nbsp;
                                </div> 
                            </div>
                            <div className="vs20" />
                            <div className="profilRightConNoborder">
                                <div className="profileFieldContainer">
                                    <div className="profileLabel">
                                        <label>First Name </label>
                                    </div>
                                    <div className="profileCenter">
                                        <label> : </label>
                                    </div>
                                    <div className="profileField">
                                        <label> {this.props.profile.firstName} </label>
                                    </div>     
                                </div> 
                                <div className="profileFieldContainer">
                                    <div className="profileLabel">
                                        <label>Last Name </label>
                                    </div>
                                    <div className="profileCenter">
                                        <label> : </label>
                                    </div>
                                    <div className="profileField">
                                        <label> {this.props.profile.lastName} </label>
                                    </div>     
                                </div>
                                <div className="profileFieldContainer">
                                    <div className="profileLabel">
                                        <label>Birth Date </label>
                                    </div>
                                    <div className="profileCenter">
                                        <label> : </label>
                                    </div>
                                    <div className="profileField">
                                        <label> {formatDate(this.props.profile.bDay, this.props.profile.bMonth, this.props.profile.bYear)} </label>
                                    </div>     
                                </div>
                                <div className="profileFieldContainer">
                                    <div className="profileLabel">
                                            <label>Age </label>
                                    </div>
                                    <div className="profileCenter">
                                        <label> : </label>
                                    </div>
                                    <div className="profileField">
                                        <label> {this.props.profile.age} </label>
                                    </div>     
                                </div>  
                                <div className="profileFieldContainer">
                                    <div className="profileLabel">
                                        <label>Height </label>
                                    </div>
                                    <div className="profileCenter">
                                        <label> : </label>
                                    </div>
                                    {(this.props.profile.heightInch === 0) && 
                                        <div className="profileField">
                                            <label> {this.props.profile.heightCm} cm</label>
                                        </div> 
                                    }   
                                     {(this.props.profile.heightCm === 0) && 
                                        <div className="profileField">
                                            <label> {this.props.profile.heightInch} inch</label>
                                        </div> 
                                    }  
                                </div>  
                                <div className="profileFieldContainer">
                                    <div className="profileLabel">
                                        <label>Weight </label>
                                    </div>
                                    <div className="profileCenter">
                                        <label> : </label>
                                    </div>
                                    <div className="profileField">
                                        <label> {this.props.profile.weight} Kg</label>
                                    </div>     
                                </div> 
                                <div className="vs30" />
                                <div>
                                { (this.props.profile.interestSent === false) &&    
                                    <div className="profilRight100Per"> 
                                        <div className="inlineBlock" style={{width:'25px',height:'25px',float: 'left'}}>
                                            <img src={heartImage} alt="Not Available" style={{width:'25px',height:'25px'}} />
                                        </div>
                                        <div className="inlineBlock" style={{height:'30px',width:'100px',float: 'left',paddingTop:'3px'}}>
                                            <label><b> <a href="#" onClick={this.sendInterest}><b>Send Interest</b></a></b></label>                            
                                        </div>
                                    </div>
                                }
                                { (this.props.profile.interestSent === true) &&    
                                    <div className="profilRight100Per"> 
                                        <div className="inlineBlock" style={{width:'25px',height:'25px',float: 'left'}}>
                                            <img src={heartImage} alt="Not Available" style={{width:'25px',height:'25px'}} />
                                        </div>
                                        <div className="inlineBlock" style={{height:'30px',width:'100px',float: 'left',paddingTop:'3px'}}>
                                            <label><b> Interest Sent Already</b></label>                            
                                        </div>
                                    </div>
                                }
                                </div>
                                <div>
                                    <div className="inlineBlock" style={{width:'25px',height:'25px',float: 'left'}}>
                                        <img src={addImage} alt="Not Available"  style={{width:'25px',height:'25px'}}/>
                                    </div>
                                    <div className="inlineBlock" style={{height:'30px',width:'90px',float: 'left',paddingTop:'3px'}}>
                                        <label><b> <a href="#" onClick={this.shortlist}><b>Shortlist</b></a></b></label>   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>   
                </div>
                <div className="vs30" />
                <div className="sectionContainer">
                    <div className="profileRowContainer">
                        <div className="profileSectionHeading">
                            <label>Contact Information</label>
                            <hr />
                        </div>
                        <div>      
                            <div className="profileLeftConNoborder"> 
                                <div className="profileFieldContainer">
                                    <div className="profileLabel">
                                        <label>Phone Number </label>
                                    </div>
                                    <div className="profileCenter">
                                        <label> : </label>
                                    </div>
                                    <div className="profileField">
                                       <label> {this.props.profile.phonenumber} </label>
                                    </div>   
                                </div>   
                            </div>
                            <div className="profilRightConNoborder"> 
                                <div className="profileFieldContainer">
                                    <div className="profileLabel">
                                        <label>Email </label>
                                    </div>
                                    <div className="profileCenter">
                                        <label> : </label>
                                    </div>
                                    <div className="profileField">
                                        <label> {this.props.profile.email} </label>
                                    </div>      
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
                <div className="vs30" />
                <div className="sectionContainer">  
                    <div className="profileRowContainer">
                        <div className="profileSectionHeading">
                            <label>Religion Information</label>
                            <hr />
                        </div>
                        <div>      
                            <div className="profileLeftConNoborder"> 
                                <div className="profileFieldContainer">
                                    <div className="profileLabel">
                                        <label>Religion </label>
                                    </div>
                                    <div className="profileCenter">
                                        <label> : </label>
                                    </div>
                                    <div className="profileField">
                                       <label>{getDropDownLabel(this.props.profile.religion, ReligionDropdownConsts.regilionValues)}</label>
                                    </div>      
                                </div> 
                                <div className="profileFieldContainer">
                                    <div className="profileLabel">
                                        <label>Caste </label>
                                    </div>
                                    <div className="profileCenter">
                                        <label> : </label>
                                    </div>
                                    { (this.props.profile.caste !==0) &&
                                        <div className="profileField">
                                           <label>{getDropDownLabel(this.props.profile.caste, ReligionDropdownConsts.hinduCasteValues)}</label>
                                        </div>  
                                    }  
                                    { (this.props.profile.caste ===0) &&
                                        <div className="profileField">
                                           <label>{this.props.profile.otherCaste}</label>
                                        </div>  
                                    }   
                                </div>    
                                <div className="profileFieldContainer">
                                    <div className="profileLabel">
                                        <label>Sub Caste </label>
                                    </div>
                                    <div className="profileCenter">
                                        <label> : </label>
                                    </div>
                                    <div className="profileField">
                                        <label>{this.props.profile.subcaste}</label>
                                    </div>      
                                </div>   
                            </div>
                            <div className="profilRightConNoborder"> 
                                <div className="profileFieldContainer">
                                    <div className="profileLabel">
                                        <label>Gothra (m) </label>
                                    </div>
                                    <div className="profileCenter">
                                        <label> : </label>
                                    </div>
                                    <div className="profileField">
                                        <label>{getDropDownLabel(this.props.profile.gothram, ReligionDropdownConsts.gothramValues)} </label> 
                                    </div>      
                                </div>   
                                <div className="profileFieldContainer">
                                    <div className="profileLabel">
                                        <label>Dhosham </label>
                                    </div>
                                    <div className="profileCenter">
                                        <label> : </label>
                                    </div>
                                    <div className="profileField">
                                        <label>{getDropDownLabel(this.props.profile.dhosham, ReligionDropdownConsts.dhoshamValues)}</label>
                                    </div>      
                                </div>   
                            </div>
                        </div>
                    </div>
                    
                    <div className="profileRowContainer">
                        <div className="profileSectionHeading">
                            <label>Location Information</label>
                            <hr />
                        </div>
                        <div>      
                            <div className="profileLeftConNoborder">   
                                <div className="profileFieldContainer">             
                                    <div className="profileLabel">
                                        <label> Country </label>
                                    </div>
                                    <div className="profileCenter">
                                        <label> : </label>
                                    </div>
                                    
                                    <div className="profileField">
                                        <label> {getDropDownLabel(this.props.profile.country,LocationDropdownConsts.countries)} </label>
                                    </div>  
                                </div>
                                <div className="profileFieldContainer">  
                                    <div className="profileLabel">
                                        <label> State </label>
                                    </div>
                                    <div className="profileCenter">
                                        <label> : </label>
                                    </div>
                                    <div className="profileField">
                                        <label> {getDropDownLabel(this.props.profile.pstate,LocationDropdownConsts.indiaStates)} </label>
                                    </div> 
                                </div>
                            </div> 
                            <div className="profilRightConNoborder"> 
                                <div className="profileFieldContainer">  
                                    <div className="profileLabel">
                                        <label> District </label>
                                    </div>
                                    <div className="profileCenter">
                                        <label> : </label>
                                    </div>
                                    <div className="profileField">
                                        <label> {getDropDownLabel(this.props.profile.district, LocationDropdownConsts.tamilnaduDistricts)} </label>
                                    </div>
                                </div>

                                <div className="profileFieldContainer">  
                                    <div className="profileLabel">
                                        <label> City </label>
                                    </div>
                                    <div className="profileCenter">
                                        <label> : </label>
                                    </div>
                                    <div className="profileField">
                                        <label> {this.props.profile.city} </label>
                                    </div>
                                </div>
                            </div>
                        </div>                       
                    </div>     

                    <div className="profileRowContainer">
                        <div className="profileSectionHeading">
                            <label>Professional Information</label>
                            <hr />
                        </div>
                        <div>      
                            <div className="profileLeftConNoborder"> 
                                <div className="profileFieldContainer">
                                    <div className="profileLabel">
                                        <label> Education </label>
                                    </div>
                                    <div className="profileCenter">
                                        <label> : </label>
                                    </div>
                                    <div className="profileField">
                                        <label> {getDropDownLabel(this.props.profile.education, DropDownConstant.educationValues)} </label>
                                    </div> 
                                </div>

                                <div className="profileFieldContainer">
                                    <div className="profileLabel">
                                        <label> Employment </label>
                                    </div>
                                    <div className="profileCenter">
                                        <label> : </label>
                                    </div>
                                    <div className="profileField">
                                        <label> {getDropDownLabel(this.props.profile.employment, DropDownConstant.employmentValues)} </label>
                                    </div> 
                                </div>
                            </div>
                            <div className="profilRightConNoborder"> 
                                <div className="profileFieldContainer">
                                    <div className="profileLabel">
                                        <label> Income </label>
                                    </div>
                                    <div className="profileCenter">
                                        <label> : </label>
                                    </div>
                                    <div className="profileField">
                                        <label> {this.props.profile.income} </label>
                                    </div> 
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="profileRowContainer">
                        <div className="profileSectionHeading">
                            <label>Family Information</label>
                            <hr />
                        </div>
                        <div>      
                            <div className="profileLeftConNoborder"> 

                            </div>
                            <div className="profilRightConNoborder"> 
                            
                            </div>
                        </div>
                    </div>
                    <div className="vs20" />                
                    <div>
                        About:
                        <div>
                            <p>
                            <label> {this.props.profile.about} </label>
                            </p>
                        </div>
                    </div>
                </div>
                </div>
                <div className="vs30">

                </div>
                <div className="profileParentRight">
                     <ProfileIdSearch/>                    
                </div>             

                <div className="hs10" />
            </div>
        );
    }
}

export default Profile;