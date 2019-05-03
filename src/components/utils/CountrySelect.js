import React from 'react';
import LocationDropdownConsts from './LocationDropdownConsts';
import DropDownConstant from './DropDownConstant';
import Select from "react-select";

function countrySelect(props) {     
        
    return(
        <div>       
            <Select
                    name="filters"
                    placeholder={DropDownConstant.dropdownDefault}
                    value={props.countryObj}
                    options={LocationDropdownConsts.countries}
                    onChange={props.countryChange}
                    styles={DropDownConstant.customStyles}
                    />
        </div>
    );
}

export default countrySelect;