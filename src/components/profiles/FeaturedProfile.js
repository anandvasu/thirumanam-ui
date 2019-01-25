import React,{Component} from 'react';
import ProfileSummary from '../results/profile/ProfileSummary';

class FeaturedProfile extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <ProfileSummary 
                    id={this.props.profileId}
                    age={this.props.age}
                    firstName = {this.props.firstName}
                    lastName = {this.props.lastName}                        
                    thumbImage = {this.props.image}
                    gender = {this.props.gender}
                    bDate = "12/12/1987"
                />
            </div>
        );
    }
}

export default FeaturedProfile;