//ES6JS

let add = (num1, num2) => num1+num2;

let fact = (num)=>{
    if(num===0||num===1){
        return 1;
    }
    else return num*fact(num-1);
}

// js template literals

var name = "chrome";
console.log(`Hello ${name}`);

var array = ["I", "am", "groot", "yep"];

var array_1 = ["Hello",...array];

console.log(...array_1);

function hello(...ay){
    console.log(...ay);
}

hello(...array, ...array_1);

let map = new Map();

map.set('map', {"name":"Mugri", "school":"Fet"});

console.log(map.get('map'));