import React, {Component} from 'react';
import Select from "react-select";
import DropDownConstant from './DropDownConstant';

class Education extends Component {

    render () {
        return (
            <div>
                 <Select
                    name="filters"
                    placeholder="--Select--"
                    value={props.educationObj}
                    options={DropDownConstant.educationValues}
                    onChange={props.educationChange}
                    />
            </div>
        );
    }
}

export default Education;