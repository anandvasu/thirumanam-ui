import React from 'react';
import Select from "react-select";
import DropDownConstant from './DropDownConstant';

function educationMultiSelect(props) {       
    return(
        <div>
            <div className="header3"><label>Education</label></div>
            <div className="filterContentMSelect">   
                <Select
                    name="filters"
                    placeholder="Filters"
                    value={props.education}
                    options={DropDownConstant.educationValues}
                    onChange={props.educationChange}
                    isMulti = {true}
                    />
             </div>
        </div>
    ) ; 
}

export default educationMultiSelect;