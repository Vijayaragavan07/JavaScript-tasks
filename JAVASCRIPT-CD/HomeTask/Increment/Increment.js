var outputElement = document.getElementById("headId");
var num = 0;
function reset(){
    outputElement.textContent = 0;
}
function increment(){
    outputElement.textContent = num++;
}
function decrement(){
    outputElement.textContent = num--;
}
