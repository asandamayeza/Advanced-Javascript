let counter = [];
let main = document.querySelector(".container");
main.addEventListener("click", tracker);

function tracker(e) {
    let el = e.target;
    if (el.id) {
        let temp = {};
        temp.content = el.textContent;
        temp.id = el.id;
        temp.tagName = el.tagName;
        temp.class = el.className;
        console.dir(el);
        counter.push(temp);
        console.log(counter);
    };
};



