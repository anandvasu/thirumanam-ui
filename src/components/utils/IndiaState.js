import React from 'react';

function indiaState(props) {

    return(
        <div>
            <select  onChange={props.profileStateChange} defaultValue="TN">
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
                <option value='TN'>Tamil Nadu</option>
                <option value='TS'>Telangana</option>
                <option value='TR'>Tripura</option>
                <option value='UP'>Uttar Pradesh</option>
                <option value='UK'>Uttarakhand</option>
                <option value='WB'>West Bengal</option>                               
            </select>
        </div>
    ) ;
}

export default indiaState;