import React from 'react';
import Select from "react-select";
import DropDownConstant from './DropDownConstant';
import ReligionDropdownConsts from './ReligionDropdownConsts';

function dhoshamMultiSelect(props) {     
        
        return(
            <div>
                <Select
                    name="gothramSelect"
                    placeholder={DropDownConstant.dropdownDefault}
                    value={props.dhoshams}
                    options={ReligionDropdownConsts.dhoshamValues}
                    onChange={props.handleDhoshamChange}   
                    isMulti = {true} 
                    styles={DropDownConstant.customStyles}              
                    />
            </div>
        ) ;
}

export default dhoshamMultiSelect;