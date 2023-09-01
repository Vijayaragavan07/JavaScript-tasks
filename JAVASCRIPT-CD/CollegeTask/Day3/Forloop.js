// let inputEl = document.getElementById("inputId")
// let s=1;
// let end=5;
// for(let st = 1; st<=end; st++){
//     s = s * st;
// }
// console.log("sum of series : "+s);
var a = 2;
console.log(a);
let count = 0;
for (let i = 0; i <= a; i++) {
    for (let j = i; j >= 1; j--) {
        if (a % j == 0) {
            count += 1;
        }
    }

}
if (count == 2) {
    console.log("prime number");
}

else {
    console.log("non-prime number");
}