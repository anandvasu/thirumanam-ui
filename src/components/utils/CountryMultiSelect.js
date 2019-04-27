import React from 'react';
import Select from "react-select";
import LocationDropdownConsts from './LocationDropdownConsts';

function countryMultiSelect(props) {       
    return(
        <div>
            <Select
                name="filters"
                placeholder="Filters"
                value={props.countries}
                options={LocationDropdownConsts.countries}
                onChange={props.handleCountryChange}
                isMulti = {true}
                />
        </div>
    ) ;
}

export default countryMultiSelect;