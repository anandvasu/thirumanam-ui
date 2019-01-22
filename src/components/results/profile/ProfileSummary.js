import React, {Component} from 'react';

import './ProfileSummary.css';
import defaultFImage from '../../../assets/images/defalt_female.png';
import defaultMImage from '../../../assets/images/default_male.jpg';

class ProfileSummary extends Component {


    getProfile() {

    }

    render () {

        let image;
        const preFix = (this.props.gender === "F") ? "Ms." : "Mr.";

        if (this.props.thumbImage !== null) {
            image = <img src={"data:image/jpeg;base64,"+this.props.thumbImage} alt="Not Available" width="100px" height="100px"></img>;            
        } else {
            if(this.props.gender === "F") {
                image = <img src={defaultFImage} alt="Not Available" style={{width:'80px'}} onClick={this.goToHome} /> 
            } else {
                image = <img src={defaultMImage} alt="Not Available" style={{width:'80px'}} onClick={this.goToHome} />
            }
        }

        return (
            <div className="profileContainer">
                <div className="profileSummarImage">
                    {image}
                </div> 
                <div className="vs30" />
                <div className="profileSummary">       

                    <div className="psBottom">
                        <div className="profileId">
                            <label className="profileName"> 
                                <b>{preFix} {this.props.firstName}, {this.props.lastName} </b>
                            </label>
                        </div>
                        <div className="viewProfileDiv">
                            <label>{this.props.bDate}</label>
                        </div> 
                    </div>

                    <div className="psBottom">
                        <div className="profileId">
                            <label> {this.props.age} years</label> 
                            <label> | {this.props.education}</label> 
                            <label> | {this.props.city}</label>
                        </div>
                        <div className="viewProfileDiv">
                            
                        </div>                         
                    </div>
                    <div className="hs40"/>
                    <div className="psBottom">
                        <div className="profileId">
                            <label><b>ID: {this.props.id}</b></label>
                        </div>
                        <div className="viewProfileDiv">
                            <a href="#" onClick={() => this.props.profileClick(this.props.id)}><b>View this profile</b></a>
                        </div> 
                    </div>
                                      
                </div>
                <div className="profileButton">
                   
                </div> 
            </div>
        );
    }
}

export default ProfileSummary;