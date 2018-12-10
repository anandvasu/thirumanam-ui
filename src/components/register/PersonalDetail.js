import React, {Component} from 'react';
import './PersonalDetail.css'

class PersonalDetail extends Component {

    constructor(props) {
        super(props);
        this.maritalStatusChange = this.maritalStatusChange.bind(this);
        this.heightChange = this.heightChange.bind(this);
        this.weightChange = this.weightChange.bind(this);
        this.familyTypeChange = this.familyTypeChange.bind(this);
        this.familyValueChange = this.familyValueChange.bind(this);
        this.disablityChange = this.disablityChange.bind(this);
    }

    maritalStatusChange(event) {
        this.props.maritalStatusChange(event.target.value);
    }

    heightChange(event) {
        //this.props.heightChange(event.target.value);
        this.props.heightChange(148);
    }

    weightChange(event) {
        this.props.weightChange(event.target.value);
    }

    familyTypeChange(event) {
        this.props.familyTypeChange(event.target.value);
    }

    familyValueChange(event) {
        this.props.familyValueChange(event.target.value);
    }

    disablityChange(event) {
        this.props.disablityChange(event.target.value);
    }

    render () {
        return (
            <div className="rdlcontaniner">

                         <div> 
                            <div className='rlabel'>
                                    <label>Personal Information</label>
                            </div>
                            <div className='rfield'>
                            </div>
                        </div>

                   
                 <div>                         
                        <div className='rlabel'>
                             <label>Marital Status</label>
                        </div>
                        
                        <div className='rfield'>
                            <select  onChange={this.maritalStatusChange}>
                                <option value="NM" selected>Never Married</option>
                                <option value="WD">Widowed</option>
                                <option value="DI">Divorced</option> 
                                <option value="AD">Awaiting Divorce</option>                            
                            </select>
                        </div>
                    </div>

                     <div>

                        <div className='rlabel'>
                             <label>Height</label>
                        </div>

                        <div className='rlabel'>
                            <select onChange={this.heightChange}>
                                <option value="121" selected>4ft</option>
                                <option value="124">4ft 1in</option>
                                <option value="127">4ft 2in</option>
                                <option value="129">4ft 3in</option>
                                <option value="132">4ft 4in</option>
                                <option value="134">4ft 5in</option>
                                <option value="137">4ft 6in</option>
                                <option value="139">4ft 7in</option>
                                <option value="142">4ft 8in</option>
                                <option value="144">4ft 9in</option>
                                <option value="147">4ft 10in</option>
                                <option value="149">4ft 11in</option>
                                <option value="152">5ft</option>
                                <option value="154">5ft 1in</option>
                                <option value="157">5ft 2in</option>
                                <option value="160">5ft 3in</option>
                                <option value="162">5ft 4in</option>
                                <option value="165">5ft 5in</option>
                                <option value="167">5ft 6in</option>
                                <option value="170">5ft 7in</option>
                                <option value="172">5ft 8in</option>
                                <option value="175">5ft 9in</option>
                                <option value="177">5ft 10in</option>
                                <option value="180">5ft 11in</option>  
                                <option value="182">6ft</option>
                                <option value="185">6ft 1in</option>
                                <option value="187">6ft 2in</option>
                                <option value="190">6ft 3in</option>
                                <option value="193">6ft 4in</option>
                                <option value="195">6ft 5in</option>
                                <option value="198">6ft 6in</option>
                                <option value="200">6ft 7in</option>
                                <option value="203">6ft 8in</option>
                                <option value="205">6ft 9in</option>
                                <option value="208">6ft 10in</option>
                                <option value="210">6ft 11in</option>  
                                <option value="213">7ft</option>                               
                            </select>   
                        </div>                
                    </div>

                    <div>
                        <div className='rlabel'>
                             <label>Weight</label>
                        </div>
                        
                        <div className='rfield'>
                            <input type='text' onBlur={this.weightChange} />
                        </div>                        
                    </div>

                    <div>
                        <div className='rlabel'>
                             <label>Family Type</label>
                        </div>
                        
                        <div className='rfield'>
                            <select  onChange={this.familyTypeChange}>
                                <option value="JO">Joint</option>
                                <option value="NU" selected>Nucler</option>                                
                            </select>
                        </div>                        
                    </div>

                     <div>
                        <div className='rlabel'>
                             <label>Family Value</label>
                        </div>
                        
                        <div className='rfield'>
                            <select  onChange={this.familyValueChange}>
                                <option value="OR">Orthodox</option>
                                <option value="NU" selected>Traditional</option>    
                                <option value="MO" selected>Moderate</option> 
                                <option value="LI" selected>Liberal</option>                             
                            </select>
                        </div>                        
                    </div>

                     <div>
                        <div className='rlabel'>
                             <label>Any Disability?</label>
                        </div>
                        
                        <div className='rfield'>
                            <select  onChange={this.disabledChange}>
                                <option value="Y">Yes</option>
                                <option value="N" selected>No</option>                                                       
                            </select>
                        </div>                        
                    </div>
                    <hr />
            </div>
        );
    }
}

export default PersonalDetail;