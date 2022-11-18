import { locationsArray } from "./locationData.js";
import { parkTypesArray } from "./parkTypeData.js";
import {nationalParksArray} from "./nationalParkData.js";

// made imports for data

// log array data
// console.log(parkTypesArray, locationsArray,nationalParksArray,mountainsArray);

// declared variables 
let locationsArrayLength = locationsArray.length;
let parkTypesArrayLength = parkTypesArray.length;

const selectState = document.getElementById("locationsArrayList");
const selectPark = document.getElementById("parkTypesArrayList");


// created for loop
for (let i = 0; i <locationsArrayLength; i++) {
    let  newOption = new Option (locationsArray[i],locationsArray[i]);
    selectState.add(newOption,undefined);
}
for (let i = 0; i <parkTypesArrayLength; i++) {
    let  newOption = new Option (parkTypesArray[i],parkTypesArray[i]);
    selectPark.add(newOption,undefined);
}


// declared new variable to equal document
let searchBtn = document.getElementById('searchBtn');

// arrow function to search document by id 
searchBtn.onclick = () => {

let locationData = document.getElementById('locationsArrayList').value;
let parkData = document.getElementById('parkTypesArrayList').value;
let filterdArray = filterLocation(nationalParksArray,locationData);
let filterdPark = filterPark(nationalParksArray,parkData);
console.log(filterdPark);
console.log(filterdArray);
// let tBody = document.getElementById('tBody');
};


// filter location and return 
    function filterLocation(array,selectedOption) {
        return array.filter((arrayItem)=>{
          return selectedOption == arrayItem.State 
        });
    } 




// filter park
function filterPark (array,selectedOption) {
    return array.filter((arrayItem)=>{
        return  arrayItem.LocationName.includes(selectedOption)
    });
}








// display 
// if (
//     selectState.includes(selectedOption) == true){
    
//     };
   






// for (let i = 0; i < nationalParksArrayLength; i++) {
//     let newOption = new Option (nationalParksArray[i], nationalParksArray[i]);
    
//     selectNationalPark.add(newOption,undefined);
// }