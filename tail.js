const fs = require('fs');

module.exports = function (command, done) {
  const fileName = command.split(' ')[1];
  fs.readFile(fileName, 'utf8', (err, content) => {
    if (err) {
      done('Something went wrong!');
    } else {
      const fileLineArray = content.split('\n'); //splits file into an array of separate lines
      done(fileLineArray.slice(fileLineArray.length - 11).join('\n')); //prints out a copy of the file array joined around new lines from 10th to last line to the last line
    }
  })
}
