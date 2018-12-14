import React, {Component} from 'react';

class Occupation extends Component {

    render () {
        return (
            <div className="heightParentDiv">
                <div className="header3"><label>Occupation</label></div>
                <div className="filterContent">    
                        <div>                     
                            <div className="filterLeft">
                                <input type="checkbox" value="G"/>Government
                            </div>
                            <div className="filterRight">
                                <input type="checkbox" value="P"/>Private
                            </div>
                        </div> 
                        <div> 
                            <div className="filterLeft">
                                <input type="checkbox" value="B"/>Business
                            </div>
                            <div className="filterRight">
                                <input type="checkbox" value="D"/>Defence
                            </div>
                        </div> 
                        <div> 
                            <div className="filterLeft">
                                <input type="checkbox" value="S"/>Self Employed
                            </div>
                            <div className="filterRight">
                                <input type="checkbox" value="N"/>Not Working
                            </div>
                        </div> 
                </div>
            </div>
        );
    }
}

export default Occupation;