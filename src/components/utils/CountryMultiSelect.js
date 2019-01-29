import React, {Component} from 'react';
import Select from "react-select";
import Animated from 'react-select/lib/animated';

class CountryMultiSelect extends Component {

    constructor(props) {
        super(props);

        this.state = {
            multiValue: [],
            filterOptions: [
              { value: "IND", label: "India" },
              { value: "USA", label: "United States of America" },
              { value: "GBR", label: "United Kingdom" }            
            ]
          };
    }

    render() {       
        return(
            <div>
                <Select
                    name="filters"
                    placeholder="Filters"
                    value={this.props.countrySelecteOption}
                    options={this.state.filterOptions}
                    onChange={this.props.handleCountryChange}
                    isMulti = {true}
                    />
            </div>
        ) ;
    }

}

export default CountryMultiSelect;