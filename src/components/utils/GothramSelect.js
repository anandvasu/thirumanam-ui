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
                    styles={DropDownConstant.customStyles}                
                    />
            </div>
        ) ;
}

export default gothramSelect;