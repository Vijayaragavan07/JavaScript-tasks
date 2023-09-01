// var idElement = document.getElementById("htmlId");
// var formElement = document.createElement("form");
// var labelElement = document.createElement("label")
// var labelName = document.createTextNode("Enter your name : ");
// labelElement.appendChild(labelName);
// formElement.appendChild(labelElement);
// var textElement = document.createElement("input");
// formElement.appendChild(textElement);
// var emailElement = document.createElement("label");
// var emailName = document.createTextNode("E-mail :");
// var emailBox = document.createElement("input");
// emailElement.appendChild(emailName);
// formElement.appendChild(emailElement);
// formElement.appendChild(emailBox);

// idElement.appendChild(formElement);
var submitId = document.getElementById("submitId");
submitId.addEventListener("click",()=>{
    var nameId = document.getElementById("nameId");
    var emailId = document.getElementById("emailId");
    if(nameId.value =="" || emailId.value == ""){
        alert("One of your data is empty, kindly fill it and try again..")
    }
    // else if (emailId.value == ""){
    //     alert("Please enter your Email !");
    // }
    else{
        alert("You logged in successfully !");
    }
})