import React from 'react';
import confirmSignUp from '../../assets/images/confirmSignUp.jpg';

function logout(props) {

    sessionStorage.clear();

    return(
        <div className="confirmSignUpContainer">
        <div className="signUpLeft">
            <img src={confirmSignUp} alt="Not Available"></img>
        </div>
        <div className="signUpRight">
            <div> You have successfully logged out.</div>
            <div className="codeParent">     
                <div className="paddingTop10"> 
                    <button onClick={() => props.history.push("/ilogin")} >Login</button> </div>
                </div>
        </div>
    </div>
    ) ;
}

export default logout;