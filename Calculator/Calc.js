function display(value){
    document.getElementById("htmlid").value += value;
}
function sum(){
    var a=document.getElementById("htmlid").value;
    var b=eval(a);
    document.getElementById("htmlid").value =b;
}
function cleari(){
    document.getElementById("htmlid").value = "";
}
