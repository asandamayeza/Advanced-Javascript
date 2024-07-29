const endDate = "Oct 22 2024";

function countdown() {
    const total = Date.parse(endDate) - new Date()
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hours = Math.floor((total / (1000 * 60 * 60 ) %24));
    const minutes = Math.floor((total /(1000 * 60 )% 60));
    const seconds = Math.floor((total / (1000 )% 60));

    return {
        days,
        hours,
        minutes,
        seconds
    };
}

function update() {
    const temp = countdown();
    let output = '';

    for (const property in temp) {
        output += (`${property}: ${temp[property]} `);
    }

    console.log(output);
    setInterval(update, 1000); 
}
update();

