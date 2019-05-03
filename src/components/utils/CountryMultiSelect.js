import React from 'react';
import Select from "react-select";
import LocationDropdownConsts from './LocationDropdownConsts';
import DropDownConstant from './DropDownConstant';



function countryMultiSelect(props) {       
    return(
        <div>
            <Select
                name="filters"
                placeholder={DropDownConstant.dropdownDefault}
                value={props.countries}
                options={LocationDropdownConsts.countries}
                onChange={props.handleCountryChange}
                isMulti = {true}
                styles={DropDownConstant.customStyles}
                />
        </div>
    ) ;
}

export default countryMultiSelect;