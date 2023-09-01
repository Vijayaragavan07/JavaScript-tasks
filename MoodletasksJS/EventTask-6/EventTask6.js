var htmlId = document.getElementById("htmlId");
var selectElement = document.createElement("select");
var selectName = document.createTextNode("Select");
selectElement.appendChild(selectName);
var addId = document.getElementById("addId");
var divId = document.getElementById("divId")
addId.addEventListener("click",()=>{
    var numberId = document.getElementById("numberId");
    var numId = parseInt(numberId.value);
    if(!isNaN(numId)){
    var optionELement = document.createElement("option");
    optionELement.value = numId;
    optionELement.textContent = numId;
    selectElement.appendChild(optionELement);
    numberId.value = "";
    }
    else{
        divId.textContent = "Enter valid number"
    }
})

document.body.appendChild(selectElement);
