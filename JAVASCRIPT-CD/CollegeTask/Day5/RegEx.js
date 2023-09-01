// function regular(){
//     var passwordElement = document.getElementById("emailId").value;
//     let pattern =/\w{10}/;
//     if(passwordElement.match(pattern)){
//         let spanElement = document.getElementById("spId");
//         spanElement.innerHTML = "strong password";
//         spanElement.className = "text-success";
//     }
//     else{
//         let spanElement = document.getElementById("spId");
//         spanElement.innerHTML = "please enter valid email";
//         spanElement.className = "text-danger"
//     }
// }

var mailformat = /^w+ ([.-]?w+)*@w+ ([.-]?w+)* (.w {2,3})+$/;
    var passwordElement = document.getElementById("emailId").value;
if(mailformat.test(passwordElement)) {
  console.log("Valid email address!");
} else {
  console.log("You have entered an invalid email address!");
}
