import React from 'react';
import Select from "react-select";
import DropDownConstant from './DropDownConstant';

function educationMultiSelect(props) {       
    return(
        <div>
            <Select
                name="filters"
                placeholder={DropDownConstant.dropdownDefault}
                value={props.educations}
                options={DropDownConstant.educationValues}
                onChange={props.handleEducationChange}
                isMulti = {true}
                styles={DropDownConstant.customStyles}
                />
        </div>
    ) ; 
}

export default educationMultiSelect;