function Metronome(tempo, beatsPerMeasure){
  this.tempo = Number(tempo);
  this.beatsPerMeasure = Number(beatsPerMeasure);
  this.interval = null;
}

Metronome.prototype.start = function(){
  var millisecondsToWait = this.tempoToMilliseconds(this.tempo);
  this.interval = window.setInterval(soundAndCounter, millisecondsToWait, this);
}

Metronome.prototype.tempoToMilliseconds = function(tempo){
  return (1000 * 60)/tempo;
}

soundAndCounter = function(metronome){
  updateCounterView(metronome);
}

updateCounterView = function(metronome){
  var counter = document.getElementById("metronome-counter");
  var pastBeat = Number(counter.innerHTML);
  if (pastBeat < metronome.beatsPerMeasure){
    counter.innerHTML = pastBeat + 1;
  } else {
    counter.innerHTML = 1;
  }
}

Metronome.prototype.stop = function(){
  window.clearInterval(this.interval);
  counter.innerHTML = "";
}