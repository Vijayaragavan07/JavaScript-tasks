let nameElement = document.getElementById("nameId");
nameElement.addEventListener("keyup", () => {
    let nameEl = document.getElementById("nameId").value;
    let spanElement = document.getElementById("spId");
    let patternElement1 = /^[A-z][a-z]+[ ]{1}[A-Z]{1}$/
    // let originalName = "Vijayaragavan R"
    // if (nameEl.length >= 6) {
    if (nameEl.match(patternElement1)) {
        spanElement.innerHTML = '<i class="fa-solid fa-check"></i>';
        spanElement.className = "fs- text-success";
    }
    // }
    else {
        spanElement.innerHTML = "Name starts with capital and more than 1 letter, 1 space and end with 1 capital letter";
        spanElement.className = "fs- text-danger"
    }
})
let emailId = document.getElementById("emailId");
emailId.addEventListener("keyup", () => {
    let emailElement = document.getElementById("emailId").value;
    let spanElement2 = document.getElementById("spId2");
    // let originalEmail = "vijayaragavanvijay2001@gmail.com";
    let patternElement2 = /[a-zA-Z0-9_\.]+[@][a-z]+[\.][a-z]{2,3}/;
    // if (emailElement.length >= 6) {
    if (emailElement.match(patternElement2)) {
        spanElement2.innerHTML = '<i class="fa-solid fa-check"></i>';
        spanElement2.className = "fs- text-success"
    }
    // }
    else {
        spanElement2.innerHTML = "Email should contain letters,numbers,@,after . 3 letters";
        spanElement2.className = "fs- text-danger";
    }
})
let passId = document.getElementById("passId");
passId.addEventListener("keyup", () => {
    let passwordElement = document.getElementById("passId").value;
    let spanElement3 = document.getElementById("spId3");
    let patternElement3 = /^\w+\W+\d$/
    // let originalPassword = "123456"
    // if (passwordElement.length >= 6) {
    if (passwordElement.match(patternElement3)) {
        spanElement3.innerHTML = '<i class="fa-solid fa-check"></i>';
        spanElement3.className = "fs- text-success";
    }
    // }
    else {
        spanElement3.innerHTML = "Password should contain letters,special characters, one digit";
        spanElement3.className = "fs- text-danger";
    }
})
// let repassId = document.getElementById("rePassId");
// repassId.addEventListener("keyup", () => {
//     let originalPassword1 = document.getElementById("passId").value;
//     let repassElement = document.getElementById("rePassId").value;
//     let spanElement4 = document.getElementById("spId4");
//     if (originalPassword1 == repassElement) {
//         spanElement4.innerHTML = '<i class="fa-solid fa-check"></i>';
//         spanElement4.className = "fs- text-success";
//     }
//     else {
//         spanElement4.innerHTML = "Password Mismatching..!";
//         spanElement4.className = "fs- text-danger";
//     }
// })
function validate() {
    let nameEle = document.getElementById("nameId").value;
    let emailElement = document.getElementById("emailId").value;
    let passwordElement = document.getElementById("passId").value;
    let repassElement = document.getElementById("rePassId").value;
    let originalName1 = "Vijayaragavan R"
    let originalEmail1 = "vijayaragavanvijay2001@gmail.com";
    let originalPassword1 = "123456"
    // if ((nameEle !== null) && (emailElement !== null) && (passwordElement !== null)) {
        alert("hi " + nameEle + " Login successfully!")
        // document.getElementById("nameId").value = "";
        // document.getElementById("emailId").value = "";
        // document.getElementById("passId").value = "";
        // document.getElementById("rePassId").value = "";
        // document.getElementById("spId").innerText = "";
        // document.getElementById("spId2").innerText = "";
        // document.getElementById("spId3").innerText = "";
        // document.getElementById("spId4").innerText = "";
    // }
    // else {
    //     alert("please enter required field")
    // }
}
// function clickFunction(){
//     alert("hi")
// let imageElement = document.getElementById("imageId")
//     imageElement.innerHTML = `<a href="" target="_blank"><img src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg"></a>`
// }

function zoom() {
    let imageId1 = document.getElementById("imageId");
    let spanElement = document.getElementById("spId");
    imageId1.className = "zoomWidth";
    spanElement.innerHTML = `<div class="card bg-light shadow-lg"><p class ="m-2">www.pixels.com<br>200 x 300 .jpg</p></div>`
}
function zoomin() {
    let imageId1 = document.getElementById("imageId");
    let spanElement = document.getElementById("spId");
    imageId1.className = "w-100";
    spanElement.innerHTML = ""
}
function zoom2() {
    let imageId2 = document.getElementById("imageId2");
    let spanElement = document.getElementById("spId2");
    imageId2.className = "zoomWidth";
    spanElement.innerHTML = `<div class="card bg-light"><p class ="m-2">www.pixels.com<br>250 x 300 .jpg</p></div>`
}
function zoomin2() {
    let imageId1 = document.getElementById("imageId2");
    imageId1.className = "w-100";
    let spanElement = document.getElementById("spId2");
    spanElement.innerHTML = ""
}
function zoom3() {
    let imageId1 = document.getElementById("imageId3");
    let spanElement = document.getElementById("spId3");
    imageId1.className = "zoomWidth";
    spanElement.innerHTML = `<div class="card bg-light"><p class ="m-2">www.pixels.com<br>200 x 300 .jpg</p></div>`
}
function zoomin3() {
    let imageId1 = document.getElementById("imageId3");
    imageId1.className = "w-100";
    let spanElement = document.getElementById("spId3");
    spanElement.innerHTML = ""
}
function zoom4() {
    let imageId1 = document.getElementById("imageId4");
    let spanElement = document.getElementById("spId4");
    imageId1.className = "zoomWidth";
    spanElement.innerHTML = `<div class="card bg-light"><p class ="m-2">www.pixels.com<br>200 x 300 .jpg</p></div>`
}
function zoomin4() {
    let imageId1 = document.getElementById("imageId4");
    imageId1.className = "w-100";
    let spanElement = document.getElementById("spId4");
    spanElement.innerHTML = ""
}
