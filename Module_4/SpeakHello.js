(function(window) {
  var helloSpeaker={};
  var speakWord = "Hello buddy";
  
  helloSpeaker.speak = function(name){
  console.log(speakWord + " " + name);
  }
  window.helloSpeaker = helloSpeaker;
}
)(window);
