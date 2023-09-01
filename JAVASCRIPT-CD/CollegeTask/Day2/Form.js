function value0(){
    var user = document.getElementById("inputId").value;
    var sp = document.getElementById("spId");
    if(user.length >= 4){
        sp.innerHTML = '<i class="fa-solid fa-check"></i>';
        sp.style.color = 'green';
    }
    else{
        sp.innerHTML = 'Name should be 8 characters'
        sp.style.color = 'red';
    }
}
function value1(){
    var pass = document.getElementById("passId").value;
    var sp1 = document.getElementById("spId2");
    if(pass.length >= 3){
        sp1.innerHTML = '<i class="fa-solid fa-check"></i>'
        sp1.style.color = 'green';
    }
    else{
        sp1.innerHTML = "Password atleast 6 characters";
        sp1.style.color = 'red';
    }
}
function checkInput(){
    var buttonId = document.getElementById("buttonId");
    var a = document.getElementById("inputId").value;
    var b = document.getElementById("passId").value;
    if(a == "vijay"){
        if(b == "123"){
            alert("valid user");
        }
        else{
            alert("enter valid password");
        }
    }
    else{
        alert("please enter valid name")
    }
}