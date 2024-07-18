"user strict"
/******ARRAY**** */
// let arr1 = new Array("purple", "green", "yellow");
// let arr2 = ["black", "orange", "pink"];
// console.log(arr1);
// console.log(arr2);//better practise

// let arr3 = new Array(10);//this determines the capacity of the rates
// let arr4 = [10];// just adding element with value 10

// console.log(arr3);
// console.log(arr4);

// let arr = ["hi there", 5, true];
// console.log(`${arr[0]}is a ${typeof arr[0]}`);
// console.log(`${arr[1]}is a ${typeof arr[1]}`);
// console.log(`${arr[2]}is a ${typeof arr[2]}`);

// const arr = ["hi there"];
// arr[0]= "new value";
// console.log(arr[0]);

// //throws error because a value has already been assigned 
// arr = ["nope, now you are overwriting the array"];

// let cars = ["Toyota", "Renault", "Volkswagen"];
// console.log(cars[0]);
// console.log(cars[1]);
// console.log(cars[2]);
// //console.log(cars[3]);//it doesnt exist 
// cars[0] = "Tesla";
// console.log(`overwritten in 0 is ${cars[0]}`);
// console.log(cars);

// cars[3] = "Kia";
// cars[-1] = "Fiat";
// console.log(cars[3]);
// console.log(cars[-1]);

// console.log(cars);
// colors = ["black", "orange", "pink"]
// booleans = [true, false, false, true];
// emptyArray = [];
// console.log("Length of colors:", colors.length);
// console.log("Length of booleans:", booleans.length);
// console.log("Length of empty array:", emptyArray.length);

// let lastElement = colors[colors.length -1]
// console.log(lastElement);

// numbers = [12, 24, 36];
// numbers[5] = 48;
// console.log(numbers);
// console.log(numbers.length);

// let shoppingList = ["Milk", "Bread", "Apples"]
// console.log(shoppingList.length);
// shoppingList[1] = "Bananas"
// console.log(shoppingList)

// /*************ARRAY METHODS******** */
// let favoriteFruits = ["grapefruit", "orange", "lemon"];
// favoriteFruits.push("tangerine");
// console.log(favoriteFruits);
// let lengthOfFavoriteFruits = favoriteFruits.push("lime");
// console.log(favoriteFruits);
// console.log(favoriteFruits.length);

// let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
// arrOfShapes.splice(2, 0, "square", "trapezoid");
// console.log(arrOfShapes);

/********CONCAT METHOD** */
let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6);
console.log(arr7);

let arr8 = arr7.concat(7, 8, 9);
console.log(arr8)

/********DELETING ELEMENTS**** */
arr8.shift();
console.log(arr8);
arr8.splice(1, 3);
console.log(arr8)
delete arr8[0]; //it doesnt push to the front, it just deletes
console.log(arr8)

// let arr8 = [2, 6, 7, 8];
// let findValue = arr8.find((e) => e === 6);//finds actual value, not value at a certain index
// let findValue2 = arr8.find((e) => e === 10);//error because there is no value 10 
// console.log(findValue, findValue2);

// //finding using INDEXOF()
// let findValue3 =arr8.indexOf(6);
// let findValue4 = arr8.indexOf(4);//returns -1 because it doesnt exist
// console.log(findValue3, findValue4);

// /********SORTING ELEMENTS**** */
// let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
// console.log(names)
// names.sort();//ascending order
// console.log(names);
// names.reverse();//descending order OR just reverses the order
// console.log(names);


/****practice exercise 3.2 */
// let shoppingList = [];
// shoppingList = ["Milk", "Bread", "Apples"];
// shoppingList.splice(1,1, "Bananas", "Eggs");
// console.log(shoppingList);
// let lastElement = shoppingList.pop();
// console.log(shoppingList);
// shoppingList.sort();
// let findValue = shoppingList.indexOf("Milk");
// console.log(findValue);
// shoppingList.splice(1,0, "Carrots", "Lettuce");

// let shoppingList2 = ["Juice", "Pop"];
// let shoppingList3 = shoppingList.concat(shoppingList2, shoppingList2);

// console.log(shoppingList3)

/****multidimensional arrays.****** */
//2 dimensional
// let someValues1 = [1, 2, 3];
// let someValues2 = [4, 5, 6];
// let someValues3 = [7, 8, 9];
// let arrOfArrays = [someValues1, someValues2, someValues3];
// console.log(arrOfArrays);


// let arrOfArrays2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(arrOfArrays2);


// console.log(arrOfArrays[1][2]);

// let  arrOfArraysOfArrays = [arrOfArrays, arrOfArrays, arrOfArrays];
// console.log("Multi-dimensional Array", arrOfArraysOfArrays)


// let array = [1, 2, 3];
// let arrOfArrays3 = [array, array, array];
// console.log(arrOfArrays3[1][1]);

/*********OBJECTS******8 */
// let dog = {
//     dogName: "JavaScript",
//     weight: 2.4,
//     color: "brown",
//     breed: "chihuahua",
//     age: 3,
//     burglarBiter: true
// };
// console.log(dog);

// let dogColor = dog["color"];
// let dogColor2 = dog.color;

// console.log(dogColor);
// console.log(dogColor2)

// dog.color = "blue";
// dog.weight = 2.3;

// console.log(dog);

// dog.age = "three";
// let variable = "age";
// console.log(dog[variable]);

// variable = "breed";
// console.log(dog[variable]);

// dog[variable] = "dachshund";
// console.log(dog["breed"]);

// //practice exercise 3.4 

// let myCar = {
//     make: "Volkswagen",
//     model: "Polo",
//     color: "blue",
//     year: 2021,

// }

// let company = {
//     companyName: "Healthy Candy",
//     activity: "food manufacturing",
//     address: {
//         street: "2nd street",
//         number: "123",
//         zipcode: "33116",
//         city: "Miami",
//         state: "Florida"
//     },
//     yearOfEstablishment: 2021
// };
// console.log(company);

// company.address.zipcode = "33117";
// company["address"]["number"] = "100";
// console.log(company)



// company = {
//     companyName: "Healthy Candy",
//     activities: ["food manufacturing",
//         "improving kids' health", "manufacturing toys"],
//     address: {
//         street: "2nd street",
//         number: "123",
//         zipcode: "33116",
//         city: "Miami",
//         state: "Florida"
//     },
//     yearOfEstablishment: 2021
// };


// let addresses = [{
//     street: "2nd street",
//     number: "123",
//     zipcode: "33116",
//     city: "Miami",
//     state: "Florida"
// }, {
//     street: "1st West avenue",
//     number: "5",
//     zipcode: "75001",
//     city: "Addison",
//     state: "Texas"
// }];
// console.log(addresses)

// let streetName = addresses[0].street;
// console.log(streetName);


