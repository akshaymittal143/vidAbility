$(document).ready(function(){
  $('.chatbox-activator').click(function(event){
    event.preventDefault();
    $('.chatbox').toggleClass('active');
  })
});
