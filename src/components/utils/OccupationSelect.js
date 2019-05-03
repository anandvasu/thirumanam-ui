import React from 'react';
import Select from "react-select";
import DropDownConstant from './DropDownConstant';

function occupationSelect(props) {

    return(
        <div>
            <Select
                name="filters"
                placeholder={DropDownConstant.dropdownDefault}
                value={props.occupationObj}
                options={DropDownConstant.occupationValues}
                onChange={props.handleOccupationChange}
                styles={DropDownConstant.customStyles}
                />
        </div>
    ) ;

}

export default occupationSelect;