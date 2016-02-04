"use strict";

//import _ from "person.js";
require("./../css/style.css");
//import Person from "./person.js";
//document.write(require("./content.js"));

// Example of "let"
for(let i = 0; i < 45; i++){
    var div = document.createElement('div');
    div.onclick = function () {
        alert("you clicked on box # " + i);
    };
    document.getElementsByTagName('section')[0].appendChild(div);
}

// Example of template strings
function printHelloName(firstName){
    console.log(`Hello ${firstName}`);
}

printHelloName("Eric Cartman");