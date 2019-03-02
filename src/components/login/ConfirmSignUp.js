import React,{Component} from 'react';
import './ConfirmSignUp.css';
import confirmSignUp from '../../assets/images/confirmSignUp.jpg';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import Constant from '../utils/Constant';
import {toast} from 'react-toastify';
import ApiConstant from '../utils/ApiConstant';

class ConfirmSignUp extends Component {

    constructor() {
        super();

        this.verifyClick = this.verifyClick.bind(this);
        this.codeFocusOut = this.codeFocusOut.bind(this);
        this.resendSingnUpCode = this.resendSingnUpCode.bind(this);

        this.state = {
            username: "",
            code:"",
            success:false
        }
    }

    componentDidMount() {
         console.log("this.props.location.state" + this.props.location.state.username);
         this.setState({
            username:this.props.location.state.username            
         });
     }

    resendSingnUpCode(event) {
        
        axios.post(ApiConstant.IDENTITY_RESEND_ACCESS_CODE, {
            username:this.state.username
        })
        .then((response) => {
            console.log(response);

            toast.success("Confirmation code is sent to your mobile. Please check.", 
                {
                    position:toast.POSITION.TOP_CENTER,
                    hideProgressBar:true,
                    autoClose:3000,
                    testId:20
                });  
           
        }).catch((err) => {
            console.log(err);
            var errMessage = "";
            if (err.code === "InvalidParameterException" || err.name === "InvalidParameterException") {
                errMessage = err.message;
            } else {
                errMessage = "Server Error Occurred. Please try again later."
            }
            
            toast.error(errMessage, 
                {
                    position:toast.POSITION.TOP_CENTER,
                    hideProgressBar:true,
                    autoClose:3000,
                    testId:20
                });          

        });
    }

    verifyClick (event) {

        const codeValue = this.state.code;

        if( codeValue === "") {
            toast.error("Please eenter 6 digit verification code.", 
                {
                    position:toast.POSITION.TOP_CENTER,
                    hideProgressBar:true,
                    autoClose:3000,
                    testId:20
                }); 
        } else {

            axios.post(ApiConstant.IDENTITY_VERIFY_ACCESS_CODE, {
                username:this.state.username,
                accessCode:codeValue
            })
            .then((response) => {
                console.log(response)
                if(response.data.code === Constant.SUCCESS_MESSAGE_CODE_200) {
                    this.setState({
                        success:true
                    })
                    this.props.history.push('/ILogin'); 
                } else  if(response.data.code === Constant.ERR_MESSAGE_CODE_400) {
                    toast.error(response.data.message, 
                        {
                            position:toast.POSITION.TOP_CENTER,
                            hideProgressBar:true,
                            autoClose:3000,
                            testId:20
                        });
                }
            }).catch((err) => {
                console.log(err);
                var errMessage = "";
                if (err.code === "CodeMismatchException" || err.name === "CodeMismatchException") {
                    errMessage = err.message;
                } else {
                    errMessage = "Server Error Occurred. Please try again later."
                }
                
                toast.error(errMessage, 
                    {
                        position:toast.POSITION.TOP_CENTER,
                        hideProgressBar:true,
                        autoClose:3000,
                        testId:20
                    });          

            });
        }
}

    codeFocusOut(event) {
        const codeValue = String.prototype.trim.call(event.target.value);
        if(codeValue !== "" && codeValue.length === 6) {
            this.setState({
                code:event.target.value
            })
        }
    }

    render() {
        return (
            <div className="confirmSignUpContainer">
                <div className="signUpLeft">
                    <img src={confirmSignUp} alt="Not Available"></img>
                </div>
                <div className="signUpRight">
                    <div> <h2>Welcome to Chandramathi Matrimony! </h2> </div>
                    <div> <h3>You hava successfully registered with Chandramathi Matrimony. </h3></div>
                    <div>Please Verify your mobile number to complete your profile registration. You will receive a 6 digit confirmation code via. SMS to </div>
                    <div className="codeParent">
                        <div className='codeDiv'>
                            <input type="text" size="6" maxLength="6" onBlur={this.codeFocusOut} />
                        </div>
                        <div className='codeButtonDiv'>
                            <button onClick={this.verifyClick}>Verify</button> 
                        </div>
                        <div className="paddingTop10">Don't receive code yet? <a href="#" onClick={this.resendSingnUpCode}> <b><u>Resend Code</u></b></a> </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ConfirmSignUp;