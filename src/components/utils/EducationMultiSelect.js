import React from 'react';
import Select from "react-select";
import DropDownConstant from './DropDownConstant';

function educationMultiSelect(props) {       
    return(
        <div>
            <Select
                name="filters"
                placeholder="Filters"
                value={props.education}
                options={DropDownConstant.educationValues}
                onChange={props.educationChange}
                isMulti = {true}
                />
        </div>
    ) ; 
}

export default educationMultiSelect;