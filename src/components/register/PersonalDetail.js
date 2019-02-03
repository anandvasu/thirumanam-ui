import React, {Component} from 'react';

class PersonalDetail extends Component {

    constructor(props) {
        super(props);
        this.maritalStatusChange = this.maritalStatusChange.bind(this);
        this.heightInchChange = this.heightInchChange.bind(this);
        this.heightCmChange = this.heightCmChange.bind(this);
        this.weightChange = this.weightChange.bind(this);
        this.familyTypeChange = this.familyTypeChange.bind(this);
        this.familyValueChange = this.familyValueChange.bind(this);
        this.foodHabitChange = this.foodHabitChange.bind(this);
        this.bodyTypeChange = this.bodyTypeChange.bind(this);
        this.disablityChange = this.disablityChange.bind(this);
    }

    maritalStatusChange(event) {
        this.props.maritalStatusChange(event.target.value);
    }

    heightInchChange(event) {
        this.props.heightInchChange(event.target.value);
        document.getElementById("rdCmHeight").value = "";
    }

    heightCmChange(event) {
        this.props.heightCmChange(event.target.value);
        document.getElementById("rdInchHeight").value = "";
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

    foodHabitChange(event) {
        this.props.foodHabitChange(event.target.value);
    }

    bodyTypeChange(event) {
        this.props.bodyTypeChange(event.target.value);
    }

    disablityChange(event) {
        this.props.disablityChange(event.target.value);
    }

    render () {
        return (
                <div>
                    <div> 
                        <div className='header2allborder'>
                                <label>Personal Information</label>
                        </div>                        
                    </div>    
                    <div className="sectionDataDiv">             
                        <div>                         
                            <div className='rdlabel'>
                                <label>Marital Status</label>
                            </div>
                            <div className='rdfield'>
                                <select  onChange={this.maritalStatusChange}>
                                    <option value="">--Select--</option>
                                    <option value="NM">Never Married</option>
                                    <option value="WD">Widowed</option>
                                    <option value="DI">Divorced</option> 
                                    <option value="AD">Awaiting Divorce</option>                            
                                </select>
                            </div>
                        </div>

                        <div>

                            <div className='rdlabel'>
                                <label>Height</label>
                            </div>

                            <div className='rdfield'>
                                <select id="rdInchHeight" onChange={this.heightInchChange}>
                                    <option value="">--Select--</option>
                                    <option value="121">4ft</option>
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
                                </select>(inch)   
                                <div className="vs20"/> 
                                <div className="vs20">or</div>
                                <div className="vs20" />
                                <select id="rdCmHeight" onChange={this.heightCmChange}>
                                    <option value="">--Select--</option>
                                    <option value="121">121 cm</option>
                                    <option value="124">124 cm</option>
                                    <option value="127">127 cm</option>
                                    <option value="129">129 cm</option>
                                    <option value="132">132 cm</option>
                                    <option value="134">134 cm</option>
                                    <option value="137">137 cm</option>
                                    <option value="139">139 cm</option>
                                    <option value="142">142 cm</option>
                                    <option value="144">144 cm</option>
                                    <option value="147">147 cm</option>
                                    <option value="149">149 cm</option>
                                    <option value="152">152 cm</option>
                                    <option value="154">154 cm</option>
                                    <option value="157">157 cm</option>
                                    <option value="160">160 cm</option>
                                    <option value="162">162 cm</option>
                                    <option value="165">165 cm</option>
                                    <option value="167">167 cm</option>
                                    <option value="170">170 cm</option>
                                    <option value="172">172 cm</option>
                                    <option value="175">175 cm</option>
                                    <option value="177">177 cm</option>
                                    <option value="180">180 cm</option>  
                                    <option value="182">182 cm</option>
                                    <option value="185">185 cm</option>
                                    <option value="187">187 cm</option>
                                    <option value="190">190 cm</option>
                                    <option value="193">193 cm</option>
                                    <option value="195">195 cm</option>
                                    <option value="198">198 cm</option>
                                    <option value="200">200 cm</option>
                                    <option value="203">203 cm</option>
                                    <option value="205">205 cm</option>
                                    <option value="208">208 cm</option>
                                    <option value="210">210 cm</option>  
                                    <option value="213">213 cm</option>                               
                                </select>(cm)   
                            </div>                
                        </div>

                        <div>
                            <div className='rdlabel'>
                                <label>Weight</label>
                            </div>
                            
                            <div className='rdfield'>
                                <div className='fieldLen100'>
                                    <input type='text' onBlur={this.weightChange} /> 
                                </div> Kg
                            </div>                        
                        </div>

                        <div>
                            <div className='rdlabel'>
                                <label>Family Type</label>
                            </div>
                            
                            <div className='rdfield'>
                                <select  onChange={this.familyTypeChange}>
                                    <option value="">--Select--</option>
                                    <option value="JO">Joint</option>
                                    <option value="NU">Nucler</option>                                
                                </select>
                            </div>                        
                        </div>

                        <div>
                            <div className='rdlabel'>
                                <label>Family Value</label>
                            </div>
                            
                            <div className='rdfield'>
                                <select  onChange={this.familyValueChange}>
                                    <option value="">--Select--</option>
                                    <option value="OR">Orthodox</option>
                                    <option value="TL">Traditional</option>    
                                    <option value="MO">Moderate</option> 
                                    <option value="LI">Liberal</option>                             
                                </select>
                            </div>                        
                        </div>
                        <div>
                            <div className='rdlabel'>
                                <label>Food Habit</label>
                            </div>
                            
                            <div className='rdfield'>
                                <select  onChange={this.foodHabitChange}>
                                    <option value="">--Select--</option>
                                    <option value="V">Vegetarian</option>
                                    <option value="N">Non-Vegetarian</option>    
                                    <option value="E">Eggetarian</option>                           
                                </select>
                            </div>                        
                        </div>

                        <div>
                            <div className='rdlabel'>
                                <label>Body Type</label>
                            </div>
                            
                            <div className='rdfield'>
                                <select  onChange={this.bodyTypeChange}>
                                    <option value="">--Select--</option>
                                    <option value="AG">Average</option>
                                    <option value="AT">Athletic</option>    
                                    <option value="HY">Heavy</option> 
                                    <option value="SM">Slim</option>                             
                                </select>
                            </div>                        
                        </div>

                        <div>
                            <div className='rdlabel'>
                                <label>Any Disability?</label>
                            </div>
                            
                            <div className='rdfield'>
                                <select  onChange={this.disabledChange}>
                                    <option value="">--Select--</option>
                                    <option value="Y">Yes</option>
                                    <option value="N">No</option>                                                       
                                </select>
                            </div>                        
                        </div>
                        <div className="hs10" />
                    </div>  
            </div>
        );
    }
}

export default PersonalDetail;