import React from 'react';
import Select from "react-select";
import DropDownConstant from './DropDownConstant';

function dhoshamMultiSelect(props) {     
        
        return(
            <div>
                <Select
                    name="gothramSelect"
                    placeholder={DropDownConstant.dropdownDefault}
                    value={props.dhoshamObj}
                    options={DropDownConstant.dhoshamValues}
                    onChange={props.hinduDhoshamChange}   
                    isMulti = {true}               
                    />
            </div>
        ) ;
}

export default dhoshamMultiSelect;