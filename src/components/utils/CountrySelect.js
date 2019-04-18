import React from 'react';
import LocationDropdownConsts from './LocationDropdownConsts';
import Select from "react-select";

function countrySelect(props) {     
        
    return(
        <div>       
            <Select
                    name="filters"
                    placeholder="--Select--"
                    value={props.countryObj}
                    options={LocationDropdownConsts.countries}
                    onChange={props.countryChange}
                    />
        </div>
    );
}

export default countrySelect;