const fs = require('fs');

function cat (command) {
    if (command === 'cat') {
        process.stdout.write('fileName > ');
        process.stdin.on('data', (data) => {
            fs.readFile(data, 'utf8', (err, content) => {
                if (err) {
                    throw err;
                }
                else {
                    process.stdout.write(content);
                }
            })
        })
    }
}

module.exports = cat;