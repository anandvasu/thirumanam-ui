import React from 'react';
import Select from "react-select";
import ReligionDropdownConsts from './ReligionDropdownConsts';
import DropDownConstant from './DropDownConstant';

function gothramSelect(props) {     
        
        return(
            <div>
                <Select
                    name="gothramSelect"
                    placeholder={DropDownConstant.dropdownDefault}
                    value={props.gothramObj}
                    options={ReligionDropdownConsts.gothramValues}
                    onChange={props.gothramChange}                  
                    />
            </div>
        ) ;
}

export default gothramSelect;