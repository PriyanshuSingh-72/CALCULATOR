let allc = document.querySelector("#allc");
let delte = document.querySelector("#delete");
let dot = document.querySelector("#dot");
let slash = document.querySelector("#slash");
let display = document.querySelector("#display");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let mul = document.querySelector("#mul");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let add = document.querySelector("#add");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let sub = document.querySelector("#sub");
let double = document.querySelector("#double");
let zero = document.querySelector("#zero");
let equal = document.querySelector("#equal");





allc.addEventListener('click',()=>{
    display.value  = "";
})
delte.addEventListener("click",()=>{
    display.value = display.value.toString().slice(0,-1);
})
dot.addEventListener("click",()=>{
    display.value += dot.value;
})
slash.addEventListener("click",()=>{
    display.value += slash.value;
})
seven.addEventListener("click",()=>{
    display.value += 7;
})
eight.addEventListener("click",()=>{
    display.value += 8;
})
nine.addEventListener("click",()=>{
    display.value += 9;
})
mul.addEventListener("click",()=>{
    display.value += "*";
})
four.addEventListener("click",()=>{
    display.value += 4;
})
five.addEventListener("click",()=>{
    display.value += 5;
})
six.addEventListener("click",()=>{
    display.value += 6;
})
add.addEventListener("click",()=>{
    display.value += "+";
})
one.addEventListener("click",()=>{
    display.value += 1;
})
two.addEventListener("click",()=>{
    display.value += 2;
})
three.addEventListener("click",()=>{
    display.value += 3;
})
sub.addEventListener("click",()=>{
    display.value += "-";
})
double.addEventListener("click",()=>{
    display.value += double.value;
})
zero.addEventListener("click",()=>{
    display.value += 0;
})
equal.addEventListener("click",()=>{
    display.value = eval(display.value);
})
