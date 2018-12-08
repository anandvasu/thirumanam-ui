import React, {Component} from 'react';

class BodyType extends Component {

    render () {
        return (
            <div className="heightParentDiv">
                <div className="header3"><label>Body Type</label></div>
                <div className="filterContent">                          
                    <select  onChange={this.onChangeRegisteredBy}>
                                    <option value="" selected>All</option>
                                    <option value="NM">Never Married</option>
                                    <option value="WD">Widowed</option>
                                    <option value="DI">Divorced</option> 
                                    <option value="AD">Awaiting Divorce</option>                            
                    </select>      
                </div>
            </div>
        );
    }
}

export default BodyType;