let ele = document.querySelector(".holder");
ele.addEventListener("mouseover", (e) => { e.target.classList.add("active"); });
ele.addEventListener("mouseout", (e) => { e.target.classList.remove("active"); });
ele.addEventListener("mousemove", coordin);
function coordin() {
    let html = "X:" + event.clientX + " | Y:" + event.clientY;
    document.getElementById("output").innerHTML = html;
}