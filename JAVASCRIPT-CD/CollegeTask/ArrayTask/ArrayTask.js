document.getElementById("inputDiv").className = "text-center m-5"
document.getElementById("buttonId").className = "bg-success text-white m-5"
var nameArray = [];
var ageArray = [];
function add() {
    let nameElement = document.getElementById("inputId1").value;
    let dobElement = document.getElementById("inputId2").value;
    nameArray.push(nameElement);
    ageArray.push(dobElement);
    console.log(nameArray);
    console.log(ageArray);
    document.getElementById("inputId1").value = '';
    document.getElementById("inputId2").value = '';
    document.getElementById("tableId").innerHTML = "<table border='2px' style='width:100%'><tr><thead><th>Name</th><th>Date of birth</th></thead></tr><tr><td>" + nameArray + "</td><td>" + ageArray + "</td></tr></table>";
    document.getElementById("tableId").className = "bg-info text-white m-5 p-3"
}
