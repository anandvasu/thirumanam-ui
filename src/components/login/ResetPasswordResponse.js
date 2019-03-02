import React from 'react';
import confirmSignUp from '../../assets/images/confirmSignUp.jpg';

function resetPasswordResponse(props) {
    return (
        <div className="confirmSignUpContainer">
            <div className="signUpLeft">
                <img src={confirmSignUp} alt="Not Available"></img>
            </div>
            <div className="signUpRight">
                <div> <h2>Recover Password </h2> </div>
                
                <div> <h2>Password has been updated successfully. Please Login to Continue. </h2> </div>

                <div className="codeParent">     
                    <div className="paddingTop10"> 
                        <button onClick={() => props.history.push("/ilogin")} >Login</button> </div>
                    </div>
            </div>
        </div>
    );
}

export default resetPasswordResponse;