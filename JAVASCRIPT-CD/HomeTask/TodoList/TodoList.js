document.getElementById("headId").innerText = "To Do List";
document.getElementById("buttonId").className = "bg-info text-light fs-5 rounded-5 w-25"
function add() {
    var inputElement = document.getElementById("inputId").value;
    var listId = document.getElementById("listId");
    let li = document.createElement("p");
    listId.appendChild(li);
    li.innerText = inputElement;
    li.className = "ps-5"
    document.getElementById("inputId").value = '';
}
add();

var b = document.getElementById("allId");
b.style.color = "black";
b.style.textDecoration = "underline";
var c = document.getElementById("pendingId");
c.style.color = "blue";
var d = document.getElementById("completeId");
d.style.color = "blue";
function show() {
    b.style.textDecoration = "underline";
    b.style.color = "black";
    c.style.textDecoration = "none";
    d.style.textDecoration = "none";
    d.style.color = "blue";
    c.style.color = "blue";
}
function show1() {
    c.style.textDecoration = "underline"
    c.style.color = "black";
    b.style.textDecoration = "none";
    d.style.textDecoration = "none";
    b.style.color = "blue";
    d.style.color = "blue";
}
function show2() {
    d.style.textDecoration = "underline";
    d.style.color = "black";
    b.style.textDecoration = "none";
    c.style.textDecoration = "none";
    b.style.color = "blue";
    c.style.color = "blue";
}