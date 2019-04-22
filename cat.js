const fs = require('fs');

function cat (command) {
    if (command.includes('cat')) {
        const fileName = command.split(' ')[1];
        fs.readFile(fileName, 'utf8', (err, content) => {
            if (err) {
                throw err;
            }
            else {
                process.stdout.write(content);
            }
        })
    }
}

module.exports = cat;
