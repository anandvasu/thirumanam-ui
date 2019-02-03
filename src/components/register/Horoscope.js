import React from 'react';

function horoscope (props) {
    return(
        <div style={{backgroundColor:'#FFFFFF'}}>
            <div className='header2allborder'>
                <label>Horoscope</label>
            </div>  
            <div className="sectionDataDiv"> 
                <div className="hs10" />
                <div>
                    We recommend to upload your horoscope. Profile with photo horoscope higher response.
                </div>                        
                <div className="hs20" />
                    <input type="file" onChange={props.horoscopeImageHandler} />
                <div className="hs10" />
            </div>
        </div>
    );
}

export default horoscope;