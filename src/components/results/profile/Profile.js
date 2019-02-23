import React, {Component} from 'react';

import './Profile.css';
import {getDropDownLabel} from '../../utils/Util';
import DropDownConstant from '../../utils/DropDownConstant';

class Profile extends Component {

    constructor () {
        super();
        this.closeButtonHandler = this.closeButtonHandler.bind(this);
    }

    closeButtonHandler() {
        this.props.closeProfile();
    }

    render () {

        const screenHeight = window.innerHeight - 120;

        return (
            <div className="profileParentContainer" style={{heigh:screenHeight}}> 
            
                 <div className="profileTopBar">
                        <div className="profileHeading">Profile Detail</div>                        
                </div>

                <div className="hs20" />

                <div className="pContainer">       
                    <div className="profileLeftConNoborder">             
                        <div className="profileImage">
                            <img src={"data:image/jpeg;base64,"+this.props.profile.image} alt="Not Available" width="400px" height="500px"></img>&nbsp;&nbsp;&nbsp;
                        </div> 
                    </div>
                    <div className="vs20" />
                    <div className="profilRightConNoborder">
                        <div className="profilRight100Per">
                            <div className="header2">
                                <label>Personal Information</label>
                            </div>
                            <div>
                                <div className="profileLabel">
                                    <label> First Name </label>
                                </div>
                                <div className="profileCenter">
                                    <label>:</label>
                                </div>
                                <div className="profileField">
                                    <label> {this.props.profile.firstName} </label>
                                </div>     
                            </div>     
                            <div>
                                <div className="profileLabel">
                                    <label> Last Name </label>
                                </div>
                                <div className="profileCenter">
                                    <label> : </label>
                                </div>
                                <div className="profileField">
                                    <label> {this.props.profile.lastName} </label>
                                </div>     
                            </div>     
                            <div>
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
                        </div>    

                        <div className="hs20" />  

                        <div className="profilRight100Per">                         
                                    <div className="header2">
                                        <label>Contact Information</label>
                                    </div>
                                    <div>
                                        <div className="profileLabel">
                                            <label>Email </label>
                                        </div>
                                        <div className="profileCenter">
                                            <label> : </label>
                                        </div>
                                        <div className="profileField">
                                            <b><label> {this.props.profile.email} </label></b>
                                        </div>      
                                    </div>    
                                    <div>
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

                        <div className="hs20" />  

                        <div className="profilRight100Per">                         
                                    <div className="header2">
                                        <label>Religion Information</label>
                                    </div>
                                    <div>
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
                                    <div>
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
                                    <div>
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
                                    <div>
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
                                    <div>
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

                <div className="pContainer">
                       <div className="profileLeftContainer">
                            <div className="header2">
                                <label>Location Information</label>
                            </div>
                            <div>
                           
                                <div className="profileLabel">
                                    <label> Country </label>
                                </div>
                                <div className="profileCenter">
                                    <label> : </label>
                                </div>

                                <div className="profileField">
                                    <label> {getDropDownLabel(this.props.profile.country,DropDownConstant.countries)} </label>
                                </div>  
                                <div className="profileLabel">
                                    <label> State </label>
                                </div>
                                <div className="profileCenter">
                                    <label> : </label>
                                </div>
                                <div className="profileField">
                                    <label> {getDropDownLabel(this.props.profile.pstate,DropDownConstant.indiaStates)} </label>
                                </div> 

                                <div className="profileLabel">
                                    <label> District </label>
                                </div>
                                <div className="profileCenter">
                                    <label> : </label>
                                </div>
                                <div className="profileField">
                                    <label> {getDropDownLabel(this.props.profile.district, DropDownConstant.tamilnaduDistrict)} </label>
                                </div>

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
                       <div className="vs20" />
                           
                       <div className="profilRightContainer">                            
                            <div className="header2">
                                <label>Professional Information</label>
                            </div>
                            <div>
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

                             <div>
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

                            <div>
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
                <div>
                    About:
                    <div>
                        <p>
                        <label> {this.props.profile.income} </label>
                        </p>
                    </div>
                </div>

                <div className="hs10" />
            </div>
        );
    }
}

export default Profile;