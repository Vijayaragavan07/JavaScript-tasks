var divElement = document.getElementById("main");
var buttonVariable = document.createElement("button");
var buttonValue = document.createTextNode("Click me !");
buttonVariable.appendChild(buttonValue);
divElement.appendChild(buttonVariable)
document.body.appendChild(buttonVariable,divElement);
buttonVariable.addEventListener("click",()=>{
    alert("Hello user ! You hit this button");
})
