import React from 'react';

function profDetail (props) {
    return (
        <div className="rdpcontaniner" style={{backgroundColor:'#FFFFFF'}}>
            <div> 
                <div className='header2allborder'>
                        <label>Professional Information</label>
                </div>                
            </div>

            <div className="sectionDataDiv">     
                <div>                         
                    <div className='rdlabel'>
                            <label>Education</label>
                    </div>
                    
                    <div className='rdfield'>
                        <select  onChange={props.educationChange} value={props.education}>
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
                    <select  onChange={props.employmentChange} value={props.employment}>
                            <option value="">--Select--</option>
                            <option value="G">Government</option>
                            <option value="P">Private</option>
                            <option value="B">Business</option> 
                            <option value="D">Defence</option> 
                            <option value="S">Self Employed</option>    
                            <option value="N">Not Working</option>                            
                        </select>
                    </div>                        
                </div>

                <div>
                    <div className='rdlabel'>
                            <label>Income</label>
                    </div>                    
                    <div className='rdfield'>
                        <div className="fieldLen200"> 
                            <input type="text" onBlur={props.incomeChange} defaultValue={props.income}/>                         
                        </div>
                    </div>                        
                </div>
                <div className="hs10" />
            </div>
        </div>
    );
}


export default profDetail;