var express = require('express');
var http = require('http');
var https = require('https');
const yes = require('yes-https');
var fs = require('fs');
// var app = express();
var path = require('path');
const vcapServices = require('vcap_services');

//Firebase
var firebase = require('firebase-admin');
var serviceAccount = require('./config/keys.json');

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: 'https://users-7ddf3.firebaseio.com/'
});
const dbRefObject = firebase.database().ref().child('first_name');
dbRefObject.on('value', snap => console.log(snap.val()));
//watson start
var watson = require('watson-developer-cloud');

const pageRouter = require('./config/routes');

let app = express();

app.use(yes({
  maxAge: 86400,            // defaults `86400`
  includeSubdomains: true,  // defaults `true`
  preload: true             // defaults `true`
}));

app.set('trust proxy', true);

app.set('view engine', 'ejs');
app.set('views',__dirname + '/client/views/');
app.set('view options', { layout:false, root: __dirname + '/templates' } );
app.use('/',pageRouter);
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
    console.log('Press Ctrl+C to quit.');
  });
  // [END server]
}

module.exports = app;
