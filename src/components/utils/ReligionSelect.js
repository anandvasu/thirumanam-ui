import React from 'react';
import Select from "react-select";
import DropDownConstant from './DropDownConstant';

const customStyles = {
    control : (base, state) => (
       {...base,
        boxShadow:"none",
        border: '1px solid red',
        borderRadius: '4px'
       })
   }

function religionSelect(props) {     
        
        return(
            <div>
                <Select
                    name="religionSelect"
                    placeholder={DropDownConstant.dropdownDefault}
                    value={props.religions}
                    options={DropDownConstant.regilionValues}
                    onChange={props.religionChangeHandler}  
                    className = "reactSelectStyle"             
                    />
            </div>
        ) ;
}

export default religionSelect;