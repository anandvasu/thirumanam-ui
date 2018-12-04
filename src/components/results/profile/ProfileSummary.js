import React, {Component} from 'react';

import './ProfileSummary.css';

class ProfileSummary extends Component {

    render () {
        return (
            <div className="profileContainer">
                <div className="profileSummarImage">
                    <img src={"data:image/jpeg;base64,"+this.props.thumbImage} alt="Not Available" width="100px" height="100px"></img>&nbsp;&nbsp;&nbsp;
                </div> 
                <div className="verticalSpace">

                </div>
                <div className="profileSummary">
                    <div style={{textAlign:'left'}}>                       
                       <label style={{width:'300px'}}> Mr. {this.props.firstName}, {this.props.lastName} </label>                        
                    </div>
                    <div style={{textAlign:'left'}}>
                        <label> {this.props.age} years</label> 
                        <label> | {this.props.education}</label> 
                        <label> | {this.props.city}</label>
                    </div>
                    <br/>
                    <div style={{textAlign:'left'}}>
                        <div> <a href="#" onClick={() => this.props.profileClick(this.props.id)}>View this profile</a> </div>
                    </div>                   
                </div>
                <div className="profileButton">
                   
                </div> 
            </div>
        );
    }
}

export default ProfileSummary;