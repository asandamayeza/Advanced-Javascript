"user strict"

//function
// function Dog(dogName, weight, color, breed) {
//     this.dogName = dogName;
//     this.weight = weight;
//     this.color = color;
//     this.breed = breed;
// }
//class (gives you more flexibility compared to function)
// class Dog {
//     constructor(dogName, weight, color, breed) {
//       this.dogName = dogName;
//       this.weight = weight;
//       this.color = color;
//       this.breed = breed;
//   } }
// //object
// let dog = new Dog("Jacky", 30, "brown", "labrador");
// console.log(dog.dogName, "is a", dog.breed, "and weighs", dog.weight,
// "kg.");

// class Person {
//     constructor(firstname, lastname) {
//       this.firstname = firstname;
//       this.lastname = lastname;
//     }
//   }
//   let p = new Person("Maaike", "van Putten");
//   alert(`hi there, ${p.firstname} ${p.lastname}`)

//exercise 7.1 
//   class Person {
//     constructor(firstname, lastname) {
//      this.firstname = firstname;
//     this.lastname = lastname;

//     }
//   }
//   let newFriend = new Person("Asanda","Mayeza");
//   let newFriend2 = new Person("Nomaswazi","Dlamini");
//   alert(`hi there, ${newFriend.firstname} and ${newFriend2.firstname}`)


// class Person {
//     constructor(firstname, lastname) {
//       this.firstname = firstname;
//       this.lastname = lastname;
//     }
//     greet() {
//       console.log("Hi there!", this.firstname);
//   }
//     compliment(name, object) {
//       return "That's a wonderful " + object + ", " + name;
//   } }
//   let p = new Person("Maaike", "van Putten");
//   p.greet();
//   let compliment = p.compliment("Harry", "hat");
//   console.log(compliment);

//exercise 7.2
// class Person { 
//     constructor(firstname, lastname) { 
//     this.firstname = firstname; 
//     this.lastname = lastname;
//     } 
//     fullname(){
//         return this.firstname + " " + this.lastname;
//     }
// } 
// let person1 = new Person("Asanda", "Mayeza");
// let person2 = new Person("Nomaswazi", "Dlamini");
// console.log(person1.fullname());
// console.log(person2.fullname());

//properties
// class Person {
//     #firstname;
//     #lastname;
//     constructor(firstname, lastname) {
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }
// }

// let p = new Person("Maria", "Saga");
// console.log(p.firstname);

//getters and setters
// class Person {
//     #firstname;
//     #lastname;
//     constructor(firstname, lastname) {
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }
//     get firstname() {
//         return this.#firstname;
//     }
//     set firstname(firstname) {
//         this.#firstname = firstname;
//     }
//     get lastname() {
//         return this.#lastname;
//     }
//     set lastname(lastname) {
//         this.#lastname = lastname;
//     }
// }
// let p = new Person("Maria", "Saga");
// console.log(p.firstname);

//inheritance
class Vehicle {
    constructor(color, currentSpeed, maxSpeed) {
        this.color = color;
        this.currentSpeed = currentSpeed;
        this.maxSpeed = maxSpeed;
    }
    move() {
        console.log("moving at", this.currentSpeed);
    }
    accelerate(amount) {
        this.currentSpeed += amount;
    }
}

//subclass
class Motorcycle extends Vehicle {
    constructor(color, currentSpeed, maxSpeed, fuel) {
        super(color, currentSpeed, maxSpeed);
        this.fuel = fuel;
    }
    doWheelie() {
        console.log("Driving on one wheel!");
    }
}
let motor = new Motorcycle("Black", 0, 250, "gasoline");
console.log(motor.color);
motor.accelerate(50);
motor.move();

//prototypes
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    greet() {
        console.log("Hi there!");
    }
}
Person.prototype.introduce = function () {
    console.log("Hi, I'm", this.firstname);
};

Person.prototype.favoriteColor = this.favoriteColor
Person.prototype.favoriteColor + "aqua"

let p = new Person("Maria", "Saga");
console.log(p.favoriteColor);
p.introduce();

