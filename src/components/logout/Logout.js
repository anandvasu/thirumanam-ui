import React from 'react';
import confirmSignUp from '../../assets/images/confirmSignUp.jpg';
import Constant from '../utils/Constant';

function logout(props) {

    sessionStorage.clear();

    return(
        <div className="confirmSignUpContainer">
        <div className="signUpLeft">
            <img src={confirmSignUp} alt="Not Available"></img>
        </div>
        <div className="signUpRight">
            <div> You have successfully logged out.</div>  
            {  (localStorage.getItem(Constant.USER_REFERESH_TOKEN) != null &&
                localStorage.getItem(Constant.USER_REFERESH_TOKEN) != "undefined") &&
                <div>
                    <div> You have "Remember me" enabled. Do you want clear it? </div> 
                    <div> <a href="#" onClick={() => localStorage.clear()}> Clear Remember Me</a></div>
                </div>     
            }
            <div className="codeParent">     
                <div className="paddingTop10"> 
                    <button onClick={() => props.history.push("/ilogin")} >Login</button> </div>
                </div>
            </div>
    </div>
    ) ;
}

export default logout;