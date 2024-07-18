let fName = prompt("what is your name ?").toLowerCase();
let message;
switch (fName) {
    case "asanda":
    case "nomonde":
    case "khwezi":
        message = `${fName} is my friend !`;
        break;
    default:
        message = `sorry! ${fName} is not my friend`;


}
alert(message);
console.log(message);
