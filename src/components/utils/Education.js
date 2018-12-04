import React, {Component} from 'react';

class Education extends Component {

    render () {
        return (
            <div className="heightParentDiv">
                <div className="header3"><label>Education</label></div>
                <div className="filterContent">                          
                    <select  onChange={this.onChangeRegisteredBy}>
                                <option value="" selected>Any</option>
                                <option value="BE">Bachelor of Engineering</option>
                                <option value="BTech">Bachelor of Technology</option>                     
                    </select> 
                </div>
            </div>
        );
    }
}

export default Education;