import React,{Component} from 'react';
import './ConfirmSignUp.css';
import confirmSignUp from '../../assets/images/confirmSignUp.jpg';
import {Auth} from 'aws-amplify';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';

class ILogin extends Component {

    constructor() {
        super();

        this.login = this.login.bind(this);

        this.state = {
            success:false
        }
    }

    login(event) {
        
       
    }

    render() {
        return (
            <div className="confirmSignUpContainer">
                <div className="signUpLeft">
                    <img src={confirmSignUp} alt="Not Available"></img>
                </div>
                <div className="signUpRight">
                    <div> <h2>Welcome to Chandramathi Matrimony! </h2> </div>
                    <div> <h3>You hava successfully confirmed the code. Please login to continue. </h3></div>
                   
                    <div className="codeParent">
                        <div className='lfield'>
                            <input type='text'  onChange={this.onChangeEmail} 
                            defaultValue="Email or Phone" onFocus={this.emailFocus} onBlur={this.emailFocusOut}></input>
                        </div>
                        <div className='lfield'>
                            <input type='text' onChange={this.onChangePassword} 
                                defaultValue="Password" onFocus={this.passwordFocus} onBlur={this.passwordFocusOut}></input>
                        </div>
                        <div className='lfield'>
                            <button onClick={this.loginClick}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ILogin;