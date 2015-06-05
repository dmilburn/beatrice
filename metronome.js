function Metronome(tempo, beatsPerMinute){
  this.tempo = tempo;
  this.beatsPerMinute = beatsPerMinute;
}

Metronome.prototype.beatsPerMinuteArray = function(){
  var beatsPerMinuteArray = [];
  for (var i = 1; i <= this.beatsPerMinute; i++){
    beatsPerMinuteArray.push(i);
  };
  return beatsPerMinuteArray;
}