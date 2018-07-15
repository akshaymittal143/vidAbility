fetch('/api/speech-to-text/token')
  .then(function(response) {
    return response.text();
  }).then(function(token) {

    var stream = WatsonSpeech.SpeechToText.recognizeMicrophone({
      token: token,
      outputElement: '#output' // CSS selector or DOM Element
    });
    stream.on('data', function(t) {
      console.log(t.results[0].alternatives[0].transcript.includes('search for'))
      console.log(t.results[0].alternatives[0].transcript)
      var text = t.results[0].alternatives[0].transcript.toLowerCase();
      console.log(text.includes('search for'))
      if (text.includes('search for')) {
        var edited = text.split("search for").slice(1).join(' ');
        console.log(edited)
        $('.search-container .form-control').val(edited)
      }
    })
    stream.on('error', function(err) {
      console.log(err);
    });
    stream.on('close', function(err) {
      console.log('done');
    });
    document.querySelector('#stop').onclick = function() {
      stream.stop();
    };

  }).catch(function(error) {
    console.log(error);
  });
document.querySelector('.startSpeech').onclick = function() {

  fetch('/api/speech-to-text/token')
    .then(function(response) {
      return response.text();
    }).then(function(token) {

      var stream = WatsonSpeech.SpeechToText.recognizeMicrophone({
        token: token,
        outputElement: '#output' // CSS selector or DOM Element
      });
      stream.on('data', function(t) {
        $('.search-container .form-control').val(t.results[0].alternatives[0].transcript)
      })
      stream.on('error', function(err) {
        console.log(err);
      });
      stream.on('close', function(err) {
        console.log('done');
      });
      document.querySelector('#stop').onclick = function() {
        stream.stop();
      };

    }).catch(function(error) {
      console.log(error);
    });
};
