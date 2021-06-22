import * as fs from 'fs';
import * as readline from 'readline';

const myInterface = readline.createInterface({
    input: fs.createReadStream('./testNumber.txt')
});

myInterface.on('line', function (line) {
    console.log(parseInt(line));
});

