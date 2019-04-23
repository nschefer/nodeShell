const fs = require('fs');

module.exports = function (command, done) {
  const fileName = command.split(' ')[1];
  fs.readFile(fileName, 'utf8', (err, content) => {
    if (err) {
      done('Something went wrong!');
    } else {
      const fileLineArray = content.split('\n');
      done(fileLineArray.sort().join('\n'));
    }
  })
}
