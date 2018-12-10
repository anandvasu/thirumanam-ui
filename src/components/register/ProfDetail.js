import React, {Component} from 'react';
import './ProfDetail.css'

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
            <div className="rdlcontaniner">

                         <div> 
                            <div className='rlabel'>
                                    <label>Professional Information</label>
                            </div>
                            <div className='rfield'>
                            </div>
                        </div>

                   
                 <div>                         
                        <div className='rlabel'>
                             <label>Education</label>
                        </div>
                        
                        <div className='rfield'>
                            <select  onChange={this.educationChange}>
                                <option value="BE" selected>Bachelor of Engineering</option>
                                <option value="BTech">Bachelor of Technology</option>                     
                            </select>
                        </div>
                    </div>

                     <div>
                        <div className='rlabel'>
                             <label>Employment</label>
                        </div>
                        
                        <div className='rfield'>
                        <select  onChange={this.employmentChange}>
                                <option value="G" selected>Government</option>
                                <option value="P">Private</option>
                                <option value="B">Business</option> 
                                <option value="D">Defence</option> 
                                <option value="S">Self Employed</option>    
                                <option value="S">Not Working</option>                            
                            </select>
                        </div>                        
                    </div>

                    <div>
                        <div className='rlabel'>
                             <label>Income</label>
                        </div>
                        
                        <div className='rfield'>
                            <input type="text" onBlur={this.incomeChange}/>
                        </div>                        
                    </div>
                    <hr />
            </div>
        );
    }
}

export default ProfDetail;