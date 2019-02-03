import React from 'react';
import Select from "react-select";
import DropDownConstant from './DropDownConstant';

function casteSelect(props) {     
        
        return(
            <div>
                <Select
                    name="religionSelect"
                    placeholder={DropDownConstant.dropdownDefault}
                    value={props.caste}
                    options={props.casteValues}
                    onChange={props.casteChangeHandler}  
                    styles={{ 
                        control: (base, _state) => ({...base, minHeight: '30px', height: '30px'})
                    }}                
                    />
            </div>
        ) ;
}

export default casteSelect;