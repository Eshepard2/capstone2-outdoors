import { locationsArray } from "./locationData.js";
import { parkTypesArray } from "./parkTypeData.js";
import {nationalParksArray} from "./nationalParkData.js";
import {mountainsArray} from "./mountainData.js";
// made imports for data

// log array data
// console.log(parkTypesArray, locationsArray,nationalParksArray,mountainsArray);

// declared variables 
let locationsArrayLength = locationsArray.length;
let parkTypesArrayLength = parkTypesArray.length;
let mountainsArrayLength = mountainsArray.length;

// created for loop
for (let i = 0; i <locationsArrayLength; i++) {
    let  newOption = new Option (locationsArray[i],locationsArray[i]);
    const selectState = document.getElementById("locationsArrayList");
    selectState.add(newOption,undefined);
}
for (let i = 0; i <parkTypesArrayLength; i++) {
    let  newOption = new Option (parkTypesArray[i],parkTypesArray[i]);
    const selectPark = document.getElementById("parkTypesArrayList");
    selectPark.add(newOption,undefined);
}
for (let i = 0; i < mountainsArrayLength; i++) {
    let newOption = new Option (mountainsArray[i],mountainsArray[i]);
    const selectMountain = document.getElementById("mountainsArrayList");
    selectMountain.add(newOption,undefined);
}
// declared new variable 
let searchBtn = document.getElementById('searchBtn');
// arrow function to search document by id and return 
searchBtn.onclick = () => {

let locationData = document.getElementById('locationsArrayList').value;
let parkData = document.getElementById('parkTypesArrayList').value;
let mountainData = document.getElementById('mountainsArrayList');
// console.log(locationData,parkData, mountainData);
};

// filter 

function searchData()


