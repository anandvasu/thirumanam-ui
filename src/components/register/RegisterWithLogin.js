import React,{Component} from 'react';
import Register from './Register';

class RegisterWithLogin extends Component {

    render (){
        return(
                <div className="rwlogincontainer">
                    <Register />
                    <div className="hs10" />
                    <hr />
                    <div>
                        <label>Registered Already? Login</label>
                    </div>
           </div>
        );
    }
}

export default RegisterWithLogin;