import React from 'react';
import CasteSelect from '../utils/CasteSelect';
import DhoshamSelect from '../utils/DhoshamSelect';
import GothramSelect from '../utils/GothramSelect';

function religionDetail(props) {     
        
    return(
        <div className="sectionParentDiv">

            <div> 
                <div className='header2allborder'>
                    <label>Religion Detail</label>
                </div>               
            </div>

            <div className="sectionDataDiv">    
                <div className="hs10" />
                <div id="caste" className="gFieldRow">
                    <div className='rdlabel'>
                        <label>Caste</label>
                    </div>            
                    <div className='rdfield'>
                        <CasteSelect 
                            casteObj = {props.casteObj}       
                            casteChange = {props.casteChange}  
                            religionObj = {props.religionObj}                         
                            religion = {props.religion}   
                        />
                    </div>                        
                </div>

                <div id="otherCaste" className="gFieldRow">
                    <div className='rdlabel'>
                        <label>Caste</label>
                    </div>            
                    <div className='rdfield'>
                        <input type="text" onBlur={props.OtherCasteChange} />                        
                    </div>                        
                </div>

                <div className="gFieldRow">
                    <div className='rdlabel'>
                        <label>Sub Caste</label>
                    </div>            
                    <div className='rdfield'>
                        <input type="text" onBlur={props.subCasteChange} defaultValue={props.subcaste}/>
                    </div>                        
                </div>

                <div id="gothram" className="gFieldRow">
                    <div className='rdlabel'>
                        <label>Gothra(m)</label>
                    </div>            
                    <div className='rdfield'>
                        <GothramSelect 
                            gothramObj = {props.gothramObj}
                            gothramChange = {props.gothramChange}              
                        />
                    </div>                        
                </div>

                <div id="otherGothram" className="gFieldRow">
                    <div className='rdlabel'>
                        <label>Gothra(m)</label>
                    </div>            
                    <div className='rdfield'>
                        <input type="text" onBlur={props.otherGothramChange} />                        
                    </div>                        
                </div>
                <div id="hinduDhosham" className="gFieldRow">
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

                <div id="otherDhosham" className="gFieldRow">
                    <div className='rdlabel'>
                        <label>Dosham</label>
                    </div>            
                    <div className='rdfield'>
                        <input type="text" onBlur={props.otherDhoshamChange} />                        
                    </div>                        
                </div>
                <div className="hs10" />
            </div>           
        </div>
    ) ;
}

export default religionDetail;