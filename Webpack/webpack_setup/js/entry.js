"use strict";

//import _ from "person.js";
require("./../css/style.css");
//document.write(require("./content.js"));
for(let i = 0; i < 45; i++){
    var div = document.createElement('div');
    div.onclick = function () {
        alert("you clicked on box # " + i);
    };
    document.getElementsByTagName('section')[0].appendChild(div);
}