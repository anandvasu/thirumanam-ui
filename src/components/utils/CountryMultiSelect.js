import React, {Component} from 'react';
import Select from "react-select";
import Animated from 'react-select/lib/animated';

class CountryMultiSelect extends Component {

    constructor(props) {
        super(props);

        this.handleMultiChange = this.handleMultiChange.bind(this);

        this.state = {
            multiValue: [],
            filterOptions: [
              { value: "IND", label: "India" },
              { value: "USA", label: "United States of America" },
              { value: "GBR", label: "United Kingdom" }            
            ]
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
                    options={this.state.filterOptions}
                    onChange={this.handleMultiChange}
                    isMulti = {true}
                    />
            </div>
        ) ;
    }

}

export default CountryMultiSelect;