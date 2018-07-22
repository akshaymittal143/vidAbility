var express = require('express');
var http = require('http');
var https = require('https');
var fs = require('fs');
var app = express();
var path = require('path');
const vcapServices = require('vcap_services');
//watson start
var watson = require('watson-developer-cloud');

// to get an IAM Access Token
var sttAuthService = new watson.AuthorizationV1(
  Object.assign(
    {
      username: '70c5a094-4e8d-446c-a24b-5854897bfb87', // or hard-code credentials here
      password: 'gMYbJXY8VaJ1'
    },
    vcapServices.getCredentials('speech_to_text') // pulls credentials from environment in bluemix, otherwise returns {}
  )
);
app.use('/api/speech-to-text/token', function(req, res) {
  sttAuthService.getToken(
    {
      url: 'https://stream.watsonplatform.net/speech-to-text/api'
    },
    function(err, token) {
      if (err) {
        console.log('Error retrieving token: ', err);
        res.status(500).send('Error retrieving token');
        return;
      }
      res.send(token);
    }
  );
});
//watson end

//use local css/js files
app.use(express.static('client'))
//end

//ssl start
var sslOptions = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem'),
  passphrase: '12345'
};
//ssl end

// //create server
// https.createServer(sslOptions, app).listen(8443)
// console.log('App listening on port 8443');
// //end server


if (module === require.main) {
  // [START server]
  // Start the server
  const server = https.createServer(sslOptions, app).listen(process.env.PORT || 8080, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
  // [END server]
}

//host web pages start
app.get('/', function (req, res) {
     res.sendFile(path.join(__dirname + '/client/index.html'));
});
app.get('/login', function (req, res) {
     res.sendFile(path.join(__dirname + '/client/my-account.html'));
});
app.get('/browse-jobs', function (req, res) {
     res.sendFile(path.join(__dirname + '/client/browse-jobs.html'));
});
app.get('/video-chat', function (req, res) {
     res.sendFile(path.join(__dirname + '/client/video-chat.html'));
});
//host web pages end

module.exports = app;
