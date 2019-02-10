import React from 'react';

export function populateChecBoxValuesArray (inputValue) {
    var ouputArray = [];
    if(inputValue.indexOf(",") > 0) {
        const values = inputValue.split(",");
        for(let i = 0; i < values.length; i++) {
            const value = values[i];
            if(value !== "") {
                ouputArray.push(value);
            }
        }
    } else {
        if(inputValue !== "") {
            ouputArray.push(inputValue);
        }
    }
    return ouputArray;
}

export function populateArray (valueObject) {
    var arrayObj = [];   
    if(valueObject !== null) {
        arrayObj.push(valueObject);
    }
    return arrayObj;
}

export function getValueFromReactSelect(objectArray) {
    let value = "";
    if (objectArray.length > 0) {
        value = objectArray[0].value
    }
    return value;
}

export function getValueArrFromReactSelect(objectArray) {
    let values = [];
    if (objectArray !== null) {
        for(var i=0; i < objectArray.length; i++) {
            values.push(objectArray[i].value);
        }    
    }
    return values;
}

export function convertReactSelectValue(value, listValues) {
    let defaultValue = [];
    let arrObject = null;

    for(var i=0; i < listValues.length; i++) {
        arrObject = listValues[i];
        if(arrObject.value === value) {
            defaultValue = arrObject;
            return defaultValue;
        }
    }
    return defaultValue;
}

export function convertReactSelectValues(values, listValues) {
    let defaultValues = [];
    let arrObject = null;

    for(var i=0; i < listValues.length; i++) {
        arrObject = listValues[i];
        if(values.indexOf(arrObject.value) >= 0) {
            defaultValues.push(arrObject);
        }
    }
    return defaultValues;
}


export function getDropDownLabel(value, listValues) {
    let outLabel = value;
    let arrObject = null;

    for(var i=0; i < listValues.length; i++) {
        arrObject = listValues[i];
        if(arrObject.value === value) {
            return arrObject.label;
        }
    }
    return outLabel;
}