//button
var studentElement = document.getElementById("buttonId1");
studentElement.addEventListener("click", () => {
    let studentPage = document.getElementById("pageId");
    studentPage.innerHTML = `<div class='p-5 m-5 text-center text-white bg-color border-5 shadow-lg'><table><tr><thead><h1>Student SignUp Form</h1></thead>
    </tr><br><tr><th>Name </th><td><input type='text' id='nameId' class='studName' placeholder='Enter your Name'onkeyup='validate()'/><span id='spId'></span></td></tr>
    <tr><th>Email </th><td><input type='Email' id='emailId' class='studEmail' placeholder='Enter your Email' onkeyup='validateemail()'/><span id='spId2'></span></td></tr>
    <tr><th></th><td><input type='button' value='Sign Up' onclick='submission1()'/></td></tr><tr><th></th><td>Already have an account?<a href='./Login.html' target='_parent'>Login here</a></td></tr></table></div>`;
    // studentPage.className = ""
})
var adminElement = document.getElementById("buttonId2");
adminElement.addEventListener("click", () => {
    let studentPage = document.getElementById("pageId");
    studentPage.innerHTML = `<div class='p-5 m-5 text-center text-white bg-color2 border-5 shadow-lg'><table><tr><thead><h1>Admin SignUp Form</h1></thead>
    </tr><br><tr><th>Name </th><td><input type='text' id='nameId' class='adminName' placeholder='Enter your Name' onkeyup='validate()'/><span id='spId'></span></td></tr>
    <tr><th>Account </th><td><input type='Email' id='emailId' class='adminEmail' placeholder='Enter your Account Mail' onkeyup='validateemail()'/><span id='spId2'></span></td></tr>
    <tr><th></th><td><input type='button' value='Sign Up' onclick='submission2()'/></td></tr><tr><th></th><td>Already have an account?<a href='./Login.html' target='_parent'>Login here</a></td></tr></table></div>`;
    // studentPage.className = ""
})
var manageElement = document.getElementById("buttonId3");
manageElement.addEventListener("click", () => {
    let studentPage = document.getElementById("pageId");
    studentPage.innerHTML = `<div class='p-5 m-5 text-center text-white bg-color3 border-5 shadow-lg'><table><tr><thead><h1>Management SignUp Form</h1></thead>
    </tr><br><tr><th>Name </th><td><input type='text' id='nameId' class='managName' placeholder='Enter Username' onkeyup='validate()'/><span id='spId'></span></td></tr>
    <tr><th>Account </th><td><input type='Email' id='emailId' class='managEmail' placeholder='Enter your Official Mail' onkeyup='validateemail()'/><span id='spId2'></span></td></tr>
    <tr><th></th><td><input type='button' value='Sign Up' onclick='submission3()'/></td></tr><tr><th></th><td>Already have an account?<a href='./Login.html' target='_parent'>Login here</a></td></tr></table></div>`;
    // studentPage.className = ""
})
// var nameId = document.getElementById("nameId");
// nameId.addEventListener("keyup",()=>{
//     let nameElement = document.getElementById("nameId").value;
//     let pattern =/\w{10}/;
//     if(nameElement.match(pattern)){
//         let spanElement = document.getElementById("spId");
//         spanElement.innerHTML ="Valid name";
//         spanElement.className = "text-success";
//     }
//     else{
//         let spanElement = document.getElementById("spId");
//         spanElement.innerHTML ="Invalid name";
//         spanElement.className = "text-danger";

//     }
// })
function validate() {
    let nameElement1 = document.getElementById("nameId").value;
    let pattern = /\w{10}/;
    if (nameElement1.match(pattern)) {
        let spanElement = document.getElementById("spId");
        spanElement.innerHTML = '<i class="fa-solid fa-check"></i> Valid';
        spanElement.className = "text-white";
    }
    else {
        let spanElement = document.getElementById("spId");
        spanElement.innerHTML = "Invalid name";
        spanElement.className = "text-danger";

    }
}
function validateemail() {
    let nameElement2 = document.getElementById("emailId").value;
    let pattern2 = /\w{10}/;
    if (nameElement2.match(pattern2)) {
        let spanElement2 = document.getElementById("spId2");
        spanElement2.innerHTML = '<i class="fa-solid fa-check"></i> Valid';
        spanElement2.className = "text-white";
    }
    else {
        let spanElement2 = document.getElementById("spId2");
        spanElement2.innerHTML = "Invalid name";
        spanElement2.className = "text-danger";

    }
}
function submission1(){
    let loginPageId = document.getElementById("loginPageId1");
    let nameElement = document.getElementById("nameId").value;
    let emailElement = document.getElementById("emailId").value;
    loginPageId.className ="bg-color text-white"
    loginPageId.innerHTML = `<h1>Student details</h1><label>Name : </label><h3>${nameElement}</h3><label>Email :<h3>${emailElement}</h3></label><p>Login Successfully !</p>`;
}
function submission2(){
    let loginPageId = document.getElementById("loginPageId2");
    let nameElement = document.getElementById("nameId").value;
    let emailElement = document.getElementById("emailId").value;
    loginPageId.className ="bg-color2 text-white"
    loginPageId.innerHTML = `<h1>Admin details</h1><label>Name : </label><h3>${nameElement}</h3><label>Email :<h3>${emailElement}</h3></label><p>Login Successfully !</p>`;
}
function submission3(){
    let loginPageId = document.getElementById("loginPageId3");
    let nameElement = document.getElementById("nameId").value;
    let emailElement = document.getElementById("emailId").value;
    loginPageId.className ="bg-color3 text-white"
    loginPageId.innerHTML = `<h1>Management details</h1><label></label><h3>Hi ${nameElement}</h3><label><h3>${emailElement}</h3></label><p>Login Successfully !</p>`;
}
// function submission(){
//     let nameElement1 = document.getElementById("nameId").value;
//     let emailElement1 = document.getElementById("emailId").value;
//     let nameElement2 = document.getElementById("nameId").value;
//     let emailElement2 = document.getElementById("emailId").value;
//     let nameElement3 = document.getElementById("nameId").value;
//     let emailElement3 = document.getElementById("emailId").value;

//     let tableElement = document.getElementById("tableId");
//     tableElement.innerHTML = `<table border='2''><tr><thead><th>Name</th><th>Email</th><th>Domain</th></thead></tr>
//     <tr><td>${nameElement1}</td><td>${emailElement1}</td><td>Student</td></tr>
//     <tr><td>${nameElement2}</td><td>${emailElement2}</td><td>Admin</td></tr>
//     <tr><td>${nameElement3}</td><td>${emailElement3}</td><td>Management</td></tr></table>`
// }