import React from 'react';

function aboutGroomBride(props) {  
    return (
        <div>
             <div> 
                <div className='header2allborder'>
                        <label>About Groom/Bride</label>
                </div>                
            </div>
            <div className="sectionDataDiv">     
                <div> 
                <div className='rdlabel' style={{verticalAlign:'top'}}>
                            <label>About Groom/Bride</label>
                    </div>
                    
                    <div className='rdfield'>
                        <div>
                            Write about yourself.
                        </div>
                        <div>
                            <textarea rows="5" cols="50" onBlur={props.aboutGroomBrideChange}> 

                            </textarea>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default aboutGroomBride;