let age = Number(prompt("Guess how old I am "));
let  number = 24;
let message;
if (age > number) {
    message =  age + "?? too old! Im younger than that ";

} else if (age === number  ) {
    message = "yes! you guess right! Im " + age + " years old ";

}else {
    message = " too young! Im older than" +  " " + age + " " +"years";

}
alert (message);
console.log(message);
