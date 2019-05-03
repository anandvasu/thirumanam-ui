import React from 'react';

function employmentRadio(props) {
         return (
            <div>
                <div>                     
                    <div className="filterLeft">
                        <label>
                            <input type="radio" id="empG" checked={props.employment === "G"} value="G" onChange={props.handleEmploymentChange}/>Government
                        </label>
                    </div>
                    <div className="filterRight">
                        <label>
                            <input type="radio" id="empP" checked={props.employment ==="P"} value="P" onChange={props.handleEmploymentChange}/>Private
                        </label>
                    </div>
                </div> 
                <div> 
                    <div className="filterLeft">
                        <label>
                            <input type="radio" id="empB" checked={props.employment ==="B"} value="B" onChange={props.handleEmploymentChange}/>Business
                        </label>
                    </div>
                    <div className="filterRight">
                        <label>
                            <input type="radio" id="empD" checked={props.employment ==="D"} value="D" onChange={props.handleEmploymentChange}/>Defence
                        </label>
                    </div>
                </div> 
                <div> 
                    <div className="filterLeft">
                        <label>
                            <input type="radio" id="empS" checked={props.employment ==="S"} value="S" onChange={props.handleEmploymentChange}/>Self Employed
                        </label>
                    </div>
                    <div className="filterRight">
                        <label>
                            <input type="radio" id="empN" checked={props.employment ==="N"} value="N" onChange={props.handleEmploymentChange}/>Not Working
                        </label>
                    </div>
                </div> 
            </div>
        );
}

export default employmentRadio;