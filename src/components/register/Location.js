import React, {Component} from 'react';
import './Location.css'

class Location extends Component {

    constructor(props) {
        super(props);

        this.countryChange = this.countryChange.bind(this);
        this.profileStateChange = this.profileStateChange.bind(this);
        this.districtChange = this.districtChange.bind(this);
        this.cityChange = this.cityChange.bind(this);
    }

    countryChange(event) {
        this.props.countryChange(event.target.value);
    }

    profileStateChange(event) {
        this.props.profileStateChange(event.target.value);
    }

    districtChange(event) {
        this.props.districtChange(event.target.value);
    }

    cityChange(event) {
        this.props.cityChange(event.target.value);
    }

    render () {
        return (
            <div className="rdlcontaniner">

                         <div> 
                            <div className='rlabel'>
                                    <label>Current Location</label>
                            </div>
                            <div className='rfield'>
                            </div>
                        </div>

                   
                 <div>                         
                        <div className='rlabel'>
                             <label>Country</label>
                        </div>
                        
                        <div className='rfield'>
                            <select  onChange={this.countryChange}>
                                <option value="IND" selected>India</option>
                                <option value="USA">United States of America</option>
                                <option value="GBR">United Kingdom</option>                            
                            </select>
                        </div>
                    </div>

                     <div>
                        <div className='rlabel'>
                             <label>State</label>
                        </div>
                        
                        <div className='rfield'>
                            <select  onChange={this.profileStateChange}>
                            <option value='AP'>Andhra Pradesh</option>
                                <option value='AN'>Andaman and Nicobar Islands</option>
                                <option value='AR'>Arunachal Pradesh</option>
                                <option value='AS'>Assam</option>
                                <option value='BR'>Bihar</option>
                                <option value='CH'>Chandigarh</option>
                                <option value='CG'>Chhattisgarh</option>
                                <option value='DN'>Dadra and Nagar Haveli</option>
                                <option value='DD'>Daman and Diu</option>
                                <option value='DL'>Delhi</option>
                                <option value='GA'>Goa</option>
                                <option value='GJ'>Gujarat</option>
                                <option value='HR'>Haryana</option>
                                <option value='HP'>Himachal Pradesh</option>
                                <option value='JK'>Jammu and Kashmir</option>
                                <option value='JH'>Jharkhand</option>
                                <option value='KA'>Karnataka</option>
                                <option value='KL'>Kerala</option>
                                <option value='LD'>Lakshadweep</option>
                                <option value='MP'>Madhya Pradesh</option>
                                <option value='MH'>Maharashtra</option>
                                <option value='MN'>Manipur</option>
                                <option value='ML'>Meghalaya</option>
                                <option value='MZ'>Mizoram</option>
                                <option value='NL'>Nagaland</option>
                                <option value='OD'>Odisha</option>
                                <option value='PY'>Puducherry</option>
                                <option value='PB'>Punjab</option>
                                <option value='RJ'>Rajasthan</option>
                                <option value='SK'>Sikkim</option>
                                <option value='TN' selected>Tamil Nadu</option>
                                <option value='TS'>Telangana</option>
                                <option value='TR'>Tripura</option>
                                <option value='UP'>Uttar Pradesh</option>
                                <option value='UK'>Uttarakhand</option>
                                <option value='WB'>West Bengal</option>                               
                            </select>
                        </div>                        
                    </div>

                    <div>
                        <div className='rlabel'>
                             <label>District</label>
                        </div>
                        
                        <div className='rfield'>
                            <select  onChange={this.districtChange}>
                                <option value=''>--Select--</option>
                                <option value='AR'>Ariyalur</option>
                                <option value='CH'>Chennai</option>
                                <option value='CO'>Coimbatore</option>
                                <option value='CU'>Cuddalore</option>
                                <option value='DH'>Dharmapuri</option>
                                <option value='DI'>Dindigul</option>
                                <option value='ER'>Erode</option>
                                <option value='KM'>Kanchipuram</option>
                                <option value='KK'>Kanyakumari</option>
                                <option value='KR'>Karur</option>
                                <option value='KG'>Krishnagiri</option>
                                <option value='MA'>Madurai</option>
                                <option value='NA'>Nagapattinam</option>
                                <option value='NL'>Namakkal</option>
                                <option value='NI'>Nilgiris</option>
                                <option value='PE'>Perambalur</option>
                                <option value='PU'>Pudukkottai</option>
                                <option value='RA'>Ramanathapuram</option>
                                <option value='SM'>Salem</option>
                                <option value='SI'>Sivagangai</option>
                                <option value='TJ'>Thanjavur</option>
                                <option value='TH'>Theni</option>
                                <option value='TK'>Thoothukudi</option>
                                <option value='TI'>Tiruchirappalli</option>
                                <option value='TN'>Tirunelveli</option>
                                <option value='TP'>Tiruppur</option>
                                <option value='TV'>Tiruvallur</option>
                                <option value='TM'>Tiruvannamalai</option>
                                <option value='TR'>Tiruvarur</option>
                                <option value='VR'>Vellore</option>
                                <option value='VP'>Viluppuram</option>
                                <option value='VN'>Virudunagar</option>                             
                            </select>
                        </div>                        
                    </div>

                     <div>
                        <div className='rlabel'>
                             <label>City</label>
                        </div>
                        
                        <div className='rfield'>
                            <input type="text" onBlur={this.cityChange}/>
                        </div>                        
                    </div>
                    <hr />
            </div>
        );
    }
}

export default Location;