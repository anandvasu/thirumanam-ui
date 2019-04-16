import React from 'react';
import Select from "react-select";
import DropDownConstant from './DropDownConstant';

function hinduCasteSelect(props) {     
        
        return(
            <div>
                <Select
                    name="religionSelect"
                    placeholder={DropDownConstant.dropdownDefault}
                    value={props.casteObj}
                    options={DropDownConstant.hinduCasteValues}
                    onChange={props.hinduCasteChange}  
                    styles={{ 
                        control: (base, _state) => ({...base, minHeight: '30px', height: '30px'})
                    }}                
                    />
            </div>
        ) ;
}

export default hinduCasteSelect;