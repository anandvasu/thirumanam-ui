import React, {Component} from 'react';
import Select from "react-select";
import DropDownConstant from './DropDownConstant'
class OccupationMultiSelect extends Component {

    constructor(props) {
        super(props);

        this.handleMultiChange = this.handleMultiChange.bind(this);

        this.state = {
            multiValue: []            
          };
    }

    handleMultiChange(option) {
        this.setState({
            multiValue: option
        });
      }

    render() {       
        return(
            <div>
                <Select
                    name="filters"
                    placeholder="Filters"
                    value={this.state.multiValue}
                    options={DropDownConstant.employmentValues}
                    onChange={this.handleMultiChange}
                    isMulti = {true}
                    />
            </div>
        ) ;
    }

}

export default OccupationMultiSelect;