import React, {Component} from 'react';
import defaultFImage from '../../../assets/images/defalt_female.png';
import defaultMImage from '../../../assets/images/default_male.jpg';
import './ProfileSelfSummary.css';

class ProfileSelfSummary extends Component {

    render() {

        let image; 

        if(this.props.gender === "F") {
            image = <img src={defaultFImage} alt="Not Available" style={{width:'80px'}} onClick={this.goToHome} /> 
        } else {
            image = <img src={defaultMImage} alt="Not Available" style={{width:'80px'}} onClick={this.goToHome} />
        }

        return(
            <div className="profileSummaryContainer">
                <div>
                    {image}
                </div>
                <div>
                   Add Photo
                </div>
                <div>
                   Edit Profile
                </div>
                <div>
                   Edit Preferences
                </div>
                <div>
                   Privacy
                </div>
            </div>
        );
    }
}

export default ProfileSelfSummary;