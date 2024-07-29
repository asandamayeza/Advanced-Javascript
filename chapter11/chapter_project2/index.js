let stars = document.querySelectorAll("li");
console.log(stars);

stars.forEach(element => {
    element.addEventListener("click", function () {
        for (let index = 0; index <5; index++) {
            stars[index].style.color = "#ddd";
        }
        event.target.style.color = "gold";
        let currentStar = event.target;
       
        for (let index = 0; index <4; index++) {
            currentStar.previousElementSibling.style.color = "gold";
            currentStar = currentStar.previousElementSibling;
        }
    });
});