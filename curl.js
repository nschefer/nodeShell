const request = require('request');

const curl = (cmd, done) => {
  const url = cmd.split(' ')[1];
  request(url, (error, response, body) => {
    if (error) done(`error: ${error}`); // Print the error if one occurred
    done(`statusCode: ${response && response.statusCode}`); // Print the response status code if a response was received
    done(`body: ${body}`); // Print the HTML for the Google homepage.
  })
}

module.exports = curl;
