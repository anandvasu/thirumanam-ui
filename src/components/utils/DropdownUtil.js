
import LocationDropdownConsts from './LocationDropdownConsts';
import ReligionDropdownConsts from './ReligionDropdownConsts';

export function dynamicStates (countryArr) {
    let values = [];   
    for (let countryObj of countryArr) {
       if(countryObj.value === "IN") {
           LocationDropdownConsts.indiaStates.forEach(function(element) {
                values.push(element);
          });
       }
       if(countryObj.value === "US") {
            LocationDropdownConsts.usaStates.forEach(function(element) {
                values.push(element);
          });
        }
    }  
    values.sort((a, b) => (a.label > b.label) ? 1 : -1 );
    return values;
}

export function dynamicCaste (religionArr) {
    let values = [];   
    for (let relogionObj of religionArr) {
       if(relogionObj.value === 1) {
           ReligionDropdownConsts.hinduCasteValues.forEach(function(element) {
                values.push(element);
          });
       }
       if(relogionObj.value === 4 || relogionObj.value === 5 || relogionObj.value === 6) {
            ReligionDropdownConsts.muslimCasteValues.forEach(function(element) {
                values.push(element);
          });
        }
    }  
    values.sort((a, b) => (a.label > b.label) ? 1 : -1 );
    return values;
}