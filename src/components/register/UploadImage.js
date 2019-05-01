import React from 'react';


function uploadImage (props) {
    return(
        <div style={{backgroundColor:'#FFFFFF'}}>
            <div className='header2allborder'>
                <label>Profile Photo</label>
            </div>  
            <div className="sectionDataDiv"> 
                <div className="hs10" />
                <div>
                    We recommend to upload your photo. Profile with photo receives higher responses.
                </div>                        
                <div className="hs20" />
                    <input type="file" onChange={props.imageHandler} />
                <div className="hs10" />               
            </div>
        </div>
    );
}

export default uploadImage;