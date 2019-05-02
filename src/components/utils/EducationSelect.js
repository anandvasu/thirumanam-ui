import React, {Component} from 'react';
import Select from "react-select";
import DropDownConstant from './DropDownConstant';

function educationSelect(props) {     
        
    return(
        <div>       
            <Select
                    name="filters"
                    placeholder="--Select--"
                    value={props.educationObj}
                    options={DropDownConstant.educationValues}
                    onChange={props.handleEducationChange}
                    />
        </div>
    );
}

export default educationSelect;