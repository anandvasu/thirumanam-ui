import React, {Component} from 'react';

import './Profile.css';
import {getDropDownLabel} from '../../utils/Util';
import DropDownConstant from '../../utils/DropDownConstant';
import heartImage from '../../../assets/images/heart.png';
import axios from 'axios';
import ApiConstant from '../../../components/utils/ApiConstant';
import Constant from '../../../components/utils/Constant';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Profile extends Component {

    constructor () {
        super();
        this.sendInterest = this.sendInterest.bind(this);
    }

    sendInterest(event) {     
        event.preventDefault();   
        axios.post(ApiConstant.MESSAGE_API+sessionStorage.getItem(Constant.USER_PROFILE_ID),
        { 
            partnerMatrimonyId: this.props.profile.id
        }) .then((res) => {
            console.log(res);
                       
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

    render () {

        return (
            <div className="profileParentContainer">   
                <div className="hs20" />
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
                                        <label> {this.props.profile.lastName} </label>
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
                                    <div className="profileField">
                                        <label> {this.props.profile.height} </label>
                                    </div>     
                                </div>  
                                <div className="profileFieldContainer">
                                    <div className="profileLabel">
                                        <label>Weight </label>
                                    </div>
                                    <div className="profileCenter">
                                        <label> : </label>
                                    </div>
                                    <div className="profileField">
                                        <label> {this.props.profile.weight} </label>
                                    </div>     
                                </div> 
                                <div>
                                    <div className="profilRight100Per"> 
                                        <div className="inlineBlock" style={{width:'25px',height:'25px',float: 'left'}}>
                                            <img src={heartImage} alt="Not Available" style={{width:'25px',height:'25px'}} />
                                        </div>
                                        <div className="inlineBlock" style={{height:'30px',width:'100px',float: 'left',paddingTop:'3px'}}>
                                            <label><b> <a href="#" onClick={this.sendInterest}><b>Send Interest</b></a></b></label>                            
                                        </div>
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
                                        <b> <label> {this.props.profile.phone} </label>  </b>
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
                                        <b> <label> {this.props.profile.email} </label>  </b>
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
                                        <b><label>{getDropDownLabel(this.props.profile.religion, DropDownConstant.regilionValues)}</label></b>
                                    </div>      
                                </div> 
                                <div className="profileFieldContainer">
                                    <div className="profileLabel">
                                        <label>Caste </label>
                                    </div>
                                    <div className="profileCenter">
                                        <label> : </label>
                                    </div>
                                    <div className="profileField">
                                        <b><label> </label></b>
                                    </div>      
                                </div>    
                                <div className="profileFieldContainer">
                                    <div className="profileLabel">
                                        <label>Sub Caste </label>
                                    </div>
                                    <div className="profileCenter">
                                        <label> : </label>
                                    </div>
                                    <div className="profileField">
                                        <b> <label>  </label>  </b>
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
                                        <b> <label>{getDropDownLabel(this.props.profile.gothram, DropDownConstant.gothramValues)} </label>  </b>
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
                                        <b> <label> </label>  </b>
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
                                        <label> {getDropDownLabel(this.props.profile.country,DropDownConstant.countries)} </label>
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
                                        <label> {getDropDownLabel(this.props.profile.pstate,DropDownConstant.indiaStates)} </label>
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
                                        <label> {getDropDownLabel(this.props.profile.district, DropDownConstant.tamilnaduDistrict)} </label>
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
                            <label> {this.props.profile.income} </label>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="hs10" />
            </div>
        );
    }
}

export default Profile;