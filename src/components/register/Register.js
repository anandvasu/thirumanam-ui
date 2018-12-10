import React,{Component} from 'react';
import './Register.css';
import axios from 'axios';
import {Redirect} from "react-router-dom";
import {toast} from 'react-toastify';
import {Auth} from 'aws-amplify';
import 'react-toastify/dist/ReactToastify.css';
import Constant from '../../Constant';

class Register extends Component {

    constructor(props) {
        super(props);

        this.onChangeFirst = this.onChangeFirst.bind(this);
        this.onChangeLast = this.onChangeLast.bind(this);
        this.onChangeMobile = this.onChangeMobile.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeDay = this.onChangeDay.bind(this);
        this.onChangeMonth = this.onChangeMonth.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.register = this.register.bind(this);
        this.genderChange = this.genderChange.bind(this);
        this.onChangeRegisteredBy = this.onChangeRegisteredBy.bind(this);        
        
        this.state = {
            first:"",
            last:"",
            bday:"",
            bmonth:"",
            byear:"",
            mobile:"",
            email:"",
            password:"",
            gender:"",
            registerBy:"self",
            profileId:"",
            registersuccess:false           
        }
    }

    onChangeRegisteredBy(event) {
        this.setState({registerBy:event.target.value});
    }

    genderChange(event) {
        this.setState({gender:event.target.value});
    }

    onChangeFirst(event){
        this.setState({first:event.target.value});
    }

    onChangeLast(event){
        this.setState({last:event.target.value});
    }

    onChangeMobile(event){
        this.setState({mobile:event.target.value});
    }

    onChangeEmail(event){
        this.setState({email:event.target.value});
    }

    onChangePassword(event){
        this.setState({password:event.target.value});
    }

    onChangeDay(event){
        this.setState({bday:event.target.value});
    }

    onChangeMonth(event){
        this.setState({bmonth:event.target.value});
    }

    onChangeYear(event){
        this.setState({byear:event.target.value});
    }

    register(event) {

        var errorMessage = "";

        if (this.state.first === "") {
            errorMessage = "Please enter First Name.";           
        } else if (this.state.last === "") {
            errorMessage = "Please enter Last Name."; 
        } else if (this.state.bday === "" || this.state.byear === "" || this.state.byear === "") {
            errorMessage = "Please enter Data of birth."; 
        } else if (this.state.mobile === "") {
            errorMessage = "Please enter Mobile Number"; 
        } else if (this.state.gender === "") {
            errorMessage = "Please enter Gender."; 
        } else if (this.state.email === "") {
            errorMessage = "Please enter Email."; 
        } else if (this.state.password === "") {
            errorMessage = "Please enter Password."; 
        } 

        if (errorMessage === "") {
            axios.post('http://localhost:8080/thirumanam/user/register',
                    { 
                        firstName:this.state.first,
                        lastName:this.state.last,
                        dob:this.state.bmonth+"/"+this.state.bday+"/"+this.state.byear,
                        email:this.state.email,
                        gender: this.state.gender,
                        mobile: this.state.mobile,
                        registerBy: this.state.registerBy
                    })
            .then((res) => {
                console.log(res);

                this.setState({
                    registersuccess:true,
                    profileId:res.data.code
                });

             /*   Auth.signUp(
                    {
                        username:this.state.email,
                        password:this.state.password,
                        attributes: {
                            email:this.state.email,
                            phone_number:this.state.mobile,
                            family_name:this.state.last,
                            given_name:this.state.first
                        },
                        
                    }
                ) .then((res) => {
                    this.setState({
                        registersuccess:true,
                        profileId:res.data.code
                    });
                  
                }) .catch((error) => {
                    console.log(error);
                    if (! toast.isActive(this.toastId)) {
                        toast.error(error.message, 
                            {
                                position:toast.POSITION.TOP_CENTER,
                                hideProgressBar:true,
                                autoClose:3000,
                                toastId:Constant.toastIdErr
                            });
                    }
                
                }); */
                
            })
            .catch((error) => {
                console.log("before error");
                console.log(error);
                if (! toast.isActive(this.toastId)) {
                    toast.error(error.response.data.message, 
                        {
                            position:toast.POSITION.TOP_CENTER,
                            hideProgressBar:true,
                            autoClose:3000,
                            toastId:Constant.toastIdErr
                        });
                }
            
            });
        } else {
            if (! toast.isActive(this.toastId)) {
                toast.error(errorMessage, 
                    {
                        position:toast.POSITION.TOP_CENTER,
                        hideProgressBar:true,
                        autoClose:3000,
                        toastId:Constant.toastIdErr
                    });
            }
        }
    }

    render () {

        if (this.state.registersuccess === true) {
            return <Redirect to= {{
                                    pathname:'/register' ,
                                    state:{
                                        profileId:this.state.profileId
                                    }                                   
                                 }}/>
        }

        return (
            <div className='rcontainer'>             
                <div className='ricontainer'>
                     <div className="rHeading">
                        FREE Registration
                    </div>
                    
                    <div>
                        <div className='rlabel'>
                             <label>Registered By </label>
                        </div>
                        
                        <div className='rfield'>
                            <select onChange={this.onChangeRegisteredBy}>
                                <option value="S" selected>self</option>
                                <option value="F">Father</option>
                                <option value="M">Mother</option>                            
                            </select>
                        </div>
                    </div>
                    <div>
                        <div className='rlabel'>
                            <label>First Name</label>
                        </div>
                        <div className='rfield'>
                            <input type='text'  onChange={this.onChangeFirst}></input>
                        </div>
                    </div>
                    <div>
                        <div className='rlabel'>
                            <label> Last Name</label>
                        </div>
                        <div className='rfield'>
                            <input type='text' onChange={this.onChangeLast}></input>
                        </div>
                    </div>
                    <div>
                        <div className='rlabel'>
                            <label>Data of birth</label>
                        </div>
                        <div className='rfield'>
                            <select onChange={this.onChangeDay}>
                                <option value="DD" selected>DD</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>&nbsp;&nbsp;
                            <select onChange={this.onChangeMonth}>
                                <option value="MM" selected>MM</option>
                                <option value="1">Jan</option>
                                <option value="2">Feb</option>
                                <option value="3">Mar</option>
                                <option value="4">April</option>
                                <option value="5">May</option>
                                <option value="6">Jun</option>
                                <option value="7">July</option>
                                <option value="8">Aug</option>
                                <option value="9">Sep</option>
                                <option value="10">Oct</option>
                                <option value="11">Nov</option>
                                <option value="12">Dec</option>
                            </select>&nbsp;&nbsp;
                            <select onChange={this.onChangeYear}>
                                <option value="YEAR" selected>YEAR</option>
                                <option value="2000">2000</option>
                                <option value="1999">1999</option>
                                <option value="1998">1998</option>
                                <option value="1997">1997</option>
                                <option value="1996">1996</option>
                                <option value="1995">1995</option>
                                <option value="1994">1994</option>
                                <option value="1993">1993</option>
                                <option value="1992">1992</option>
                                <option value="1991">1991</option>
                                <option value="1990">1990</option>
                                <option value="1989">1989</option>
                                <option value="1988">1988</option>
                                <option value="1987">1987</option>
                                <option value="1986">1986</option>
                                <option value="1985">1985</option>
                                <option value="1984">1984</option>
                                <option value="1983">1983</option>
                                <option value="1982">1982</option>
                                <option value="1981">1981</option>
                                <option value="1980">1980</option>
                                <option value="1979">1979</option>
                                <option value="1978">1978</option>
                                <option value="1977">1977</option>
                                <option value="1976">1976</option>
                                <option value="1975">1975</option>
                                <option value="1974">1974</option>
                                <option value="1973">1973</option>
                                <option value="1972">1972</option>
                                <option value="1971">1971</option>
                                <option value="1970">1970</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div className='rlabel'>
                            <label>Religion</label>
                        </div>
                        <div className='rfield'>
                            <select onChange={this.onChangeDay}>
                                <option value="H" selected>Hindu</option>                                                 
                            </select>&nbsp;&nbsp;
                        </div>
                    </div>
                    <div>
                        <div className='rlabel'>
                            <label>Caste</label>
                        </div>
                        <div className='rfield'>
                            <select onChange={this.onChangeDay}>
                                <option selected>Vanniyar</option>                                                 
                            </select>&nbsp;&nbsp;
                        </div>
                    </div>
                    <div>
                        <div className='rlabel'>
                            <label>Mobile Number</label>
                        </div>
                        <div className='rfield'>
                            <input type='text'  onChange={this.onChangeMobile}></input>
                        </div>
                    </div>
                    <div>
                        <div className='rlabel'>
                            <label>Gender</label>
                        </div>
                        <div className='rfield'>        
                            <input type="radio" name='gender' value="M" onChange={this.genderChange}/>
                            <label>
                                Male
                            </label>                
                            <input type="radio" name='gender' value="F" onChange={this.genderChange}/>
                            <label>
                                Female
                            </label>
                        </div>
                    </div>
                    <div>
                        <div className='rlabel'>
                            <label>Email</label>
                        </div>
                        <div className='rfield'>
                            <input type='text'  onChange={this.onChangeEmail}></input>
                        </div>
                    </div>
                    <div>
                        <div className='rlabel'>
                            <label>Password</label>
                        </div>
                        <div className='rfield'>
                            <input type='password'  onChange={this.onChangePassword}></input>
                        </div>
                    </div>                  
                    <div className="hs10" />
                    <div className="rbTandButton">
                         <div className='tandc'>
                            <input type="checkbox" />I have read and agree to the <b><u>T&amp;C</u></b> and <b><u>Privacy Policy</u></b>
                        </div>
                        <div className='registerButton'>
                            <button onClick={this.register} >Register</button>
                        </div>
                    </div>
                </div>                
            </div>
        );
    }
}

export default Register;