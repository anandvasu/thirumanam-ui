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
                options={DropDownConstant.occupationValues}
                onChange={props.handleOccupationChange}
                isMulti = {true}
                styles={DropDownConstant.customStyles}
                />
        </div>
    ) ;

}

export default occupationMultiSelect;