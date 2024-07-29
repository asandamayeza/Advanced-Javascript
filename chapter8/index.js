/*******ENDCODING AND DECODING URLs******* */
// let uri = "https://www.example.com/submit?name=maaike van putten";
// let encoded_uri = encodeURI(uri);
// console.log("Encoded:", encoded_uri);
// let decoded_uri = decodeURI(encoded_uri);
// console.log("Decoded:", decoded_uri);

/*******ENDCODING AND DECODING URLs******* */
// let encoded_uri = encodeURIComponent(uri);
// console.log("Encoded:", encoded_uri);
// let decoded_uri = decodeURIComponent(encoded_uri);
// console.log("Decoded:", decoded_uri);

/******PRACTICE EXERCISE 8.1******* */
// let secretMes1 = "How's%20it%20going%3F"
// let secretMes2 = "How's it going?";
// let decodedComp = decodeURIComponent(secretMes1);
// console.log(decodedComp);
// let encodedComp = encodeURIComponent(secretMes2);
// console.log(encodedComp);
// let uri = "http://www.basescripts. com?=Hello World";
// let encoded = encodeURI(uri);
// console.log("Encoded:", encoded);



// /*******PASSING NUMBERS (PARSEINT())******* */
// let str_int = "6";
// let int_int = parseInt(str_int);
// console.log("Type of ", int_int, "is", typeof int_int);

// let str_nan = "hello!";
// let int_nan = parseInt(str_nan);
// console.log("Type of", int_nan, "is", typeof int_nan);
// /*******ENDCODING AND DECODING URLs******* */
// let str_float = "7.6";
// let float_float = parseFloat(str_float);
// console.log("Type of", float_float, "is", typeof float_float);
/*******ARRAY METHODS******* */
//FOREACH
// let arr = ["grapefruit", 4, "hello", 5.6, true];
// function printStuff(element, index) {
//   console.log("Printing stuff:", element, "on array position:", index);
// }
// arr.forEach(printStuff);

/*******FILTERING ARRAYS******* */
// let arr = ["squirrel", 5, "Tjed", new Date(), true];
// function checkString(element, index) {
//   return typeof element === "string";
// }
// let filterArr = arr.filter(checkString);
// console.log(filterArr);

// console.log(arr.every(checkString)); // RETURN FALSE


/***********REPLACING ARRAY ELEMENTS */
// let arr = ["grapefruit", 4, "hello", 5.6, true];
// console.log(`original array : ${arr}`);
// arr.copyWithin(0, 3, 5);
//0: replacing grapefruit
//3: coping from index 3 - 5.6 is the value
//5: the last index we want to copy from + 1
// console.log(`new array: ${arr}`);

/***********MAPPING VALUES */
// let arr = [1, 2, 3, 4];
// let mapped_arr = arr.map(x => x + 1);
// console.log(mapped_arr);


/***********LAST OCCURANCE */
// let bb = ["so", "bye", "bye", "love"];
// console.log(bb.lastIndexOf("bye"));
// console.log(bb.lastIndexOf("hi"))


/***********PRACTICE EXERCISE 8.2*/
// let arr = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike",
// "Laurence", "Mike", "Laurence", "Mike"];
// let filterArr = arr.filter (function(value, index, array){
//     return array.indexOf(element)===index;
// });
// console.log(filterArr);

// //exercise 8.3
// let Arr= [1,2,3,4,5,6,7];
// let myArr1 = Arr.map(function(ele){
//     return ele * 2;
// });
// console.log(myArr1);

// const myArr2 = Arr.map((ele)=> ele*2);
// console.log(myArr2)



/***********STRING METHODS*****/
// /***********combiining strings *****/
// let s1 = "Hello ";//helo with a space
// let s2 = "JavaScript";
// let result = s1.concat(s2);
// console.log(`String 1: ${s1}`);
// console.log(`String 2: ${s2}`);
// console.log(`result: ${result}`);

// /***********converting strings to array*****/
// let arr_result = result.split(" ");
// console.log(arr_result);

// let favoriteFruits = "strawberry,watermelon,grapefruit";
// let arr_fruits = favoriteFruits.split(",");
// console.log(arr_fruits);
// /***********converting an array to string  *****/
// let letters = ["a", "b", "c"];
// let x = letters.join();
// console.log(x);


// /***********Working with index and positions *****/


// /***********substrings*****/
// let str = "Create a substring";
// let substr1 = str.slice(5);
// let substr2 = str.slice(0,3);
// console.log("1:", substr1);
// console.log("2:", substr2);


// /***********replace *****/
// let hi = "Hi buddy";
// let new_hi = hi.replace("buddy", "Pascal");
// console.log(new_hi);
// console.log(hi);

// /***********casting *****/
// let low_bye = "bye!";
// let up_bye = low_bye.toUpperCase();
// console.log(up_bye);

// let caps = "HI HOW ARE YOU?";
// let fixed_caps = caps.toLowerCase();
// console.log(fixed_caps);


/**********start and end of a string******/
// let encouragement = "You are doing great, keep up the good work!";
// let bool_start = encouragement.startsWith("You");
// console.log(bool_start);

// let bool_start2 = encouragement.startsWith("you");
// console.log(bool_start2);

// let bool_end = encouragement.endsWith("Something else");
// console.log(bool_end);

/**********number methods******/
//ISNAN
// let x = 34;
// console.log(isNaN(x)); // FALSE
// console.log(!isNaN(x));//TRUE

// let str = "hi";
// console.log(isNaN(str));//TRUE

//ISFINITE
// let x = 3;
// let str = "finite";
// console.log(isFinite(x));
// console.log(isFinite(str));
// console.log(isFinite(Infinity));
// console.log(isFinite(10 / 0)); //UNDEFINED

// //ISINTEGER
// let x = 3;
// let str = "integer";
// console.log(Number.isInteger(x));
// console.log(Number.isInteger(str));
// console.log(Number.isInteger(Infinity));
// console.log(Number.isInteger(2.4));

/**********SPECIFYING DECIMAL PLACES******/
// let x = 1.23456;
// let newX = x.toFixed(2); //2 DECIMAL PLACES 
// console.log(newX);

// let newX2 = x.toPrecision(2); //2 numbers
// console.log(newX2);


/**********math methods ******/
//max and min
// let highest = Math.max(2, 56, 12, 1, 233, 4);
// console.log(highest);

// let lowest = Math.min(2, 56, 12, 1, 233, 4);
// console.log(lowest);

// //square root 
// let result = Math.sqrt(64);
// console.log(result);

// let result2 = Math.pow(5, 3); //5 * 5 * 5
// console.log(result2);

// //round - rounds to the nearest decimal
// let x = 6.78;
// let y = 5.34;
// console.log("X:", x, "becomes", Math.round(x));
// console.log("Y:", y, "becomes", Math.round(y));

// //ceil - removes decimals
// let negativeX = -x;
// let negativeY = -y;
// console.log("negativeX:", negativeX, "becomes", Math.ceil(negativeX));
// console.log("negativeY:", negativeY, "becomes", Math.ceil(negativeY));

// //floor - rounds down
// console.log("X:", x, "becomes", Math.floor(x));
// console.log("Y:", y, "becomes", Math.floor(y));

// console.log("negativeX:", negativeX, "becomes", Math.floor(negativeX));
// console.log("negativeY:", negativeY, "becomes", Math.floor(negativeY));

// //trunc - removes decimal places
// console.log("X:", x, "becomes", Math.trunc(x));
// console.log("Y:", y, "becomes", Math.trunc(y));

// console.log("negativeX:", negativeX, "becomes", Math.trunc(negativeX));
// console.log("negativeY:", negativeY, "becomes", Math.trunc(negativeY));

//exponents and logarithm
// let x = 2;
// let exp = Math.exp(x);
// console.log("Exp:", exp);
// let log = Math.log(exp);
// console.log("Log:", log);


/**********DATE METHODS ******/
// let currentDateTime = new Date();
// console.log(currentDateTime);

// let now2 = Date.now();
// console.log(now2);

// let milliDate = new Date(1000);
// console.log(milliDate);

// let stringDate = new Date("Sat Jun 05 2021 12:40:12 GMT+0200");
// console.log(stringDate);

// let specificDate = new Date(2022, 1, 10, 12, 10, 15, 100);
// console.log(specificDate);


/**********Methods to get and set the elements of a date ******/
// let d = new Date();
// console.log("Day of week:", d.getDay());
// console.log("Day of month:", d.getDate());
// console.log("Month:", d.getMonth());
// console.log("Year:", d.getFullYear());
// console.log("Seconds:", d.getSeconds());
// console.log("Milliseconds:", d.getMilliseconds());
// console.log("Time:", d.getTime());
// d.setFullYear(2010);
// console.log(d)

// d.setMonth(9);
// console.log(d);

// d.setHours(10);
// console.log(d);

// d.setTime(1622889770682);
// console.log(d);

//parsing
// let d1 = Date.parse("June 5, 2021");
// console.log(d1);

// let d2 = Date.parse("6/5/2021");
// console.log(d2);

// console.log(d.toDateString());
// console.log(d.toLocaleDateString());


//practise exercise 8.3
// let numbers = [1, 2, 3, 4, 5];

// let updatedArray = numbers.map(function (num) {
//     return num * 2;
// });
// console.log(updatedArray);

// let updatedArrayArrow = numbers.map(num => num * 2);
// console.log(updatedArrayArrow);

//practise exercise 8.4
// function capitalizeWords(sentence) {
//     let lowercaseSentence = sentence.toLowerCase();
//     let capitalizedWords = [];
//     let words = lowercaseSentence.split(' ');

//     words.forEach(word => {
//         let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
//         capitalizedWords.push(capitalizedWord);
//     });

//     let capitalizedSentence = capitalizedWords.join(' ');
//     return capitalizedSentence;
// }


// let sentence = "thIs will be capiTalized for each word";
// let capitalizedSentence = capitalizeWords(sentence);
// console.log(capitalizedSentence);

//practise exercise 8.5
// let str = "I love JavaScript".toLowerCase();

// let vowels = ['a', 'e', 'i', 'o', 'u'];

// vowels.forEach(vowel => {
//     console.log(`Replacing ${vowel}...`);

//     str = str.replaceAll(vowel, vowels.indexOf(vowel) + 1);
// });


// console.log(str);

// //practise exercise 8.6
// console.log(Math.PI);

// console.log(Math.ceil(5.7));
// console.log(Math.floor(5.7));
// console.log(Math.round(5.7));

// console.log(Math.random());

// console.log(Math.floor(Math.random() * 11));

// console.log(Math.floor(Math.random() * 10) + 1);

// console.log(Math.floor(Math.random() * 100) + 1);

// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// for (let i = 0; i < 100; i++) {
//     console.log(getRandomNumber(1, 100));
// } 

// //practise exercise 8.7
let date = new Date('2024-02-20');
console.log(date);

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let day = date.getDate();

let year = date.getFullYear();

let monthIndex = date.getMonth();

let monthName = months[monthIndex];

console.log(`${monthName} ${day}, ${year}`);








