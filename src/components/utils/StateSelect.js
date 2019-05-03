import React from 'react';
import LocationDropdownConsts from './LocationDropdownConsts';
import Select from "react-select";
import DropDownConstant from './DropDownConstant';

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
                    styles={DropDownConstant.customStyles}
                    />
            }
             { (props.country === "US") && 
            <Select
                    name="filters"
                    placeholder="--Select--"
                    value={props.pstateObj}
                    options={LocationDropdownConsts.usaStates}
                    onChange={props.profileStateChange}
                    styles={DropDownConstant.customStyles}
                    />
            }
        </div>
    ) ;
}

export default stateSelect;