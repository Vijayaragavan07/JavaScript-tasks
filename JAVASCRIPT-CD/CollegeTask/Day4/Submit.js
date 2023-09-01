// var a = document.getElementById("imageId");
// var b = document.getElementById("imageId2");
// a.addEventListener("mouseover",function(){
//     a.style.width = "500px";
//     document.getElementById("paraId").innerText = "www.pixelstalk.net"
//     document.getElementById("headId").innerText = "500 x 500 .jpg"
// });
// a.addEventListener("mouseout",function(){
//     a.style.width = "100px";
//     document.getElementById("paraId").innerText = ""
//     document.getElementById("headId").innerText = ""
// })
// b.addEventListener("click",function(){
//     b.style.width = "100px";
// })

// let divElement = document.createElement("div");
// divElement.setAttribute("class","bg-info p-5");
// document.body.appendChild(divElement);
// let headElement = document.createElement("h1");
// headElement.innerText = "Hi Vijay";
// divElement.appendChild(headElement);
let divElement = document.createElement("div");
let text = document.createTextNode("Login Page");
let inputbox = document.createElement("input");
let button = document.createElement("button");
let buttonText = document.createTextNode("Click");
button.appendChild(buttonText);
divElement.appendChild(text);
divElement.appendChild(inputbox);
divElement.appendChild(button);
button.className="bg-danger";
document.body.appendChild(divElement);
let d = document.createElement("a");
d.setAttribute("href","www.google.com");
let textEl = document.createTextNode("click");
d.appendChild(textEl);
// d.removeChild(textEl)
document.body.append(d);