$(document).ready(function(){

  $(".metronome-parameters").on("submit", function(event){
    event.preventDefault();
    if ($('#metronome-button').val() === "Start"){
      var tempo = $("#tempo-field").val();
      var beatsPerMeasure = $("#beats-field").val();
      metronome = new Metronome(tempo, beatsPerMeasure);
      metronome.start();
    } else {
      metronome.stop();
    }

  });
})