import React from 'react';
import CountryDropdownConsts from './CountryDropdownConsts';

function countrySelect(props) {     
        
    return(
        <div>
            <select  onChange={props.countryChange} value={props.country}>               
                { CountryDropdownConsts.countries.map(data => <option value={data.value}>{data.label}</option>)}                     
            </select>
        </div>
    );
}

export default countrySelect;