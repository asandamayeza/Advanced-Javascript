
// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }

// let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
// console.log(someArray)
// let notFound = true;
// while (notFound && someArray.length > 0) {
//     if (someArray[0] === "Louiza") {
//         console.log("Found her!");
//         notFound = false;
//     } else {
//         someArray.shift();
//         console.log(someArray)
//     }
// }

// let nr1 = 0;
// let nr2 = 1;
// let temp;
// fibonacciArray = [];
// while (fibonacciArray.length < 25) {
//     fibonacciArray.push(nr1);
//     temp = nr1 + nr2;
//     nr1 = nr2;
//     nr2 = temp;
// }
// console.log(fibonacciArray)

//exercise 5.1

// let maxValue = 10;
// let ran = Math.floor(Math.random()* maxValue) + 1;
// console.log(ran)
// let track = false;
// while (track) {
//     let guess = Number(prompt("enter a number between 1 - 10"));
//     guess = Number(guess);
//     if (guess === ranNumber){
//         correct = true;
//         console.log("You got it " + ranNumber);
//     }else if (guess > ranNumber) {
//         console.log("Too high");
//     } else {
//         console.log("Too Low");
//     }
// }

//do while loops 
// let number;
// do {
//   number = prompt("Please enter a number between 0 and 100: ");
//   alert(`you choose the number: ${number}`)
// } while (!(number >= 0 && number < 100));

//exercise 5.2
// let counter = 0; 
// let step = 10;
// do {
//     console.log(counter);
//     counter += step;
// }
// while(counter <=100);

//for loops
// let arr = [];
// for (let i = 0; i < 100; i++) {
//   arr.push(i);
// }console.log(arr)

//exercise 5.3
// let myWork = [];
// for (let i = 0; i < 10; i++) {
//     let stat = 1 % 2 ? true : false;
//     let temp = {
//         name: `Lesson ${i}`, status: stat
//     };
//     myWork.push(temp);
// }

// console.log(myWork);

//nested loops
// let arrOfArrays = [];
// for (let i = 0; i < 3; i++){
//   arrOfArrays.push([]);//[[],[],[]]
//   for (let j = 0; j < 7; j++) {
//     arrOfArrays[i].push(j);// [[0,1,2,3]]
//   }
// }console.table(arrOfArrays);

//for of loops
// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let i = 0; i < names.length; i ++){
//   names[i] = "hello " + names[i];
//   console.log(names[i]);
// }
// for (let name of names) {
//     console.log(name)
// }

//exercise 5.4
// const myTable = [];
// const rows = 4;
// const cols = 7;
// let counter = 0;
// for (let y = 0; y < rows; y++) {
//     let tempTable = [];
//     for (let x = 0; x < cols; x++) {
//         counter++;
//         tempTable.push(counter);
//     }
//     myTable.push(tempTable);
// }
// console.table(myTable);

//exercise 5.5
// const grid = [];
// const cells = 64;
// let counter = 0;
// let row;
// for (let x = 0; x < cells + 1; x++) {
//     if (counter % 8 ==0){
//         if (row != undefined){
//             grid.push(row)
//         }
//     } row = [];
// }

//5.6
// let arr = [];
// for (let i = 1; i < 16; i++) {
//     arr.push(i);
// }
// console.log(arr);
// //using a for a loop
// for (let j = 0; j < 15; j++){
//     console.log(arr[j]);
// }

// console.log("");
// console.log("******USING FOR *****")
// //using  a for loop 
// for(let e of arr) {
//     console.log(`the element in index ${arr.indexOf(e)}: ${e}`);
// }

// let car = {
//     model: "Golf",
//     make: "Volkswagen",
//     year: 1999,
//     color: "black",
//   };
//   for (let prop in car){
//     console.log(`${prop} : ${car[prop]}`);
//   }

//   let carKeys = Object.keys(car);
//   console.log(carKey);


//   for (let key of carKeys) {
//     console.log(key)
//   };

//   for(let i = 0; i < carKeys.length; i++) {
//     console.log(carKeys[i] + ": " + car[carKeys[i]]);
//   }

// break and continue
// let cars = [ {
//     model: "Golf",
//     make: "Volkswagen",
//     year: 1999,
//     color: "black",
// }, {
//     model: "Picanto",
//     make: "Kia",
//     year: 2020,
//     color: "red",
// }, {
//     model: "Peugeot",
//     make: "208",
//     year: 2021,
//     color: "black",
// }, {
//     model: "Fiat",
//     make: "Punto",
//     year: 2020,
//     color: "black",
// } ];
// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     if(i === 4) {
//         break;
//     }
// }

// for (let i = 0; i < cars.length; i++) {
//     if (cars[i].year >= 2020) {
//       if (cars[i].color === "black") {
//         console.log("I have found my new car:", cars[i]);
//         break;
//   } }
//   }
//continue
for (let i = 0; i < 50; i = i + 2) {

    console.log(i)
}


let groups = [
    ["Martin", "Daniel", "Keith"],
    ["Margot", "Marina", "Ali"],
    ["Helen", "Jonah", "Sambikos"],
  ];

  
for (let i = 0; i < groups.length; i++) {
    let matches = 0;
  for (let j = 0; j < groups[i].length; j++) {
    if(groups[i][j].startsWith("M")){
        matches++;
      } else {
  continue; }
    if (matches === 2){
        console.log("Found a group with two names starting with an M:");
        console.log(groups[i]);
        break;
  } }
  }
