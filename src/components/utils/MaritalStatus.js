import React, {Component} from 'react';

class MaritalStatus extends Component {

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);        
    }

    handleInputChange(event) {

        let maritalStatus =[];

        maritalStatus = (document.getElementById("fmsNM").checked) ? document.getElementById("fmsNM").value :  maritalStatus;
        maritalStatus = (document.getElementById("fmsWD").checked) ? maritalStatus + "," + document.getElementById("fmsWD").value :  maritalStatus;
        maritalStatus = (document.getElementById("fmsDD").checked) ? maritalStatus + "," + document.getElementById("fmsDD").value :  maritalStatus;
        maritalStatus = (document.getElementById("fmsAD").checked) ? maritalStatus + "," + document.getElementById("fmsAD").value :  maritalStatus;

        this.props.maritalStatusChange(maritalStatus);
    }

    render () {
        return (
            <div className="heightParentDiv">
                <div className="header3"><label>Marital Status</label></div>
                <div className="filterContent">   
                        <div>                     
                            <div className="filterLeft">
                               <label> <input id="fmsNM" type="checkbox" value="NM" onClick={this.handleInputChange}/>Never Married</label> 
                            </div>
                            <div className="filterRight">
                                <label> <input id="fmsWD" type="checkbox" value="WD" onClick={this.handleInputChange}/>Widowed</label>
                            </div>
                        </div> 
                        <div> 
                            <div className="filterLeft">
                                <label> <input id="fmsDD" type="checkbox" value="DD" onClick={this.handleInputChange}/>Divorced</label>
                            </div>
                            <div className="filterRight">
                                <label> <input id="fmsAD" type="checkbox" value="AD" onClick={this.handleInputChange}/>Awaiting Divorce</label>
                            </div>
                        </div> 
                </div>
            </div>
        );
    }
}

export default MaritalStatus;