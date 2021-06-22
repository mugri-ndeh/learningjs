//guessing game
export function guess(num){
guess = parseInt(Math.random()*10);
    
console.log(guess);

num = window.prompt("Enter a number to guess");

if(num==guess){
alert("Correct Guess")

}
else{
    alert("Wrong guess try again")
}
}
