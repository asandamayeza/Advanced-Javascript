

/***************Specifying events************* */

//using js

// document.getElementById("unique").onclick = function() { magic(); };

//using event listener
// document.getElementById("unique").addEventListener("click", magic);

// function magic(){
// alert ("abra cadabra!!!!!")
// }
/************The onload event handler**************** */
// document.addEventListener("DOMContentLoaded", (e) => {
//     console.log(e);
// });

/************The mouse event handler**************** */

// function changeColor() {
//     document.getElementById("divvy").style.backgroundColor = "blue";
// }

// window.onload = function donenow() {
//     console.log("hi");
//     document.getElementById("divvy").addEventListener("mousedown",
// function() { changeColor(this, "green"); });
//     document.getElementById("divvy").addEventListener("mouseup",
// function() { changeColor(this, "yellow"); });
//     document.getElementById("divvy").addEventListener("dblclick",
// function() { changeColor(this, "black"); });
//     document.getElementById("divvy").addEventListener("mouseout",
// function() { changeColor(this, "blue"); });
//   }
//   console.log("hi2");
//   function changeColor(el, color) {
//     el.style.backgroundColor = color;
// }
/*************The event target property*************** */

// function triggerSomething() {
//     console.dir(event.target);
// }
// function sendInfo() {
//     let p = event.target.parentElement;
//     message("Welcome " + p.firstname.value + " " + p.lastname.value);
// }
//   function message(m) {
//     document.getElementById("welcome").innerHTML = m;
// }

/**************DOM event flow************** */
// function bubble() {
//     console.log(this.innerText);
//   }
//   let divs = document.getElementsByTagName("div");
//   for (let i = 0; i < divs.length; i++) {
//     divs[i].addEventListener("click", bubble);
//   }



/****************onchange and onblur************ */
// function logEvent() {
//     let p = event.target;
//     if (p.name == "firstname") {
//         message("First Name Changed to  " + p.value);
//     } else {
//         message("Last Name Changed to  " + p.value);
//     }
// }
// function sendInfo() {
//     let p = event.target.parentElement;
//     message("Welcome " + p.firstname.value + " " + p.lastname.
//         value);
// }
// function message(m) {
//     document.getElementById("welcome").innerHTML = m;
// }

/***************Key event handler************* */

// function numCheck() {
//     message("Number: " + !isNaN(event.key));//checks if input is a number
//     return !isNaN(event.key);
// }
// function numCheck2() {
//     message("Not a number: " + isNaN(event.key));//checks 
//     return isNaN(event.key);
// }
// function message(m) {
//     document.getElementById('wrapper').innerHTML = m;
// }
/**************Drag and drop elements************** */
// let holderItem;
// function dStart() {
//     holderItem = event.target;
// }
// function nDrop() {
//     event.preventDefault();
// }
// function dDrop() {
//     event.preventDefault();
//     if (event.target.className == "box") {
//         event.target.appendChild(holderItem);
//     }
//}


/**************Form submission************** */
// function valForm() {
//     var p = event.target.children;
// //condition makes all 3 feild required
//     if (p.firstName.value == "") {
//         message("Need a first name!!");
//         return false;
//     }
//     if (p.lastName.value == "") {
//         message("Need a last name!!");
//         return false;
//     }
//     if (p.age.value == "") {
//         message("Need an age!!");
//         return false;
//     }
//     return true;
// }
// function message(m) {
//     document.getElementById("wrapper").innerHTML = m;
// }


/*************ANIMATING ELEMENTS************** */
function toTheRight() {
    let b = document.getElementById("block");
    let x = 0;
    setInterval(function () {
        if (x === 600) {
            clearInterval();
        } else {
            x++;
            b.style.left = x + "px";
            console.log(`${x}px`);
        }
    }, 2); //2 seconds
}