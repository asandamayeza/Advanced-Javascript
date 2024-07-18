/*******else statement*** */
// let rain = false;
// if (rain) {
//     console.log("** Taking my umbrella when I need to go outside **");
// } else {
//     console.log("** I can leave my umbrella at home **");
// }

// let age = Number(prompt("how old are you?"));
// if (age < 18) {
//     alert("sorry, you can not get in under 18.");
// }else {
//     alert("welcome!")
// }

//exercise 4.1 
// let variable = false;
// console.log(variable)
// if(variable){
//     console.log("the variable is true");
// }else {
//     console.log("variable is false");
// }

// let age = Number(prompt("how old are you ?"));
// let cost = 0;
// let message;
// if (age < 3) {//age 0 to 2
// cost = 0;
//     message = "Access is free under three.";
// } else if (age >= 3 && age < 12) {//age 3 to 11
// cost = 5;
//     message ="With the child discount, the fee is 5 dollars";
// } else if (age >= 12 && age < 65) {//age 12 to 64
//     cost = 10;
//     message ="A regular ticket costs 10 dollars.";
// } else { //age 65 and above
//     cost = 7;
//     message ="A ticket is 7 dollars.";
// }
// alert(`Because you are ${age} : ${message}`)
// console.log(message);
// console.log("Your Total cost "+cost);


//exercise 4.2

// let age = Number(prompt("how old are you ?"));
// let message;
// if (age >= 21) {
//     message = "you have entry to access the venue and you can purchase alcohol"

// }else if (age >= 19 && age < 21) {
//     message = "you have entry to access the venue. but you cannot purchase alcohol since you under 21."

// }else {
//     message = " access to venue denied"
// }
// console.log(message);

/********Conditional ternary operators****/

// let age = Number(prompt("how old are you ?"));
// let access = age < 18 ? "Access denied" : "Welcome";
// alert(access);

// let id = false;
// let access = id ? "granted access" : "access denied";
// console.log(access);

/********switch statement ****/
// let activity = "Lunch";

// if (activity === "Get up") {
//     console.log("It is 6:30AM");
// } else if (activity === "Breakfast") {
//     console.log("It is 7:00AM");
// } else if (activity === "Drive to work") {
//     console.log("It is 8:00AM");
// } else if (activity === "Lunch") {
//     console.log("It is 12.00PM");
// } else if (activity === "Drive home") {
//     console.log("It is 5:00PM")
// } else if (activity === "Dinner") {
//     console.log("It is 6:30PM");
// }


//switch statement 
// switch (activity) {
//     case "Get up":
//         console.log("It is 6:30AM");
//         break;
//     case "Breakfast":
//         console.log("It is 7:00AM");
//         break;
//     case "Drive to work":
//         console.log("It is 8:00AM");
//         break;
//     case "Lunch":
//         console.log("It is 12:00PM");
//         break;
//     case "Drive home":
//         console.log("It is 5:00PM");
//         break;
//     case "Dinner":
//         console.log("It is 6:30PM");
//         break;
//     default: 
//     console.log("I can not determine the current time ");
//     break;
// }

//exercise 4.4
let randomNumber = Math.floor(Math.random() * 6);
let input = string(prompt("ask me anything"))

switch (activity) {
    case "0":
        console.log("a ");
        break;
    case "1":
        console.log("d");
        break;
    case "2":
        console.log("f");
        break;
    case "3":
        console.log("c");
        break;
    case "4":
        console.log("d");
        break;
    case "5":
        console.log("r");
        break;
    default: 
    console.log("w");
    break;
}
