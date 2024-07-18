"user strict"
const storeItems = []
const Item = {
    name: "phone",
    model: "iphone 15",
    cost: 17880,
    quantity: 1
}
const Item1 = {
    name: "watch",
    model: "Apple Watch SE",
    cost: 6399,
    quantity:1
}
const Item2 = {
    name: "earphones",
    model: "airpods",
    cost: 3999,
    quantity: 2
}
storeItems.push(Item, Item1, Item2);
console.log(storeItems);

console.log(storeItems[2].model);
