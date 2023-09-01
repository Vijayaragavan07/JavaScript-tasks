// Array  methods

// var btn = document.getElementById("btn");
// btn.addEventListener("click",()=>{
//     var a=[1,2,3,4,5,6,7,"Afrith"];
//     var b = document.getElementById("txt").value;
//     console.log(b)
//     a.push(b);
//     document.getElementById("demo").innerHTML=a;
//     // a.pop();
//     // a.unshift();
//     // a.shift();
//     // a.splice(4,2,14,15,16,17);

//     //document.write(a);
// })

// slice operator example calculator application single element deletion

// var a=[1,2,3,4,5,6,7,8];
// var b=a.slice(1,3);
// document.write(b+"<br>");
// document.write(a+"<br>");
// var c=a.slice(0,-1);
// document.write(c);

// join method

// var a =[1,2,3,4,5,6,7,8,9];
// document.write(a.join()+"<br>");
// document.write(a.join("")+"<br>");
// document.write(a.join("-")+"<br>");
// document.write(a.join(", ")+"<br>");

// // to string method 
// document.write(a[0]);
// var b=document.write(a.toString(a));
// document.write(b);

// concat method 
var a =[1,2,3,4,1,2,7,2,8,2,5,6,7,8,9,1];
var b=[12,23,34,45,56,67,78,89,90]
var c=[109,108,107,106,105,104,103,102, 101];
var d=a.concat(b,c);
document.write(d+"<br>");
document.write(a.indexOf(1)+"<br>");
document.write(a.lastIndexOf(2,4)+"<br>")

// includes method 
// it return false
document.write(a.includes(1)+"<br>");
document.write(a.includes(1,4)+"<br>")

// find method
var res=a.find(function(e){
    return e>4;
})
document.write(res+"<br>")

// filter method

var res=a.filter(function(e){
    return e>4;
})
document.write(res)
