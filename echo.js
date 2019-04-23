module.exports = function (cmd, done) {
  const msg = cmd.split(' ');
  msg.shift();
  done(msg.join(' '));
}
