fetch('/api/speech-to-text/token')
  .then(function(response) {
    return response.text();
  }).then(function(token) {

    var stream = WatsonSpeech.SpeechToText.recognizeMicrophone({
      token: token,
      outputElement: '#output' // CSS selector or DOM Element
    });
    stream.on('data', function(t) {
      var text = t.results[0].alternatives[0].transcript.toLowerCase();
      console.log(text)
      if (text.includes('search for')) {
        var edited = text.split("search for").slice(1).join(' ');
        $('.search-container .form-control').val(edited)
      }
      if (text.includes('end search') || text.includes('finish.') || text.includes('finish')) {
        console.log(text)
        $('#searchEngine').submit();
      }
      if(text.includes('scroll down')){
        var y = $(window).scrollTop();  //your current y position on the page
        $('html, body').animate({scrollTop: '+=150px'}, 300);
      }
      if(text.includes('scroll up')){
        var y = $(window).scrollTop();  //your current y position on the page
        $('html, body').animate({scrollTop: '-=150px'}, 300);
      }
      if(text.includes('join video chat')){
        window.location.href = "https://localhost:8080/video-chat";
      }
      if(text.includes('log in')){
        window.location.href = "https://localhost:8080/my-account.html";
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
