const fs = require('fs');

function cat (command, done) {
    const fileName = command.split(' ')[1];
    fs.readFile(fileName, 'utf8', (err, content) => {
        if (err) {
            done('Something went wrong!');
        }
        else {
            done(content);
        }
    })
}

module.exports = cat;
