var htmlId = document.getElementById("htmlId");
var selectElement = document.createElement("select");
var selectName = document.createTextNode("Select");
selectElement.appendChild(selectName);
var divId = document.getElementById("divId")
var numberId = document.getElementById("numberId");
numberId.addEventListener("keypress",()=>{
    var numId = parseInt(numberId.value);
    if(!isNaN(numId)){
    var optionELement = document.createElement("option");
    optionELement.value = numId;
    optionELement.textContent = numId;
    selectElement.appendChild(optionELement);
    numberId.value = "";
    }
   
})

document.body.appendChild(selectElement);
