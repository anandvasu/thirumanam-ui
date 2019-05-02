import React from 'react';
import EducationSelect from '../utils/EducationSelect';
import EmploymentRadio from '../utils/EmploymentRadio';
import OccupationSelect from '../utils/OccupationSelect';
import IncomeSelect from '../utils/IncomeSelect';

function profDetail (props) {
    return (
        <div className="sectionParentDiv">
            <div> 
                <div className='header2allborder'>
                        <label>Professional Information</label>
                </div>                
            </div>

            <div className="sectionDataDiv">     
                <div className="gFieldRow" style={{paddingTop:'10px'}}>                         
                    <div className='rdlabel'>
                            <label>Education</label>
                    </div>
                    
                    <div className='rdfield'>
                        <EducationSelect 
                            educationObj = {props.educationObj}
                            handleEducationChange = {props.handleEducationChange}
                        />
                    </div>
                </div>

                <div className="gFieldRow" style={{paddingTop:'5px', paddingBottom:'5px'}}>
                    <div className='rdlabel' style={{verticalAlign:'top'}}>
                            <label>Employment</label>
                    </div>                    
                    <div className='rdfield'>                   
                        <EmploymentRadio 
                            handleEmploymentChange = {props.handleEmploymentChange}
                            employment = {props.employment}
                        />
                    </div>                        
                </div>

                <div className="gFieldRow">
                    <div className='rdlabel'>
                            <label>Occupation</label>
                    </div>                    
                    <div className='rdfield'>
                        <div className="rdfield">  
                            <OccupationSelect 
                                occupationObj = {props.occupationObj}
                                handleOccupationChange = {props.handleOccupationChange}
                            />
                        </div>
                    </div>                        
                </div>

                <div className="gFieldRow">
                    <div className='rdlabel'>
                            <label>Income (Indian Rs.)</label>
                    </div>                    
                    <div className='rdfield'>
                        <div className="rdfield">   
                            <IncomeSelect 
                                incomeObj = {props.incomeObj}
                                handleIncomeChange = {props.handleIncomeChange}
                            />                    
                        </div>
                    </div>                        
                </div>
                <div className="hs10" />
            </div>
        </div>
    );
}


export default profDetail;