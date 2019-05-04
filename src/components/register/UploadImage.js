import React from 'react';


function uploadImage (props) {
    return(
        <div style={{backgroundColor:'#FFFFFF'}}>
            <div className='header2allborder'>
                <label>Profile Photo</label>
            </div>  
            <div className="sectionDataDiv" style={{paddingBottom:'20px'}}> 
                <div className="hs10" />
                <div>
                    We recommend to upload your photo. Profile with photo receives higher responses.
                </div>                        
                <div className="hs20" />
                <input type="file" onChange={props.imageHandler} />
                <label>
                    <input type="checkbox" id="protectImage" checked={props.protectImage} onChange={props.handleProtectChange}/><b>Protect My Photo(s)</b>
                </label> 
            </div>
        </div>
    );
}

export default uploadImage;