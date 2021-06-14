let countdown = function(num){
    if(num===1){
        console.log(num);
        return;
    }else{
        console.log(num);
        countdown(num-1);
    }
}

countdown(5);

function factorial(num){
    if(num===0 || num === 1){
        return 1;
    }
    else{
        return num*factorial(num-1);
    }
}

let x = factorial(5);
console.log(x);