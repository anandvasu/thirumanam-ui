import React, {Component} from 'react';
import './PersonalDetail.css'

class PersonalDetail extends Component {

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
                            <select  onChange={this.onChangeRegisteredBy}>
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
                        
                        <div className='rfield'>
                            <input type='text' ></input>
                        </div>                        
                    </div>

                    <div>
                        <div className='rlabel'>
                             <label>Weight</label>
                        </div>
                        
                        <div className='rfield'>
                            <input type='text' ></input>
                        </div>                        
                    </div>

                    <div>
                        <div className='rlabel'>
                             <label>Family Type</label>
                        </div>
                        
                        <div className='rfield'>
                            <select  onChange={this.onChangeRegisteredBy}>
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
                            <select  onChange={this.onChangeRegisteredBy}>
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
                            <select  onChange={this.onChangeRegisteredBy}>
                                <option value="Y">Yes</option>
                                <option value="N">No</option>                                                       
                            </select>
                        </div>                        
                    </div>
                    <hr />
            </div>
        );
    }
}

export default PersonalDetail;