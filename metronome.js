function Metronome(tempo, beatsPerMeasure){
  this.tempo = tempo;
  this.beatsPerMeasure = beatsPerMeasure;
}

Metronome.prototype.beatsPerMeasureArray = function(){
  var beatsPerMeasureArray = [];
  for (var i = 1; i <= this.beatsPerMeasure; i++){
    beatsPerMeasureArray.push(i);
  };
  return beatsPerMeasureArray;
} 
}