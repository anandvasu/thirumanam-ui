import React, {Component} from 'react';
import Select from "react-select";
import Animated from 'react-select/lib/animated';
import DropDownConstant from './DropDownConstant';

class CountryMultiSelect extends Component {

    constructor(props) {
        super(props);

        this.state = {
            multiValue: []           
          };
    }

    render() {       
        return(
            <div>
                <Select
                    name="filters"
                    placeholder="Filters"
                    value={this.props.countries}
                    options={DropDownConstant.countries}
                    onChange={this.props.handleCountryChange}
                    isMulti = {true}
                    />
            </div>
        ) ;
    }

}

export default CountryMultiSelect;