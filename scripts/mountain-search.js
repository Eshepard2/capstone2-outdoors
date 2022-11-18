
// import data
import {mountainsArray} from "./mountainData.js";

// delcared variables
const selectMountains = document.getElementById("mountainsArray");
let mountainsArrayLength = mountainsArray.length;

// create for loop
for (let i = 0; i < mountainsArrayLength; i++) {
    let newOption = new Option (mountainsArray[i],mountainsArray[i]);
    selectMountains.add(newOption,undefined);
}

// declared new variable to equal document
let searchBtn = document.getElementById('searchBtn');


// arrow function to search document by id 
searchBtn.onclick = () => {

let mountainData = document.getElementById('mountainsArray').value;
let filterdMountain = filterMountain(mountainData).Name;
console.log(filterdMountain);
};

    // filter mountain and return 
function filterMountain (array, selectedOption){
    return array.filter((arrayItem)=>{
     return selectedOption == arrayItem.Name.includes(selectedOption)
    });
}

