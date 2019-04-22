// process.stdin.on('data', (data) => {
//     const cmd = data.toString().trim();

//     if (cmd === 'pwd') process.stdout.write(process.cwd());
// });

module.exports = function(data) {
    
    
    if (data === 'pwd') process.stdout.write(process.cwd());
   
}