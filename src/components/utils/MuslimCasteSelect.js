import React from 'react';
import Select from "react-select";
import DropDownConstant from './DropDownConstant';

function muslimCasteSelect(props) {     
        
        return(
            <div>
                <Select
                    name="religionSelect"
                    placeholder={DropDownConstant.dropdownDefault}
                    value={props.casteObj}
                    options={DropDownConstant.muslimCasteValues}
                    onChange={props.casteChange}  
                    styles={{ 
                        control: (base, _state) => ({...base, minHeight: '30px', height: '30px'})
                    }}                
                    />
            </div>
        ) ;
}

export default muslimCasteSelect;