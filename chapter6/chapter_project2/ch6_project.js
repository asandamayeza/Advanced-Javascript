let one = () => console.log("One");
let two = () => { console.log("Two") };

function three() {
    console.log("Three");
    one();
    two();
}
function four() {
    console.log("Four");
    setTimeout(one, 1000);//ms
    three();
}
four();


