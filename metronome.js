function Metronome(tempo, beatsPerMeasure){
  this.tempo = Number(tempo);
  this.beatsPerMeasure = Number(beatsPerMeasure);
}

Metronome.prototype.start = function(){
  window.setInterval(this.updateCounterView, 1000, this.beatsPerMeasure);
}
Metronome.prototype.updateCounterView = function(beatsPerMeasure){
  var counter = document.getElementById("metronome-counter");
  var pastBeat = Number(counter.innerHTML);
  if (pastBeat < beatsPerMeasure){
    counter.innerHTML = pastBeat + 1;
  } else {
    counter.innerHTML = 1;
  }
}