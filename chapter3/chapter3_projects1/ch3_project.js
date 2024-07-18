const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
{test: 'one', score: 55}, ['one', 'two']];

theList.shift();
let lastElement = theList.pop();
theList.unshift("FIRST");
theList.splice(2,5, "MIDDLE", "hello World");
theList.push("LAST")
console.log(theList);
