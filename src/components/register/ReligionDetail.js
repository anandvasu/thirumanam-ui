import React from 'react';
import CasteSelect from '../utils/CasteSelect';
import DhoshamSelect from '../utils/DhoshamSelect';
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
                <div id="hinduCaste">
                    <div className='rdlabel'>
                        <label>Caste</label>
                    </div>            
                    <div className='rdfield'>
                        <CasteSelect 
                            casteObj = {props.casteObj}       
                            hinduCasteChange = {props.hinduCasteChange}                           
                        />
                    </div>                        
                </div>

                <div id="otherCaste">
                    <div className='rdlabel'>
                        <label>Caste</label>
                    </div>            
                    <div className='rdfield'>
                        <input type="text" onBlur={props.OtherCasteChange} />                        
                    </div>                        
                </div>

                <div>
                    <div className='rdlabel'>
                        <label>Sub Caste</label>
                    </div>            
                    <div className='rdfield'>
                        <input type="text" onBlur={props.subCasteChange} />
                    </div>                        
                </div>

                <div id="hinduGothram">
                    <div className='rdlabel'>
                        <label>Gothra(m)</label>
                    </div>            
                    <div className='rdfield'>
                        <GothramSelect 
                            gothramObj = {props.gothramObj}
                            hinduGothramChange = {props.hinduGothramChange}              
                        />
                    </div>                        
                </div>

                <div id="otherGothram">
                    <div className='rdlabel'>
                        <label>Gothra(m)</label>
                    </div>            
                    <div className='rdfield'>
                        <input type="text" onBlur={props.OtherCasteChange} />                        
                    </div>                        
                </div>
                <div id="hinduDhosham">
                    <div className='rdlabel'>
                        <label>Dosham</label>
                    </div>            
                    <div className='rdfield'>
                        <DhoshamSelect 
                            dhoshamObj = {props.dhoshamObj}
                            hinduDhoshamChange = {props.hinduDhoshamChange}          
                        />
                    </div>                        
                </div>

                <div id="otherDhosham">
                    <div className='rdlabel'>
                        <label>Dosham</label>
                    </div>            
                    <div className='rdfield'>
                        <input type="text" onBlur={props.OtherCasteChange} />                        
                    </div>                        
                </div>
                <div className="hs10" />
            </div>           
        </div>
    ) ;
}

export default religionDetail;