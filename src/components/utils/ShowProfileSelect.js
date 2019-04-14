import React from 'react';

function showProfileSelect(props) {     
        
        return(
            <div>
                <select  onChange={props.shoProfileChange}>
                    <option value="A">All</option>
                    <option value="W">With Photo</option>
                    <option value="O">Without Photo</option>                         
                </select>
            </div>
        ) ;
}

export default showProfileSelect;