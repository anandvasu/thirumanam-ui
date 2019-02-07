import React,{Component} from 'react';
import './Register.css';
import axios from 'axios';
import {Redirect} from "react-router-dom";
import {toast} from 'react-toastify';
import {Auth} from 'aws-amplify';
import 'react-toastify/dist/ReactToastify.css';
import Constant from '../utils/Constant';
import ApiConstant from '../utils/ApiConstant';
import ReligionSelect from '../utils/ReligionSelect';
import {populateArray} from '../utils/Util';
import {getValueFromReactSelect} from '../utils/Util';

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
        this.onChangeCountryCode = this.onChangeCountryCode.bind(this);   
        this.religionChangeHandler = this.religionChangeHandler.bind(this);         
        
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
            countryCode:"+91",
            registersuccess:false,
            religionValue:0,
            religion:[]          
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

    onChangeCountryCode(event){
        this.setState({countryCode:event.target.value});
    }

    religionChangeHandler(valueObj) {
        this.setState({
            religion:populateArray(valueObj),
            religionValue:valueObj.value
        });
    }

    register(event) {

        var errorMessage = "";
        var externalIdValue = "";

        if (this.state.first === "") {
            errorMessage = "Please enter First Name.";           
        } else if (this.state.last === "") {
            errorMessage = "Please enter Last Name."; 
        } else if (this.state.bday === "" || this.state.byear === "" || this.state.byear === "") {
            errorMessage = "Please enter Data of birth."; 
        } else if (this.state.religionValue === 0) {
            errorMessage = "Please select Religion."; 
        } else if (this.state.mobile === "") {
            errorMessage = "Please enter Mobile Number"; 
        } else if (this.state.gender === "") {
            errorMessage = "Please enter Gender."; 
        } else if (this.state.email === "") {
            errorMessage = "Please enter Email."; 
        } else if (this.state.password === "") {
            errorMessage = "Please enter Password."; 
        } else if (document.getElementById("tcondition").checked === false) {
            errorMessage = "Please read TandC.";
        }

        if (errorMessage === "") {
            Auth.signUp(
                {
                    username:this.state.email,
                    password:this.state.password,
                    attributes: {
                        email:this.state.email,
                        phone_number:this.state.countryCode + this.state.mobile,
                        family_name:this.state.last,
                        given_name:this.state.first
                    },
                    
                }
            )    
            .then((res) => {
                console.log(res);             
                externalIdValue = res.userSub;   
                console.log(externalIdValue);
                axios.post(ApiConstant.USER_REGISTER_API,
                { 
                    firstName:this.state.first,
                    lastName:this.state.last,
                    dob:this.state.bmonth+"/"+this.state.bday+"/"+this.state.byear,
                    email:this.state.email,
                    gender: this.state.gender,
                    religion:this.state.religionValue,
                    mobile: this.state.countryCode + this.state.mobile,
                    registerBy: this.state.registerBy,
                    externalId: externalIdValue
                }) .then((res) => {
                    this.setState({
                        profileId:res.data.code,
                        registersuccess:true
                    });
                  
                }) .catch((error) => {
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
            })
            .catch((error) => {
                console.log("before error");
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
                        pathname:'/updatePersonal' ,
                        state:{
                            profileId:this.state.profileId,
                            email:this.state.email,
                            religion:this.state.religionValue
                        }                                   
                    }}/>
        }

        return (
                <div className='ricontainer'>
                     <div className="rHeading">
                        FREE Registration
                    </div>
                    
                    <div>
                        <div className='rlabel'>
                             <label>Registered By </label>
                        </div>
                        
                        <div className='rfield'>
                            <select onChange={this.onChangeRegisteredBy} defaultValue="S">
                                <option value="S">self</option>
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
                            <select onChange={this.onChangeDay} defaultValue="DD">
                                <option value="DD">DD</option>
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
                            <select onChange={this.onChangeMonth} defaultValue="MM">
                                <option value="MM">MM</option>
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
                            <select onChange={this.onChangeYear} defaultValue="YEAR">
                                <option value="YEAR">YEAR</option>
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
                            <ReligionSelect 
                                 religions = {this.state.religion}
                                 religionChangeHandler = {this.religionChangeHandler}                                
                            />
                        </div>
                    </div>                   
                    <div>
                        <div className='rlabel'>                           
                            <label>Mobile Number</label>
                        </div>
                        <div className='rfield'>
                            <select onChange={this.onChangeCountryCode} style={{width:'97px'}} defaultValue="+91">
                            <option value='+93'>Afghanistan(+93)</option>
                                <option value='+355'>Albania(+355)</option>
                                <option value='+213'>Algeria(+213)</option>
                                <option value='+1-684'>American Samoa(+1-684)</option>
                                <option value='+376'>Andorra(+376)</option>
                                <option value='+244'>Angola(+244)</option>
                                <option value='+1-264'>Anguilla(+1-264)</option>
                                <option value='+672'>Antarctica(+672)</option>
                                <option value='+1-268'>Antigua and Barbuda(+1-268)</option>
                                <option value='+54'>Argentina(+54)</option>
                                <option value='+374'>Armenia(+374)</option>
                                <option value='+297'>Aruba(+297)</option>
                                <option value='+61'>Australia(+61)</option>
                                <option value='+43'>Austria(+43)</option>
                                <option value='+994'>Azerbaijan(+994)</option>
                                <option value='+1-242'>Bahamas(+1-242)</option>
                                <option value='+973'>Bahrain(+973)</option>
                                <option value='+880'>Bangladesh(+880)</option>
                                <option value='+1-246'>Barbados(+1-246)</option>
                                <option value='+375'>Belarus(+375)</option>
                                <option value='+32'>Belgium(+32)</option>
                                <option value='+501'>Belize(+501)</option>
                                <option value='+229'>Benin(+229)</option>
                                <option value='+1-441'>Bermuda(+1-441)</option>
                                <option value='+975'>Bhutan(+975)</option>
                                <option value='+591'>Bolivia(+591)</option>
                                <option value='+387'>Bosnia and Herzegovina(+387)</option>
                                <option value='+267'>Botswana(+267)</option>
                                <option value='+55'>Brazil(+55)</option>
                                <option value='+673'>Brunei Darussalam(+673)</option>
                                <option value='+359'>Bulgaria(+359)</option>
                                <option value='+226'>Burkina Faso(+226)</option>
                                <option value='+257'>Burundi(+257)</option>
                                <option value='+855'>Cambodia(+855)</option>
                                <option value='+237'>Cameroon(+237)</option>
                                <option value='+1'>Canada(+1)</option>
                                <option value='+238'>Cape Verde(+238)</option>
                                <option value='+1-345'>Cayman Islands(+1-345)</option>
                                <option value='+236'>Central African Republic(+236)</option>
                                <option value='+235'>Chad(+235)</option>
                                <option value='+56'>Chile(+56)</option>
                                <option value='+86'>China(+86)</option>
                                <option value='+852'>Hong Kong, SAR China(+852)</option>
                                <option value='+853'>Macao, SAR China(+853)</option>
                                <option value='+53'>Christmas Island(+53)</option>
                                <option value='+61'>Cocos (Keeling) Islands(+61)</option>
                                <option value='+57'>Colombia(+57)</option>
                                <option value='+269'>Comoros(+269)</option>
                                <option value='+242'>Congo (Brazzaville)(+242)</option>
                                <option value='+243'>Congo, (Kinshasa)(+243)</option>
                                <option value='+682'>Cook Islands(+682)</option>
                                <option value='+506'>Costa Rica(+506)</option>
                                <option value='+225'>Côte d'Ivoire(+225)</option>
                                <option value='+385'>Croatia(+385)</option>
                                <option value='+53'>Cuba(+53)</option>
                                <option value='+357'>Cyprus(+357)</option>
                                <option value='+420'>Czech Republic(+420)</option>
                                <option value='+45'>Denmark(+45)</option>
                                <option value='+253'>Djibouti(+253)</option>
                                <option value='+1-767'>Dominica(+1-767)</option>
                                <option value='+1-809 and +1-829  '>Dominican Republic(+1-809 and +1-829  )</option>
                                <option value='+593 '>Ecuador(+593 )</option>
                                <option value='+20'>Egypt(+20)</option>
                                <option value='+503'>El Salvador(+503)</option>
                                <option value='+240'>Equatorial Guinea(+240)</option>
                                <option value='+291'>Eritrea(+291)</option>
                                <option value='+372'>Estonia(+372)</option>
                                <option value='+251'>Ethiopia(+251)</option>
                                <option value='+500'>Falkland Islands (Malvinas)(+500)</option>
                                <option value='+298'>Faroe Islands(+298)</option>
                                <option value='+679'>Fiji(+679)</option>
                                <option value='+358'>Finland(+358)</option>
                                <option value='+33'>France(+33)</option>
                                <option value='+594'>French Guiana(+594)</option>
                                <option value='+689'>French Polynesia(+689)</option>
                                <option value='+241'>Gabon(+241)</option>
                                <option value='+220'>Gambia(+220)</option>
                                <option value='+995'>Georgia(+995)</option>
                                <option value='+49'>Germany(+49)</option>
                                <option value='+233'>Ghana(+233)</option>
                                <option value='+350'>Gibraltar(+350)</option>
                                <option value='+30'>Greece(+30)</option>
                                <option value='+299'>Greenland(+299)</option>
                                <option value='+1-473'>Grenada(+1-473)</option>
                                <option value='+590'>Guadeloupe(+590)</option>
                                <option value='+1-671'>Guam(+1-671)</option>
                                <option value='+502'>Guatemala(+502)</option>
                                <option value='+224'>Guinea(+224)</option>
                                <option value='+245'>Guinea-Bissau(+245)</option>
                                <option value='+592'>Guyana(+592)</option>
                                <option value='+509'>Haiti(+509)</option>
                                <option value='+504'>Honduras(+504)</option>
                                <option value='+36'>Hungary(+36)</option>
                                <option value='+354'>Iceland(+354)</option>
                                <option value='+91'>India(+91)</option>
                                <option value='+62'>Indonesia(+62)</option>
                                <option value='+98'>Iran, Islamic Republic of(+98)</option>
                                <option value='+964'>Iraq(+964)</option>
                                <option value='+353'>Ireland(+353)</option>
                                <option value='+972'>Israel(+972)</option>
                                <option value='+39'>Italy(+39)</option>
                                <option value='+1-876'>Jamaica(+1-876)</option>
                                <option value='+81'>Japan(+81)</option>
                                <option value='+962'>Jordan(+962)</option>
                                <option value='+7'>Kazakhstan(+7)</option>
                                <option value='+254'>Kenya(+254)</option>
                                <option value='+686'>Kiribati(+686)</option>
                                <option value='+850'>Korea (North)(+850)</option>
                                <option value='+82'>Korea (South)(+82)</option>
                                <option value='+965'>Kuwait(+965)</option>
                                <option value='+996'>Kyrgyzstan(+996)</option>
                                <option value='+856'>Lao PDR(+856)</option>
                                <option value='+371'>Latvia(+371)</option>
                                <option value='+961'>Lebanon(+961)</option>
                                <option value='+266'>Lesotho(+266)</option>
                                <option value='+231'>Liberia(+231)</option>
                                <option value='+218'>Libya(+218)</option>
                                <option value='+423'>Liechtenstein(+423)</option>
                                <option value='+370'>Lithuania(+370)</option>
                                <option value='+352'>Luxembourg(+352)</option>
                                <option value='+389'>Macedonia, Republic of(+389)</option>
                                <option value='+261'>Madagascar(+261)</option>
                                <option value='+265'>Malawi(+265)</option>
                                <option value='+60'>Malaysia(+60)</option>
                                <option value='+960'>Maldives(+960)</option>
                                <option value='+223'>Mali(+223)</option>
                                <option value='+356'>Malta(+356)</option>
                                <option value='+692'>Marshall Islands(+692)</option>
                                <option value='+596'>Martinique(+596)</option>
                                <option value='+222'>Mauritania(+222)</option>
                                <option value='+230'>Mauritius(+230)</option>
                                <option value='+269'>Mayotte(+269)</option>
                                <option value='+52'>Mexico(+52)</option>
                                <option value='+691'>Micronesia, Federated States of(+691)</option>
                                <option value='+373'>Moldova(+373)</option>
                                <option value='+377'>Monaco(+377)</option>
                                <option value='+976'>Mongolia(+976)</option>
                                <option value='+1-664'>Montserrat(+1-664)</option>
                                <option value='+212'>Morocco(+212)</option>
                                <option value='+258'>Mozambique(+258)</option>
                                <option value='+95'>Myanmar(+95)</option>
                                <option value='+264'>Namibia(+264)</option>
                                <option value='+674'>Nauru(+674)</option>
                                <option value='+977'>Nepal(+977)</option>
                                <option value='+31'>Netherlands(+31)</option>
                                <option value='+599'>Netherlands Antilles(+599)</option>
                                <option value='+687'>New Caledonia(+687)</option>
                                <option value='+64'>New Zealand(+64)</option>
                                <option value='+505'>Nicaragua(+505)</option>
                                <option value='+227'>Niger(+227)</option>
                                <option value='+234'>Nigeria(+234)</option>
                                <option value='+683'>Niue(+683)</option>
                                <option value='+672'>Norfolk Island(+672)</option>
                                <option value='+1-670'>Northern Mariana Islands(+1-670)</option>
                                <option value='+47'>Norway(+47)</option>
                                <option value='+968'>Oman(+968)</option>
                                <option value='+92'>Pakistan(+92)</option>
                                <option value='+680'>Palau(+680)</option>
                                <option value='+970'>Palestinian Territory(+970)</option>
                                <option value='+507'>Panama(+507)</option>
                                <option value='+675'>Papua New Guinea(+675)</option>
                                <option value='+595'>Paraguay(+595)</option>
                                <option value='+51'>Peru(+51)</option>
                                <option value='+63'>Philippines(+63)</option>
                                <option value='+48'>Poland(+48)</option>
                                <option value='+351'>Portugal(+351)</option>
                                <option value='+1-787 or +1-939'>Puerto Rico(+1-787 or +1-939)</option>
                                <option value='+974 '>Qatar(+974 )</option>
                                <option value='+262'>Réunion(+262)</option>
                                <option value='+40'>Romania(+40)</option>
                                <option value='+7'>Russian Federation(+7)</option>
                                <option value='+250'>Rwanda(+250)</option>
                                <option value='+290'>Saint Helena(+290)</option>
                                <option value='+1-869'>Saint Kitts and Nevis(+1-869)</option>
                                <option value='+1-758'>Saint Lucia(+1-758)</option>
                                <option value='+508'>Saint Pierre and Miquelon(+508)</option>
                                <option value='+1-784'>Saint Vincent and Grenadines(+1-784)</option>
                                <option value='+685'>Samoa(+685)</option>
                                <option value='+378'>San Marino(+378)</option>
                                <option value='+239'>Sao Tome and Principe(+239)</option>
                                <option value='+966'>Saudi Arabia(+966)</option>
                                <option value='+221'>Senegal(+221)</option>
                                <option value='+248'>Seychelles(+248)</option>
                                <option value='+232'>Sierra Leone(+232)</option>
                                <option value='+65'>Singapore(+65)</option>
                                <option value='+421'>Slovakia(+421)</option>
                                <option value='+386'>Slovenia(+386)</option>
                                <option value='+677'>Solomon Islands(+677)</option>
                                <option value='+252'>Somalia(+252)</option>
                                <option value='+27'>South Africa(+27)</option>
                                <option value='+34'>Spain(+34)</option>
                                <option value='+94'>Sri Lanka(+94)</option>
                                <option value='+249'>Sudan(+249)</option>
                                <option value='+597'>Suriname(+597)</option>
                                <option value='+268'>Swaziland(+268)</option>
                                <option value='+46'>Sweden(+46)</option>
                                <option value='+41'>Switzerland(+41)</option>
                                <option value='+963'>Syrian Arab Republic (Syria)(+963)</option>
                                <option value='+886'>Taiwan, Republic of China(+886)</option>
                                <option value='+992'>Tajikistan(+992)</option>
                                <option value='+255'>Tanzania, United Republic of(+255)</option>
                                <option value='+66'>Thailand(+66)</option>
                                <option value='+690'>Tokelau(+690)</option>
                                <option value='+676'>Tonga(+676)</option>
                                <option value='+1-868'>Trinidad and Tobago(+1-868)</option>
                                <option value='+216'>Tunisia(+216)</option>
                                <option value='+90'>Turkey(+90)</option>
                                <option value='+993'>Turkmenistan(+993)</option>
                                <option value='+1-649'>Turks and Caicos Islands(+1-649)</option>
                                <option value='+688'>Tuvalu(+688)</option>
                                <option value='+256'>Uganda(+256)</option>
                                <option value='+380'>Ukraine(+380)</option>
                                <option value='+971'>United Arab Emirates(+971)</option>
                                <option value='+1'>United States of America(+1)</option>
                                <option value='+598'>Uruguay(+598)</option>
                                <option value='+998'>Uzbekistan(+998)</option>
                                <option value='+678'>Vanuatu(+678)</option>
                                <option value='+58'>Venezuela (Bolivarian Republic)(+58)</option>
                                <option value='+84'>Viet Nam(+84)</option>
                                <option value='+1-284'>Virgin Islands, US(+1-284)</option>
                                <option value='+681'>Wallis and Futuna Islands(+681)</option>
                                <option value='+967'>Yemen(+967)</option>
                                <option value='+260'>Zambia(+260)</option>
                                <option value='+263'>Zimbabwe(+263)</option>                                                
                            </select>     
                            <div style={{width:'3px',display:'inline-block'}} />                       
                            <input type='text'  onChange={this.onChangeMobile} style={{width:'120px'}}></input>                           
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
                            <input type="checkbox" id="tcondition"/>I have read and agree to the <b><u>T&amp;C</u></b> and <b><u>Privacy Policy</u></b>
                        </div>
                        <div className='registerButton'>
                            <button onClick={this.register} >Register</button>
                        </div>
                    </div>
                </div>                
        );
    }
}

export default Register;