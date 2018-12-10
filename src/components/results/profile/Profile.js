import React, {Component} from 'react';

import './Profile.css';

class Profile extends Component {

    constructor () {
        super();
        this.closeButtonHandler = this.closeButtonHandler.bind(this);
    }

    closeButtonHandler() {
        this.props.closeProfile();
    }

    render () {
        return (
            <div className="profileParentContainer"> 
            
                 <div className="profileTopBar">
                        <div className="profileHeading">Profile Detail</div>
                        <div className="closeButtonDiv"> 
                            <button className="closeButton" onClick={this.closeButtonHandler}>X</button>
                        </div>
                </div>

                <div className="hs20" />

                <div className="pContainer">                    
                    <div className="profileImage">
                        <img src={"data:image/jpeg;base64,"+this.props.profile.image} alt="Not Available" width="400px" height="500px"></img>&nbsp;&nbsp;&nbsp;
                    </div> 
                    <div className="profileDetail">
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
                        <div>
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
                                    <label> {this.props.profile.country} </label>
                                </div>  
                                <div className="profileLabel">
                                    <label> State </label>
                                </div>
                                <div className="profileCenter">
                                    <label> : </label>
                                </div>
                                <div className="profileField">
                                    <label> {this.props.profile.pstate} </label>
                                </div> 

                                <div className="profileLabel">
                                    <label> District </label>
                                </div>
                                <div className="profileCenter">
                                    <label> : </label>
                                </div>
                                <div className="profileField">
                                    <label> {this.props.profile.district} </label>
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
                                    <label> {this.props.profile.education} </label>
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
                                    <label> {this.props.profile.employment} </label>
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
            </div>
        );
    }
}

export default Profile;