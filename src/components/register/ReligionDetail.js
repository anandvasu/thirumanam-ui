import React from 'react';
import CasteSelect from '../utils/CasteSelect';
import GothramSelect from '../utils/GothramSelect';

function religionDetail(props) {     
        
    return(
        <div className="rdlcontaniner" style={{backgroundColor:'#FFFFFF'}}>

            <div> 
                <div className='header2allborder'>
                    <label>Religion Detail</label>
                </div>               
            </div>

            <div className="sectionDataDiv">    
                <div className="hs10" />
                <div>
                    <div className='rdlabel'>
                        <label>Caste</label>
                    </div>            
                    <div className='rdfield'>
                        <CasteSelect 
                            casteChangeHandler = {props.casteChangeHandler}           
                            caste = {props.caste}                
                        />
                    </div>                        
                </div>

                <div>
                    <div className='rdlabel'>
                        <label>Sub Caste</label>
                    </div>            
                    <div className='rdfield'>
                        <input type="text" />
                    </div>                        
                </div>

                <div>
                    <div className='rdlabel'>
                        <label>Sub Caste</label>
                    </div>            
                    <div className='rdfield'>
                        <GothramSelect 
                            profileStateChange = {props.profileStateChange}           
                            pstate = {props.pstate}                
                        />
                    </div>                        
                </div>
                <div className="hs10" />
            </div>           
        </div>
    ) ;
}

export default religionDetail;