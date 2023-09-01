var inputId = document.getElementById("inputId");
addEventListener("keyup",event=>{
    if(event.key == "Enter"){
        password1(inputId.value);        
    }
})
function password1(valuess){
    var password = "";
    var passwordInput = document.createElement("p");
    var passwordDiv = document.getElementById("passwordDiv");
    var dateId = document.getElementById("dateId").value;
    for(let i=0; i<3; i++){
        password += valuess.charAt(i);
    }
    passwordInput.innerText ="Your Password is : "+ password+dateId;
    passwordDiv.appendChild(passwordInput);
}