let winnigNumber = 15;
let userGuess = +prompt('Guess a number');

if (userGuess === winnigNumber) {
    console.log('Your guess is right!!')
} else {
    if (userGuess < winnigNumber) {
        console.log('Too low!!')
    } else {

        console.log("Too high!!")
    }
}