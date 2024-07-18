const array = ["Rock", "Paper", "Scissors"];
let player = Math.floor(Math.random() * 3);
let computer = Math.floor(Math.random() * 3);
let message = `players is ${array[player]} and computer is ${array[computer]}`;
if (player === computer) {
    console.log("It's a tie!");
} else if (
    (player === 0 && computer === 2) ||
    (player === 1 && computer === 0) ||
    (player === 2 && computer === 1)
) {
   message += " Player wins! ";
} else {
    message += " Computer wins!";
}
console.log(message);




