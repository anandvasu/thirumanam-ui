import React from 'react';
import Select from "react-select";
import DropDownConstant from './DropDownConstant';

function dhoshamSelect(props) {     
        
        return(
            <div>
                <Select
                    name="gothramSelect"
                    placeholder={DropDownConstant.dropdownDefault}
                    value={props.dhoshamObj}
                    options={DropDownConstant.dhoshamValues}
                    onChange={props.hinduDhoshamChange}                  
                    />
            </div>
        ) ;
}

export default dhoshamSelect;