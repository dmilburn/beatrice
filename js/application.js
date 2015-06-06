$(document).ready(function(){

  $(".metronome-parameters").on("submit", function(event){
    event.preventDefault();
    var tempo = $("#tempo-field").val();
    var beatsPerMeasure = $("#beats-field").val();
    metronome = new Metronome(tempo, beatsPerMeasure);
    metronome.start();
  });
})