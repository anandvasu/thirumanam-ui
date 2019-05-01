import React, {Component} from 'react';

class ShowProfile extends Component {

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);        
    }

    handleInputChange(event) {

        let showProfile = [];

        if(document.getElementById("wPhoto").checked) {
            showProfile.push(document.getElementById("wPhoto").value)
        }

        if(document.getElementById("woPhoto").checked) {
            showProfile.push(document.getElementById("woPhoto").value)
        }

        if(document.getElementById("wHoroscope").checked) {
            showProfile.push(document.getElementById("wHoroscope").value)
        }

        if(document.getElementById("woHoroscope").checked) {
            showProfile.push(document.getElementById("woHoroscope").value)
        }

        this.props.showProfileChange(showProfile);
    }

    render () {

        let showProfile = this.props.showProfile;
        if(showProfile === null || showProfile === undefined) {
            showProfile = [];
        }
        return (
            <div> 
                    <div>                     
                        <div className="filterLeft">
                            <label> <input id="wPhoto" type="checkbox" checked={showProfile.includes("P")} value="P" onChange={this.handleInputChange}/>With Photo</label> 
                        </div>
                        <div className="filterRight">
                            <label> <input id="woPhoto" type="checkbox" checked={showProfile.includes("O")} value="O" onChange={this.handleInputChange}/>Without Photo</label>
                        </div>
                    </div> 
                    <div> 
                        <div className="filterLeft">
                            <label> <input id="wHoroscope" type="checkbox" checked={showProfile.includes("H")} value="H" onChange={this.handleInputChange}/>With Horoscope</label>
                        </div>
                        <div className="filterRight">
                            <label> <input id="woHoroscope" type="checkbox" checked={showProfile.includes("N")} value="N" onChange={this.handleInputChange}/>Without Horoscope</label>
                        </div>
                    </div> 
            </div>
        );
    }
}

export default ShowProfile;