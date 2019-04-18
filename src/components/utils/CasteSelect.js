import React from 'react';
import ReligionDropdownConsts from './ReligionDropdownConsts';
import Select from "react-select";

function casteSelect(props) {
    return(
        <div>
            { (props.religion === 1) && 
                <Select
                    name="filters"
                    placeholder="--Select--"
                    value={props.casteObj}
                    options={ReligionDropdownConsts.hinduCasteValues}
                    onChange={props.casteChange}
                    />
            }
            { ((props.religion === 4) || (props.religion === 5) || (props.religion === 6)) && 
                <Select
                    name="filters"
                    placeholder="--Select--"
                    value={props.casteObj}
                    options={ReligionDropdownConsts.muslimCasteValues}
                    onChange={props.casteChange}
                    />
            }
        </div>
    );
}

export default casteSelect;