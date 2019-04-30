import React,{Component} from 'react';
import Register from './Register';

class RegisterWithLogin extends Component {

    refreshFooter() {

    }

    render (){
        return(
                <div className="rwlogincontainer">
                    <Register 
                         refreshFooter = {this.refreshFooter}
                         fromHome="true"
                         labelClassName="rlabel"
                         fieldClassName="rfield"
                         rowClassName="rrow"
                    />
                    <div className="hs10" />
                    <hr />
                    <div>
                        <label>Registered Already? <a href="#" onClick={() => this.props.loginClick()}>Login</a></label>
                    </div>
           </div>
        );
    }
}

export default RegisterWithLogin;