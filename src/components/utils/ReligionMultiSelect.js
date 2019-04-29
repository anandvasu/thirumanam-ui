import React, {Component} from 'react';
import Select from "react-select";
import ReligionDropdownConsts from './ReligionDropdownConsts';
import DropDownConstant from './DropDownConstant';

class ReligionMultiSelect extends Component {

    constructor(props) {
        super(props);
           this.state = {
            filterOptions: [
              { value: "H", label: "Hindu" },
              { value: "M", label: "Muslim" }
            ]
          };
    }

    render() {     
        
        return(
            <div>
                <Select
                    name="filters"
                    placeholder={DropDownConstant.dropdownDefault}
                    value={this.props.religions}
                    options={ReligionDropdownConsts.regilionValues}
                    onChange={this.props.handleReligionChange}
                    isMulti = {true}
                />
            </div>
        ) ;
    }

}

export default ReligionMultiSelect;