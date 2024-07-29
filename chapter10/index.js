"use strict"
console.dir(document.body);
//moving down the tree
console.dir(document.body.children.forest.children.tree2.children.
    shrubbery.children.treasure);

console.dir(document.body.childNodes[3].childNodes[3].childNodes[1].
    childNodes[1]); 

// console.dir(
//     document.body.children.forest.children.tree2.parentElement);//moving up

// console.dir(document.body.children.forest.children.tree2);  // moving sideway

// console.dir(document.body.children.forest.children.tree2.previousElementSibling);

// console.dir(document.body.children.forest.children.tree1.nextElementSibling);


/**********Selecting elements as objects********* */

// console.dir(document.body.children.greeting);

// //CHANGING innerTEXT
// document.body.children.greeting.innerText = "Bye!";
// //changing innerHTML
// document.body.children.greeting.innerText = "<p>Bye!</p>";

/**********Accessing elements ********* */

//BY ID
// let item1 = document.getElementById("two");
// item1.innerHTML = "<i>Hey!</i>"
// console.log(item1);

// //BY TAG NAME
// let tags = document.getElementsByTagName("div");
// console.log(tags)

// let tag3 = document.getElementsByTagName("div").item(2);
// console.log(tag3)

// let heading = document.getElementsByTagName("h1");
// console.log(heading)

// //BY CLASS NAME
// let ex = document.getElementsByClassName("example");
// console.log(ex)

// //BY CSS SELECTOR
// let p =  document.querySelectorAll("p");
// console.log(p);

// //BY QUERYSELECTOR AND QUERYSELECTORALL()
// let firstDiv = document.querySelector("div");
// console.log(firstDiv);

// let sth = document.querySelector(".something");
// console.log(sth);

// let allDivs = document.querySelectorAll("div");
// console.log(allDivs)

//EVENT CLICK HANDLER
// function stop() {
//     alert(`ouch! stop it !`);
// }

// document.getElementById("one").onclick = function () {
//     alert("Auch! Stop!");
//     }


/**********THIS AND THE DOM ****** */
// function reveal(el){
//     console.log(el.parentElement);
//   }


/*********Manipulating element style******** */
// function toggleDisplay(){
//     let p = document.getElementById("magic");
//     if(p.style.display === "none") {
//       p.style.display = "block";
//     } else {
//       p.style.display = "none";
//     }
//   }



// function rainbowify() {
//     let divs = document.getElementsByTagName("div");
//     for (let i = 0; i < divs.length; i++) {
//         divs[i].style.backgroundColor = divs[i].id;
//     }
// }


/*********Changing the classes of an element******* */
//adding 
// function disappear(){
//     document.getElementById("shape").classList.add("hide");
// }

//removing 
// function change(){
//     document.getElementById("shape").classList.remove("blue");
//   }

//toggling classes 
// function changeVisibility(){
//     document.getElementById("shape").classList.toggle("hide");
//   }

/*********Manipulating attributes******* */
// function changeAttr(){
//     let el = document.getElementById("shape");
//     el.setAttribute("style", "background-color:red;border:1px solid black");
//     el.setAttribute("id", "new");
//     el.setAttribute("class", "circle");
//   }

/*********Event listeners on elements******* */
// window.onload = function() {
//     document.getElementById("square").addEventListener("click",
// changeColor);
//   }
//   function changeColor(){
//     let red = Math.floor(Math.random() * 256);
//     let green = Math.floor(Math.random() * 256);
//     let blue = Math.floor(Math.random() * 256);
//     this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
//   }


  

/*********Creating new elements******* */

// function addRandomNumber(){
//     let el = document.createElement("p");
//     el.innerText = Math.floor(Math.random() * 100);
//     document.body.appendChild(el);
//   }
