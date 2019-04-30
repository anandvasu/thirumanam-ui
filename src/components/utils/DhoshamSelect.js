import React from 'react';
import Select from "react-select";
import DropDownConstant from './DropDownConstant';
import ReligionDropdownConsts from './ReligionDropdownConsts';

function dhoshamSelect(props) {     
        
        return(
            <div>
                <Select
                    name="gothramSelect"
                    placeholder={DropDownConstant.dropdownDefault}
                    value={props.dhoshamObj}
                    options={ReligionDropdownConsts.dhoshamValues}
                    onChange={props.hinduDhoshamChange}                  
                    />
            </div>
        ) ;
}

export default dhoshamSelect;