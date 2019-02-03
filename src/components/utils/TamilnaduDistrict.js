import React from 'react';

function tamilnaduDistrict(props) {
    return(
        <div>
             <select  onChange={props.districtChange} value={props.district}>
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
    );
}

export default tamilnaduDistrict;