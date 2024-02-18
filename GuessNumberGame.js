
document.addEventListener("DOMContentLoaded", function() {
    const numElement = document.getElementById("num");
    const guessInput = document.getElementById("guess");
    const resultElement = document.getElementById("result");
    const btn = document.getElementById("btn");
    
    const random = Math.floor(Math.random() * parseInt(numElement.textContent)) + 1;
    console.log(random);
    
    btn.addEventListener("click", function() {
        const guess = parseInt(guessInput.value);
        
        if (isNaN(guess)) {
            resultElement.textContent = "Please enter a valid number!";
            return;
        }

        if (guess === random) {
            resultElement.textContent = `Congratulations! Your guess (${guess}) is correct!`;
        } else if (guess < random) {
            resultElement.textContent = "Your guess is too low. Please guess a higher number.";
        } else {
            resultElement.textContent = "Your guess is too high. Please guess a lower number.";
        }
    });
});



































// let num = document.getElementById("num")


// const random = Math.floor(Math.random()* num ) + 1;
// console.log(random);
// let guess = prompt("Enter your Guess number");
// btn.onClick()=>{
//     while(true){
//         if(guess=="quit"){
//             console.log("you are quit the game");
//             break;
//         }
//         if(guess==random){
//             display.innerHTML=`Your Guess Number is Right = ${guess}`
//            // console.log("Your Guess number is right",guess);
//             break;
//         } else if(guess < random){
//             console.log("please enter a another number ");
//             guess = prompt(" your guess number is small please enter a big number");
//         }
//         else{
//             console.log("your number is big please enter a small number");
//         }
//     } 
// }







