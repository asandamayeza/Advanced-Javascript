//"use strict"
/******************REGEX */
//Specifying multiple options for words
// let text = "I love React and JavaScript!";
// console.log(text.match(/javascript|nodejs|react/i));
// //test question
// //g modifier finds all matches
// //i modifier makes the expression case insensitive
// console.log(text.match(/javascript|nodejs|react/gi));

//character options
// let text = "d";
// console.log(text.match(/[a-d]/));

// let text = "T";
// console.log(text.match(/[a-zA-Z]/));//lowercase and uppercase

// let text = "äé!";
// console.log(text.match(/[a-zA-Z0-9]/));//no match it  doesnt inclue special characters

// let text = "Just some text.";
// // console.log(text.match(/./g));//any can match 
// console.log(text.match(/\./g)); //fullstop

// let text = "I'm 29 years old.";
// console.log(text.match(/\d/g));//any digits

// let text = "Coding is a lot of fun!";
// console.log(text.match(/\s/g));//whitespace

// let text = "In the end or at the beginning?";
// console.log(text.match(/\bin/gi));//match text at beginning of string

// let nr = 357;
// console.log(nr.match(/3/g));//throws error . only works if its a string



//groups
// let text = "I love JavaScript!";
// console.log(text.match(/(love|dislike)\s(javascript|spiders)/gi));


// let text = "I love JavaScript!";
// console.log(text.match(/[a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9]/g));//dont pay much attention to this example


//let text = "You are doing great!";
//either 'ng' or 'g'
//console.log(text.match(/n?g/gi)); //n is optional

// let text = "123123123";
// let text2 = "123123123a";
// //+ allows for repitition
// console.log(text.match(/(123)+/));
// //*a finds any matches where a precedes 123
// console.log(text2.match(/(123)*a/));

// let text = "abcabcabc";
// //repitition can be specified {min,max}
// console.log(text.match(/(abc){1,2}/));

// let text = "I love JavaScript!";
// //<group name> specifies group
// console.log(text.match(/(?<language>javascript)/i));

//Searching and replacing strings
// let text = "That's not the case.";
// //return indec of the word we're searching for
// console.log(text.search(/Case/i));

// let text2 = "Coding is fun. Coding opens up a lot of opportunities.";
// //arg1: word in the string 
// //arg2: replacement 
// console.log(text2);//origina;
// console.log(text2.replace(/Coding/g, "JavaScript"));
// console.log(text2.replace("Coding", "JavaScript"));

//Email validation
// let emailPattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;
// let validEmail = "maaike_1234@email.com";
// let invalidEmail = "maaike@mail@.com";
// console.log(validEmail.match(emailPattern));
// console.log(invalidEmail.match(emailPattern));


/*********Functions and the arguments object***** */

// function test(a, b, c) {
//     //first call the parameter value 
//     //then calling the element of thr arguements array
//     console.log("first:", a, arguments[0]);
//     console.log("second:", b, arguments[1]);
//     console.log("third:", c, arguments[2]);
// }
// test("fun", "js", "secrets");


// function test(a, b, c) {
//     //a now has a value
//     a = "nice";
//     //b has a value
//     arguments[1] = "JavaScript";
//     console.log("first:", a, arguments[0]);
//     console.log("second:", b, arguments[1]);
//     //so we only specify c
//     console.log("third:", c, arguments[2]);
// }
// test("fun", "js", "secrets");


/*************JavaScript hoisting */
// let x;
// x = 5;
// console.log(x);

/*************strict mode */
// function sayHi() {
//     greeting = "Hello!";
//     console.log(greeting);
// } 
// sayHi();

//error handling 
// try {
//     trySomething();
// } catch (e) {
//     console.log("Oh oh");
// } finally {
//     console.log("Error or no error, I will be logged!");
// }

// function trySomething() {
//     alert ("Everything works now!");
//   }

/*********Using cookies********** */
// document.cookie = "name=Maiike;favoriteColor=black";
// let cookie = decodeURIComponent(document.cookie);
// let cookieList = cookie.split(";");
// for (let i = 0; i < cookieList.length; i++) {
//   let c = cookieList[i];
//   if (c.charAt(0) == " ") {
//     c = c.trim();
//   }
//   if (c.startsWith("name")) {
//     alert(c.substring(5, c.length));
// } }

// function setCookie(e) {
//     document.cookie = "name=" + e.value + ";";
// }
// function sayHi(key) {
//     let name = getCookie(key);
//     document.getElementById("hi").innerHTML = "Hi " + name;
// }
// function getCookie(key) {
//     let cookie = decodeURIComponent(document.cookie);
//     let cookieList = cookie.split(";");
//     for (let i = 0; i < cookieList.length; i++) {
//         let c = cookieList[i];
//         if (c.charAt(0) == " ") {
//             c = c.trim();
//         }
//         if (c.startsWith(key)) {
//             console.log("hi" + c);
//             return c.substring(key.length + 1, c.length);
//         }
//     }
// }

/******************LOCAL STORAGE****************** */
// let message = "Hello storage!";
// localStorage.setItem("example", message);
// if (localStorage.getItem("example")) {
//   document.getElementById("stored").innerHTML = localStorage.getItem("example");
// }
// console.log(window.localStorage.key(0));
// console.log(window.localStorage.key(0));

/******************JSON****************** */

// let object ={
//     "companies": [
//         {
//             "name": "JavaScript Code Dojo",
//             "addresses": [
//                 {
//                     "street": "123 Main street",
//                     "zipcode": 12345,
//                     "city": "Scott"
//                 },
//                 {
//                     "street": "123 Side street",
//                     "zipcode": 35401,
//                     "city": "Tuscaloosa"
//                 }
//             ]
//         },
//         {
//             "name": "Python Code Dojo",
//             "addresses": [
//                 {
//                     "street": "123 Party street",
//                     "zipcode": 68863,
//                     "city": "Nebraska"
//                 },
//                 {
//                     "street": "123 Monty street",
//                     "zipcode": 33306,
//                     "city": "Florida"
//                 }
//             ]
//         }
//     ]
// }

//PARSING 
let str = "{\"name\": \"Maaike\", \"age\": 30}";
let obj = JSON.parse(str);
console.log(obj.name, "is", obj.age);

let dog = {
    "name": "wiesje",
    "breed": "dachshund"
};
let strdog = JSON.stringify(dog);
console.log(typeof strdog);
console.log(strdog);


