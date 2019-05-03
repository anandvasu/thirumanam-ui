
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
       if(relogionObj.value === 2) {
            ReligionDropdownConsts.buddhaCasteValues.forEach(function(element) {
                values.push(element);
            });
        }
        if(relogionObj.value === 3) {
            ReligionDropdownConsts.christianCasteValues.forEach(function(element) {
                values.push(element);
            });
        }
       if(relogionObj.value === 4 || relogionObj.value === 5 || relogionObj.value === 6) {
            ReligionDropdownConsts.muslimCasteValues.forEach(function(element) {
                values.push(element);
          });
        }
        if(relogionObj.value === 7) {
            ReligionDropdownConsts.sikhCasteValues.forEach(function(element) {
                values.push(element);
            });
        }
        if(relogionObj.value === 8 || relogionObj.value === 9 || relogionObj.value === 10) {
            ReligionDropdownConsts.jainCasteValues.forEach(function(element) {
                values.push(element);
          });
        }
        if(relogionObj.value === 11) {
            ReligionDropdownConsts.parsiCasteValues.forEach(function(element) {
                values.push(element);
            });
        }
       
    }  
    values.sort((a, b) => (a.label > b.label) ? 1 : -1 );
    return values;
}

export function getSingleSelectCasteValues (religion) {
    let values = [];   
    if(religion === 1) {
        ReligionDropdownConsts.hinduCasteValues.forEach(function(element) {
            values.push(element);
        });
    } else if((religion === 4) || (religion === 5) || (religion === 6)) {
        ReligionDropdownConsts.muslimCasteValues.forEach(function(element) {
            values.push(element);
        });
    } else if(religion === 3) {
        ReligionDropdownConsts.christianCasteValues.forEach(function(element) {
            values.push(element);
        });
    } else if(religion === 2) {
        ReligionDropdownConsts.buddhaCasteValues.forEach(function(element) {
            values.push(element);
        });
    } else if(religion === 7) {
        ReligionDropdownConsts.sikhCasteValues.forEach(function(element) {
            values.push(element);
        });
    } else if((religion === 8) || (religion === 9) || (religion === 10)) {
        ReligionDropdownConsts.jainCasteValues.forEach(function(element) {
            values.push(element);
        });
    } else if(religion === 11) {
        ReligionDropdownConsts.parsiCasteValues.forEach(function(element) {
            values.push(element);
        });
    }
    return values;
}