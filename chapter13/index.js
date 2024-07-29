//CALLBACKS

// function judge(grade) {
//     switch (true) {
//         case grade == "A":
//             console.log("You got an", grade, ": amazing!");
//             break;
//         case grade == "B":
//             console.log("You got a", grade, ": well done!");
//             break;
//         case grade == "C":
//             console.log("You got a", grade, ": alright.");
//             break;
//         case grade == "D":
//             console.log("You got a", grade, ": hmmm...");
//             break;
//         default:
//             console.log("An", grade, "! What?!");
//     }
// }
// function getGrade(score, callback) {
//     let grade;
//     switch (true) {
//         case score >= 90:
//             console.log(score)
//             grade = "A";
//             break;
//         case score >= 80:
//             console.log(score);
//             grade = "B";
//             break;
//         case score >= 70:
//             console.log(score);
//             grade = "C";
//             break;
//         case score >= 60:
//             console.log(score);
//             grade = "D";
//             break;
//         default:
//             grade = "F";
//     }
//     callback(grade);
// }
// getGrade(85, judge);
// getGrade(11, judge);
// getGrade(77, judge);
// getGrade(62, judge);
// getGrade(96, judge);


// setInterval(encourage, 500); //every half a second it will keep on printing . 500ms
// function encourage() {
//     console.log("You're doing great, keep going!");
// }



// /**********************PROMISES********************* */
// let promise = new Promise(function (resolve, reject) {
//     // do something that might take a while
//     // let's just set x instead for this example
//     let x = 20;
//     if (x > 10) {
//         resolve(x); // on success
//     } else {
//         reject("Too low"); // on error 
//     }
// });


// promise.then(
//     //RESOLVE
//     function (value) {
//         console.log("Success:", value);
//     },
//     //REJECT
//     function (error) {
//         console.log("Error:", error);
//     }
// );


// const promise = new Promise((resolve, reject) => {
//     resolve("success!");
// })
//     .then(value => {
//         console.log(value);
//         return "we";
//     })
//     .then(value => {
//         console.log(value);
//         return "can";
//     })
//     .then(value => {
//         console.log(value);
//         return "chain";
//     })
//     .then(value => {
//         console.log(value);
//         return "promises";
//     })
//     .then(value => {
//         console.log(value);
//     })
//     .catch(value => {
//         console.log(value);
//     })

// const promise = new Promise((resolve, reject) => {
//     reject("oops... ");
// })
//     .then(value => {
//         console.log(value);
//         return "we";
//     })
//     .then(value => {
//         console.log(value);
//         return "can";
//     })
//     .then(value => {
//         console.log(value);
//         return "chain";
//     })
//     .then(value => {
//         console.log(value);
//         return "promises";
//     })
//     .then(value => {
//         console.log(value);
//     })
//     .catch(value => {
//         console.log(value);
//     })



/*************ASYNC AND WAIT ************** */

// function saySomething(x) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("something" + x);
// }, 2000); });
// }
// async function talk(x) {
//     const words = await saySomething(x);
//     console.log(words);
// }
// talk(2);
// talk(4);
// talk(8);

/*************EVENT LOOP ************** */
//CALL STACK AND CALLBACK QUEUE
console.log("Hi there");
setTimeout(() => console.log("Sorry I'm late"), 1000);
console.log(add(4, 5));
function add(x, y) {
    return x + y;
}
