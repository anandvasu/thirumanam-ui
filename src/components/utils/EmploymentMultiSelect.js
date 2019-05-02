import React from 'react';
import Select from "react-select";
import DropDownConstant from './DropDownConstant';

function employmentMultiSelect(props) {

    return(
        <div>
            <Select
                name="filters"
                placeholder={DropDownConstant.dropdownDefault}
                value={props.employments}
                options={DropDownConstant.employmentValues}
                onChange={props.handleEmploymentChange}
                isMulti = {true}
                />
        </div>
    ) ;

}

export default employmentMultiSelect;