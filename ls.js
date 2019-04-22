const fs = require('fs');

module.exports = function(data) {
    
    
    if (data === 'ls') {
        fs.readdir('./', 'utf8', (err, files) => {
            if (err) {
                throw err;
            }
            else {
                process.stdout.write(files.join('\n'));
            }
        })
    
    }
   
}