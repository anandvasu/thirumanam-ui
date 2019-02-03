import React from 'react';

export function populateArray (valueObject) {
    var arrayObj = [];   
    if(valueObject !== null) {
        arrayObj.push(valueObject);
    }
    return arrayObj;
}

export function getValueFromReactSelect(objectArray) {
    console.log("getValueFromReactSelect");
    console.log(objectArray);
    let value = "";
    if (objectArray.length > 0) {
        value = objectArray[0].value
    }
    return value;
}

export function getValueArrFromReactSelect(objectArray) {
    console.log("getValueFromReactSelect");
    console.log(objectArray);
    let values = [];
    if (objectArray !== null) {
        for(var i=0; i < objectArray.length; i++) {
            values.push(objectArray[i].value);
        }    
    }
    return values;
}

export function convertReactSelectValue(value, listValues) {
    console.log("value :" + value);
    let defaultValue = [];
    console.log("Lenght:" + listValues.length);
    let arrObject = null;

    for(var i=0; i < listValues.length; i++) {
        arrObject = listValues[i];
        console.log(arrObject);
        if(arrObject.value === value) {
            defaultValue = arrObject;
            console.log("defaultValue :" + defaultValue);
            return defaultValue;
        }
    }
    return defaultValue;
}

export function convertReactSelectValues(values, listValues) {
    console.log("value :" + values);
    let defaultValues = [];
    console.log("Lenght:" + listValues.length);
    let arrObject = null;

    for(var i=0; i < listValues.length; i++) {
        arrObject = listValues[i];
        if(values.indexOf(arrObject.value) >= 0) {
            defaultValues.push(arrObject);
        }
    }
    return defaultValues;
}