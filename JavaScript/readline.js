const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.on('line', function (line) {
    let number = Number(line);
    if (isNaN(number)) {
        console.log('숫자 아님');
    } else {
        console.log('숫자 맞음');
    }
    r1.prompt();
}).on('close', function () {
    process.exit();
});









