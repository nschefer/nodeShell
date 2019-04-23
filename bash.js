const pwd = require('./pwd.js');
const ls = require('./ls.js');
const cat = require('./cat.js');
const curl = require('./curl.js');

const done = (output) => {
    process.stdout.write(output);
    process.stdout.write('\nprompt > ');
}

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    if (cmd === 'ls') ls(done);
    if (cmd.includes('cat')) cat(cmd, done);
    if (cmd === 'pwd') pwd(done);
    if (cmd.includes('curl')) curl(cmd, done);

    process.stdout.write('You typed: ' + cmd + '\n');
});
