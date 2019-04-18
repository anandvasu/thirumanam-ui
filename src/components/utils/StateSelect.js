import React from 'react';
import LocationDropdownConsts from './LocationDropdownConsts';
import Select from "react-select";

function stateSelect(props) {

    return(
        <div>           
            { (props.country === "IN") && 
            <Select
                    name="filters"
                    placeholder="--Select--"
                    value={props.pstateObj}
                    options={LocationDropdownConsts.indiaStates}
                    onChange={props.profileStateChange}
                    />
            }
             { (props.country === "US") && 
            <Select
                    name="filters"
                    placeholder="--Select--"
                    value={props.pstateObj}
                    options={LocationDropdownConsts.usaStates}
                    onChange={props.profileStateChange}
                    />
            }
        </div>
    ) ;
}

export default stateSelect;