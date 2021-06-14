function divide(divisor, divident) {
    let result = divisor/divident;
    return result;
}

let num1 = 0;
let num2 = 5;

answer = divide(num2,num1);

if(answer!=Infinity){
    console.log("Correct division");
}
else{
    throw new Error("Invalid operation on didvion. Divisor cannot be zero")
}
