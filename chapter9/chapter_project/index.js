const element1 = document.querySelector(".output");
const mainList = element1.querySelector("ul");
mainList.id = "mainList";
console.log(mainList);
for (let x = 0; x < element1.length; x++) {
  console.log(element1[x].tagName);
  element1[x].id = "id" + (x + 1);
  if (x % 2) {
    element1[x].style.color = "red";
  } else {
    element1[x].style.color = "blue";
  }
}