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
      username: '8eb323ce-cdca-4de3-9980-1884f3d0774c', // or hard-code credentials here
      password: 'xobkeeCMMhT6'
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

//create server
https.createServer(sslOptions, app).listen(8443)
//end server


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
