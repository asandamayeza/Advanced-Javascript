let finalTable = [];
let number = 15;
for (let i = 0; i < number; i++) {
    let tempTable = [];
    for (let j = 0; j < number; j++){
        tempTable.push (i*j);
    }     
    finalTable.push(tempTable);
    
}
console.table(finalTable);


