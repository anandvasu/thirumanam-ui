import React from 'react';
import MaritalStatusSelect from '../utils/MaritalStatusSelect';

function completePersonalDetail (props) {

    console.log("mStatus:" + props.mStatus);
    return (
        <div className="sectionParentDiv">
            <div> 
                <div className='header2allborder'>
                        <label>Personal Information</label>
                </div>              
            </div> 

            <div className="sectionDataDiv">         

            <div>
                <div className='rdlabel'>
                        <label>First Name</label>
                </div>
                
                <div className='rdfield'>
                    <div className='fieldLen200'>
                        <input type='text' onBlur={props.firstNameChange} defaultValue={props.firstName} />  
                    </div> 
                </div>                        
            </div>

            <div>
                <div className='rdlabel'>
                        <label>Last Name</label>
                </div>
                
                <div className='rdfield'>
                    <div className='fieldLen200'>
                        <input type='text' onBlur={props.lastNameChange} defaultValue={props.lastName}/> 
                    </div> 
                </div>                        
            </div>

            <div>
                <div className='rdlabel'>
                    <label>Data of birth</label>
                </div>
                <div className='rdfield'>
                    <select onChange={props.bDayChange} value={props.bDay}>
                        <option value="DD">DD</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>&nbsp;&nbsp;
                    <select onChange={props.bMonthChange} value={props.bMonth}>
                        <option value="MM">MM</option>
                        <option value="1">Jan</option>
                        <option value="2">Feb</option>
                        <option value="3">Mar</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">Jun</option>
                        <option value="7">July</option>
                        <option value="8">Aug</option>
                        <option value="9">Sep</option>
                        <option value="10">Oct</option>
                        <option value="11">Nov</option>
                        <option value="12">Dec</option>
                    </select>&nbsp;&nbsp;
                    <select onChange={props.bYearChange} value={props.bYear}>
                        <option value="YEAR">YEAR</option>
                        <option value="2000">2000</option>
                        <option value="1999">1999</option>
                        <option value="1998">1998</option>
                        <option value="1997">1997</option>
                        <option value="1996">1996</option>
                        <option value="1995">1995</option>
                        <option value="1994">1994</option>
                        <option value="1993">1993</option>
                        <option value="1992">1992</option>
                        <option value="1991">1991</option>
                        <option value="1990">1990</option>
                        <option value="1989">1989</option>
                        <option value="1988">1988</option>
                        <option value="1987">1987</option>
                        <option value="1986">1986</option>
                        <option value="1985">1985</option>
                        <option value="1984">1984</option>
                        <option value="1983">1983</option>
                        <option value="1982">1982</option>
                        <option value="1981">1981</option>
                        <option value="1980">1980</option>
                        <option value="1979">1979</option>
                        <option value="1978">1978</option>
                        <option value="1977">1977</option>
                        <option value="1976">1976</option>
                        <option value="1975">1975</option>
                        <option value="1974">1974</option>
                        <option value="1973">1973</option>
                        <option value="1972">1972</option>
                        <option value="1971">1971</option>
                        <option value="1970">1970</option>
                    </select>
                </div>
            </div>

            <div>
                <div className='rdlabel'>
                        <label>Email</label>
                </div>
                
                <div className='rdfield'>
                    <div className='fieldLen200'>
                        <input type='text' onChange={props.emailChange} defaultValue={props.email}/> 
                    </div> 
                </div>                        
            </div>

            <div>                         
                <div className='rdlabel'>
                        <label>Marital Status</label>
                </div>
                <div className='rdfield'>                   
                    <MaritalStatusSelect 
                        maritalStatusChange = {props.mStatusChange}
                        mStatus = {props.mStatus}
                    />
                </div>
            </div>

                     <div>

                        <div className='rdlabel'>
                             <label>Height</label>
                        </div>

                        <div className='rdfield'>
                            <select id="rdInchHeight" onChange={props.heightChange} value={props.heightInch}>
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
                             <select id="rdCmHeight" onChange={props.heightChange} value={props.heightCm}>
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
                            <div className='fieldLen200'>
                                <div className='fieldLen100' style={{display:'inline-block'}}>
                                    <input type='text' onChange={props.weightChange} defaultValue={props.weight}/> 
                                </div>
                                <div style={{display:'inline-block',textAlign:'right',width:'40px'}}>
                                    Kg 
                                </div>                               
                            </div>
                        </div>                        
                    </div>

                    <div>
                        <div className='rdlabel'>
                             <label>Family Type</label>
                        </div>
                        
                        <div className='rdfield'>
                            <select  onChange={props.familyTypeChange} value={props.familyType}>
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
                            <select  onChange={props.familyValueChange} value={props.familyValue}>
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
                            <select  onChange={props.foodHabitChange} value={props.foodHabit}>
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
                            <select  onChange={props.bodyTypeChange} value={props.bodyType}>
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
                            <select  onChange={props.disabledChange} value={props.disabled}>
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

export default completePersonalDetail;