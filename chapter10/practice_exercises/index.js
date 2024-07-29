//practice exercise 10.1
// console.dir(document.body);
// console.dir(document.body.children);
// console.log(document.body.childNodes);


//practice exercise 10.2 
// console.log(document.getElementById("two"));
// console.log(document.getElementById('one').innerHTML = "HELLO");

//practice exercise 10.3
// let tags = document.getElementsByTagName("div");
// console.log(tags)

// let tag1 = document.getElementsByTagName("div").item(1);
// console.log(tag1)

//practice exercise 10.4
// let ex = document.getElementsByClassName("example");
// console.log(ex);

// let ex1 = document.getElementsByClassName("example");
// console.log(ex[1]);
 

//practice exercise 10.5 
// let eg = document.querySelector(".example");
// console.log(eg)

//practise exercise 10.6
// let eg = document.querySelectorAll(".example")
// console.log(eg);
// eg.forEach((el) => {
//     console.log(el);
// });

//practice exercise 10.7
// function message(el) {
//     console.dir(el.textContent);
// }

//practice exercise 10.8

// const message = document.querySelector("#message");
//     const myArray = ["Laurence", "Mike", "John", "Larry", "Kim","Joanne", "Lisa", "Janet", "Jane"];
// build();

// function build() {
//     let html = "<h1>My Friends Table</h1><table>";
//     myArray.forEach((item, index) => {
//         html += `<tr class="box" data-row="${index+1}"
//                  data-name="${item}" onclick="getData(this)">
//                  <td>${item}</td>`;
//         html += `<td >${index + 1}</td></tr>`;
//     });
//     html += "</table>";
//     document.getElementById("output").innerHTML = html;
// }
// function getData(el) {
//     let temp = el.getAttribute("data-row");
//     let tempName = el.getAttribute("data-name");
//     message.innerHTML = `${tempName } is in row #${temp}`;
// }

//practise exercise 10.9
// const btns = document.querySelectorAll("button");
//     btns.forEach((btn)=>{
//         function output(){
//             console.log(this.textContent);
// }
//         btn.addEventListener("click",output);
//     });


//practice exercise 10.10
// document.getElementById("addNew").onclick = function () {
//     addOne(); }
//         function addOne() {
//             var a = document.getElementById("addItem").value;
//             var li = document.createElement("li");
//             li.appendChild(document.createTextNode(a));
//             document.getElementById("sList").appendChild(li);
//         }