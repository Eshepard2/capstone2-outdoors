import {mountainsArray} from "./mountainData.js";

const selectMountains = document.getElementById("mountainsArrayList");
let mountainsArrayLength = mountainsArray.length;

for (let i = 0; i < mountainsArrayLength; i++) {
    let newOption = new Option (mountainsArray[i],mountainsArray[i]);
    selectMountains.add(newOption,undefined);
}

let searchBtn = document.getElementById('searchBtn');
// arrow function to search document by id and return 
searchBtn.onclick = () => {
    
let mountainData = document.getElementById('mountainsArrayList').value;

}


