import React from 'react';
import Select from "react-select";
import DropDownConstant from './DropDownConstant';

function countryMultiSelect() {       
    return(
        <div>
            <Select
                name="filters"
                placeholder="Filters"
                value={props.countries}
                options={DropDownConstant.countries}
                onChange={props.handleCountryChange}
                isMulti = {true}
                />
        </div>
    ) ;
}

export default countryMultiSelect;