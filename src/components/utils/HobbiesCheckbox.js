import React, {Component} from 'react';

class HobbiesCheckbox extends Component {

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);        
    }

    handleInputChange(event) {

        let hobby = [];

        if(document.getElementById("hobbyA").checked) {
            hobby.push(document.getElementById("hobbyA").value)
        }

        if(document.getElementById("hobbyC").checked) {
            hobby.push(document.getElementById("hobbyC").value)
        }

        if(document.getElementById("hobbyD").checked) {
            hobby.push(document.getElementById("hobbyD").value)
        }

        if(document.getElementById("hobbyG").checked) {
            hobby.push(document.getElementById("hobbyG").value)
        }

        if(document.getElementById("hobbyI").checked) {
            hobby.push(document.getElementById("hobbyG").value)
        }

        if(document.getElementById("hobbyL").checked) {
            hobby.push(document.getElementById("hobbyG").value)
        }

        if(document.getElementById("hobbyM").checked) {
            hobby.push(document.getElementById("hobbyM").value)
        }

        if(document.getElementById("hobbyP").checked) {
            hobby.push(document.getElementById("hobbyP").value)
        }

        if(document.getElementById("hobbyE").checked) {
            hobby.push(document.getElementById("hobbyE").value)
        }

        if(document.getElementById("hobbyY").checked) {
            hobby.push(document.getElementById("hobbyY").value)
        }

        if(document.getElementById("hobbyZ").checked) {
            hobby.push(document.getElementById("hobbyZ").value)
        }

        if(document.getElementById("hobbyS").checked) {
            hobby.push(document.getElementById("hobbyS").value)
        }

        if(document.getElementById("hobbyO").checked) {
            hobby.push(document.getElementById("hobbyO").value)
        }

        if(document.getElementById("hobbyT").checked) {
            hobby.push(document.getElementById("hobbyT").value)
        }

        this.props.handleHobbyChange(hobby);
    }

    render () {

        let hobby = this.props.hobby;
        if(hobby === null || hobby === undefined) {
            hobby = "";
        }
        return (
            <div> 
                    <div>
                <div>                     
                    <div className="filterLeft">
                        <label>
                            <input type="checkbox" id="hobbyA" checked={hobby.includes("A")} value="A" onChange={this.handleInputChange}/>Art/Handi Craft
                        </label>
                    </div>
                    <div className="filterRight">
                        <label>
                            <input type="checkbox" id="hobbyC" checked={hobby.includes("C")} value="C" onChange={this.handleInputChange}/>Cooking
                        </label>
                    </div>
                    <div className="filterRight">
                        <label>
                            <input type="checkbox" id="hobbyD" checked={hobby.includes("D")} value="D" onChange={this.handleInputChange}/>Dancing
                        </label>
                    </div>
                </div> 
                <div> 
                    <div className="filterLeft">
                        <label>
                            <input type="checkbox" id="hobbyG" checked={hobby.includes("G")} value="G" onChange={this.handleInputChange}/>Gardening
                        </label>
                    </div>
                    <div className="filterRight">
                        <label>
                            <input type="checkbox" id="hobbyI" checked={hobby.includes("I")} value="I" onChange={this.handleInputChange}/>Internet Surfing
                        </label>
                    </div>
                    <div className="filterRight">
                        <label>
                            <input type="checkbox" id="hobbyL" checked={hobby.includes("L")} value="L" onChange={this.handleInputChange}/>Listening Music
                        </label>
                    </div>
                </div> 
                <div> 
                    <div className="filterLeft">
                        <label>
                            <input type="checkbox" id="hobbyM" checked={hobby.includes("M")} value="M" onChange={this.handleInputChange}/>Movies
                        </label>
                    </div>
                    <div className="filterRight">
                        <label>
                            <input type="checkbox" id="hobbyP" checked={hobby.includes("P")} value="P" onChange={this.handleInputChange}/>Painting
                        </label>
                    </div>
                    <div className="filterRight">
                        <label>
                            <input type="checkbox" id="hobbyE" checked={hobby.includes("E")} value="E" onChange={this.handleInputChange}/>Pets
                        </label>
                    </div>
                </div> 
                <div> 
                    <div className="filterLeft">
                        <label>
                            <input type="checkbox" id="hobbyY" checked={hobby.includes("Y")} value="Y" onChange={this.handleInputChange}/>Playing Music Instruments
                        </label>
                    </div>
                    <div className="filterRight">
                        <label>
                            <input type="checkbox" id="hobbyZ" checked={hobby.includes("Z")} value="Z" onChange={this.handleInputChange}/>Puzzles
                        </label>
                    </div>
                    <div className="filterRight">
                        <label>
                            <input type="checkbox" id="hobbyS" checked={hobby.includes("S")} value="S" onChange={this.handleInputChange}/>Sports
                        </label>
                    </div>
                </div> 
                <div> 
                    <div className="filterLeft">
                        <label>
                            <input type="checkbox" id="hobbyO" checked={hobby.includes("O")} value="O" onChange={this.handleInputChange}/>Shopping
                        </label>
                    </div>
                    <div className="filterRight">
                        <label>
                            <input type="checkbox" id="hobbyT" checked={hobby.includes("T")} value="T" onChange={this.handleInputChange}/>Travelling
                        </label>
                    </div>                   
                </div> 
            </div>
            </div>
        );
    }
}

export default HobbiesCheckbox;