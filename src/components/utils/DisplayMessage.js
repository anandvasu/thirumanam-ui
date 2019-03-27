import React from 'react';
import closeImage from '../../assets/images/close.png';
import Constant from './Constant';

function displayMessage(props) {     
        
        return(
            <div>
                 <div className="featureProfileCloseDiv" style={{width:'98%', textAlign:'right',paddingTop:'20px'}}>
                    <img src={closeImage} alt="Not Available" width="300px" height="400px" onClick={props.closeModel} width="20px" height="20px"></img>
                </div>
               <div>
                   <label>{props.message}</label>
               </div>
               { (sessionStorage.getItem(Constant.IMAGE_EXISTS) === Constant.NO) && 
                    <div style={{paddingTop:'20px'}}>
                        <div>
                            Hello! {sessionStorage.getItem(Constant.USER_FIRST_NAME)}, If you add profile photo, there are higher chances of accepting your request.  
                        </div>
                        <div>
                            <a href="">Upload Profile Photo</a>
                        </div>  
                    </div>
               }
               <div style={{paddingTop:'20px'}}>
                    <button onClick={props.closeModel}>Close</button>
               </div>
            </div>
        ) ;
}

export default displayMessage;