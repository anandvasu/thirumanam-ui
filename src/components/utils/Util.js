import React from 'react';

export function populateArray (valueObject) {
    var arrayObj = [];   
    if(valueObject !== null) {
        arrayObj.push(valueObject);
    }
    return arrayObj;
}
