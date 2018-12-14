import React, {Component} from 'react';

class BodyType extends Component {

    render () {
        return (
            <div className="heightParentDiv">
                <div className="header3"><label>Body Type</label></div>
                <div className="filterContent">    
                        <div>                     
                            <div className="filterLeft">
                                <input type="checkbox" value="AG"/>Average
                            </div>
                            <div className="filterRight">
                                <input type="checkbox" value="AT"/>Athletic
                            </div>
                        </div> 
                        <div> 
                            <div className="filterLeft">
                                <input type="checkbox" value="HY"/>Heavy
                            </div>
                            <div className="filterRight">
                                <input type="checkbox" value="SM"/>Slim
                            </div>
                        </div> 
                </div>
            </div>
        );
    }
}

export default BodyType;