import React from 'react';
import Select from "react-select";
import DropDownConstant from './DropDownConstant';

function religionSelect(props) {     
        
        return(
            <div>
                <Select
                    name="religionSelect"
                    placeholder={DropDownConstant.dropdownDefault}
                    value={props.religions}
                    options={DropDownConstant.regilionValues}
                    onChange={props.religionChangeHandler}  
                    styles={{ 
                        control: (base, _state) => ({...base, minHeight: '30px', height: '30px'})
                    }}                
                    />
            </div>
        ) ;
}

export default religionSelect;