import React from 'react';
import Select from "react-select";
import DropDownConstant from './DropDownConstant';

function occupationMultiSelect(props) {

    return(
        <div>
            <Select
                name="filters"
                placeholder={DropDownConstant.dropdownDefault}
                value={props.occupations}
                options={DropDownConstant.employmentValues}
                onChange={props.handleOccupationChange}
                isMulti = {true}
                />
        </div>
    ) ;

}

export default occupationMultiSelect;