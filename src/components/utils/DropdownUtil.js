
import LocationDropdownConsts from './LocationDropdownConsts';

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