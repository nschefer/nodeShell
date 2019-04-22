const request = require('request');

const curl = (cmd) => {
  if (cmd.includes('curl')) {
    const url = cmd.split(' ')[1];
    request(url, (error, response, body) => {
      console.error('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage.
    })
  }
}

module.exports = curl;
