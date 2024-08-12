"use strict";
function convertToJson() {
    //Selecting form element
    let form = document.getElementById("dataForm");
    //Initialize empty object to store input data
    let formData = {};
    //Iterate over each element in form excluding submit button
    //Add key value pairs where key is elements name attribute & value is its value attribute
    for (let i = 0; i < form.elements.length - 1; i++) {
        let element = form.elements[i];
        if (element.type !== "submit") {
            formData[element.name] = element.value;
        }
    }
    //Convert form data to JSON string
    let jsonData = JSON.stringify(formData);
    //Updates content of output div with JSON string
    //<pre> tags are for better readability
    let jsonOutput = document.getElementById("jsonOutput");
    jsonOutput.innerHTML = "<pre>" + jsonData + "</pre>";
};
