import React, {Component} from 'react';
import '../../components/register/PersonalDetail';

class ProfileSelf extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <PersonalDetail 
                        maritalStatusChange = {this.maritalStatusChange}
                        heightChange = {this.heightChange}
                        weightChange = {this.weightChange}
                        familyTypeChange = {this.familyTypeChange}
                        familyValueChange = {this.familyValueChange}
                        disabilityChange = {this.disabilityChange}
                    />
        );
    }
}

export default ProfileSelf;