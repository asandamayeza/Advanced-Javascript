/*****SPREAD OPERATOR***** */
// let spread = ["so", "much", "fun"];
// let message = ["JavaScript", "is", ...spread, "and", "very",
//     "powerful"];

// console.log(message)

// function addTwoNumbers(x, y) {
//     console.log(x + y);
// }
// let arr = [5, 9];
// addTwoNumbers(...arr);

// function addFourNumbers(x, y, z, a) {
//     console.log(x + y + z + a);
// }
// let arr1 = [5, 9];
// let arr2 = [6, 7];
// addFourNumbers(...arr, ...arr2);

/*****REST OPERATOR***** */
// function someFunction(param1, param2) {
//     console.log(param1, param2);
// }
// someFunction("hi", "there!", "How are you?");

/*****RETURNING FUNCTIN VALUE**** */
// function addTwoNumbers(x, y) {
//     return x + y;
// }
// let result = addTwoNumbers(4, 5);
// console.log(result);

// let resultsArr = [];
// for(let i = 0; i < 10; i ++){
//   let result = addTwoNumbers(i, 2*i);
//   resultsArr.push(result);
// }
// console.log(resultsArr);

/*****VARIABLE SCOPE**** */
// function testAvailability(x) {
//     console.log("Available here:", x);
// }
// testAvailability("Hi!");
// console.log("Not available here:", x); //logs error

// function testAvailability() {
//     let y = "Local variable!";
//     console.log("Available here:", y);
// }
// testAvailability();
// console.log("Not available here:", y);

// function testAvailability() {
//     let y = "I'll return";
//     console.log("Available here:", y);
//     return y;
// }
// let z = testAvailability();
// console.log("Outside the function:", z);
// console.log("Not available here:", y);// out of scope

/*****let vs var*** */
// function doingStuff() {
//     if (true) {
//       var x = "local";
//     }
//     console.log(x);
//   }
//   doingStuff();


/*****global variable** */


//   let globalVar = "Accessible everywhere!";
//   console.log("Outside function:", globalVar);
//   function creatingNewScope(x) {
//     console.log("Access to global vars inside function." , globalVar);
//   }
//   creatingNewScope("some parameter");
//   console.log("Still available:", globalVar);

//   let x = "global";
// function doingStuff() {
//   let x = "local";
//   console.log(x);
// }
// doingStuff();
// console.log(x);


// let x = "global";
// function doingStuff(x) {
//   console.log(x);
// }
// doingStuff("param");


/*****iife** */
// (function () {
//     console.log("IIFE!");
// })();
// (() => {
//     console.log("run right away");
// })();

/*****recursive functions** */
// function getRecursive(nr) {
//     console.log(nr);
//     if (nr > 0) {
//       getRecursive(--nr);
//     }
//   }
//   getRecursive(3);
// function logRecursive(nr) {
//     console.log("Started function:", nr);
//     if (nr > 0) {
//       logRecursive(nr - 1);
//     } else {
//         console.log("done with recursion");
//     }
//     console.log("Ended function:", nr);
//   }
//   logRecursive(3);

/*****nested functions** */
function doOuterFunctionStuff(nr) {
    console.log("Outer function");
    doInnerFunctionStuff(nr);
    function doInnerFunctionStuff(x) {
        console.log(x + 7);
        console.log("I can access outer variables:", nr);
    }
}
doOuterFunctionStuff(2);


/*****annonymous functions** */
// let functionVariable = function () {
//     console.log("Not so secret though.");
// };
// functionVariable()

/*****function callback** */
// function doFlexibleStuff(executeStuff) {
//     executeStuff();
//     console.log("Inside doFlexibleStuffFunction.");
//   }

//   doFlexibleStuff(functionVariable);

// let youGotThis = function () {
//     console.log("You're doing really well, keep coding!");
// };
// setTimeout(youGotThis, 1000);



