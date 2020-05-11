const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', line => {
    const reversedLine = line
        .split('')
        .reverse()
        .join('');
    console.log(reversedLine)
})
