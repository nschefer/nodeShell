const pwd = require('./pwd.js');
const ls = require('./ls.js');
const cat = require('./cat.js');
const curl = require('./curl.js');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    pwd(cmd);
    ls(cmd);
    cat(cmd);
    curl(cmd);

    process.stdout.write('\nYou typed: ' + cmd + '\n');
    setTimeout(function() {
        process.stdout.write('\nprompt > ');
    }, 1000);
});
