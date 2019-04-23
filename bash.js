const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');
const date = require('./date');
const echo = require('./echo');

const done = (output) => {
    process.stdout.write(output);
    setTimeout(() => {
        process.stdout.write('\nprompt > ');
    }, 10);
}

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    if (cmd === 'ls') ls(done);
    if (cmd.includes('cat')) cat(cmd, done);
    if (cmd === 'pwd') pwd(done);
    if (cmd.includes('curl')) curl(cmd, done);
    if (cmd === 'date') date(done);
    if (cmd.includes('echo')) echo(cmd, done);

    setTimeout(() => {
        process.stdout.write('\nYou typed: ' + cmd);
    }, 5);
});
