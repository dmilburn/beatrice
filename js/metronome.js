function Metronome(tempo, beatsPerMeasure, subdivisions){
  this.tempo = Number(tempo);
  this.beatsPerMeasure = Number(beatsPerMeasure);
  this.subdivisions = subdivisions;
  this.interval = null;
  this.tempoInMilliseconds = this.tempoToMilliseconds(this.tempo);
}

Metronome.prototype.start = function(){
  this.interval = window.setInterval(metronomeSoundAndView, this.tempoInMilliseconds, this);
}

Metronome.prototype.tempoToMilliseconds = function(tempo){
  return (1000 * 60)/tempo;
}

Metronome.prototype.stop = function(){
  window.clearInterval(this.interval);
  var counter = document.getElementById("metronome-counter");
  counter.innerHTML = "";
}

metronomeSoundAndView = function(metronome){
  moveStick(metronome);
  updateCounterView(metronome);
  playSounds(metronome);
}

playSounds = function(metronome){
  playSound(metronome, 'audio/beep-07.wav');
  for (var i = 0; i < metronome.subdivisions.length; i++){
    createSubdivisions(metronome, metronome.subdivisions[i]);
  }
}

createSubdivisions = function(metronome, divideTheBeatIn){
  var subdivisionsInMilliseconds = (metronome.tempoInMilliseconds)/divideTheBeatIn;
  var i = 1;
  var subdivisions = window.setInterval(function(){ i++;
    playSound(metronome, 'audio/beep-07.wav')
    if (i == divideTheBeatIn){
      clearInterval(subdivisions);}
    }, subdivisionsInMilliseconds)
}

playSound = function(metronome, fileName){
  new Howl({
    urls: [fileName]
  }).play();
}

updateCounterView = function(){
  var counter = document.getElementById("metronome-counter");
  var pastBeat = Number(counter.innerHTML);
  if (pastBeat < metronome.beatsPerMeasure){
    counter.innerHTML = pastBeat + 1;
  } else {
    counter.innerHTML = 1;
  }
}

moveStick = function(metronome){
  var stick = $("#metronome-stick")
  stick.toggleClass("right");
  if (stick.hasClass("right")){
    degrees = 20;
  } else {
    degrees = -20;
  }
  $("#metronome-stick").stop().animate({ textIndent: degrees }, {
    step: function(degrees) {
        $(this).css('transform',"rotate(" + degrees + "deg)");
    }, duration: metronome.tempoInMilliseconds
  } );
}