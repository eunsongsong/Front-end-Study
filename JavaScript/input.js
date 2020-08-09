const repl = require('repl');
const { callbackify } = require('util');
repl.start({
    prompt: '숫자 입력 >> ',
    eval: (command, context, filename, callback) => {
        let number = Number(command);
        if (isNaN(number)) {
            console.log('숫자 아님');
        } else {
            console.log('숫자 맞음');
        }
        callback();
    }
})







