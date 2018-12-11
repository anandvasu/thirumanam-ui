import React, {Component} from 'react';

class ProfDetail extends Component {

    constructor(props) {
        super(props); 

        this.educationChange = this.educationChange.bind(this);
        this.employmentChange = this.employmentChange.bind(this);
        this.incomeChange = this.incomeChange.bind(this);
    }

    educationChange(event) {
        this.props.educationChange(event.target.value);
    }

    employmentChange(event) {
        this.props.employmentChange(event.target.value);
    }

    incomeChange(event) {
        this.props.incomeChange(event.target.value);
    }

    render () {
        return (
            <div className="rdpcontaniner">
                         <div> 
                            <div className='header2allborder'>
                                    <label>Professional Information</label>
                            </div>
                            <div className='rdfield'>
                            </div>
                        </div>

                   
                 <div>                         
                        <div className='rdlabel'>
                             <label>Education</label>
                        </div>
                        
                        <div className='rdfield'>
                            <select  onChange={this.educationChange}>
                                <option value="">--Select--</option>
                                <option value="BE">Bachelor of Engineering</option>
                                <option value="BTech">Bachelor of Technology</option>                     
                            </select>
                        </div>
                    </div>

                     <div>
                        <div className='rdlabel'>
                             <label>Employment</label>
                        </div>
                        
                        <div className='rdfield'>
                        <select  onChange={this.employmentChange}>
                                <option value="">--Select--</option>
                                <option value="G">Government</option>
                                <option value="P">Private</option>
                                <option value="B">Business</option> 
                                <option value="D">Defence</option> 
                                <option value="S">Self Employed</option>    
                                <option value="S">Not Working</option>                            
                            </select>
                        </div>                        
                    </div>

                    <div>
                        <div className='rdlabel'>
                             <label>Income</label>
                        </div>
                        
                        <div className='rdfield'>
                            <div className="fieldLen200"> <input type="text" onBlur={this.incomeChange}/> </div>
                        </div>                        
                    </div>
                    <div className="hs10" />
            </div>
        );
    }
}

export default ProfDetail;