import React, {Component} from 'react';

class MaritalStatus extends Component {

    render () {
        return (
            <div className="heightParentDiv">
                <div className="header3"><label>Marital Status</label></div>
                <div className="filterContent">    
                        <div>                     
                            <div className="filterLeft">
                                <input type="checkbox" value="NM"/>Never Married
                            </div>
                            <div className="filterRight">
                                <input type="checkbox" value="WD"/>Widowed
                            </div>
                        </div> 
                        <div> 
                            <div className="filterLeft">
                                <input type="checkbox" value="DD"/>Divorced
                            </div>
                            <div className="filterRight">
                                <input type="checkbox" value="AD"/>Awaiting Divorce
                            </div>
                        </div> 
                </div>
            </div>
        );
    }
}

export default MaritalStatus;