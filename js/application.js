$(document).ready(function(){

  $(".metronome-parameters").on("submit", function(event){
    event.preventDefault();
    if ($('#metronome-button').val() === "Start"){
      $('#metronome-button').val("Stop");
      var tempo = $("#tempo-field").val();
      var beatsPerMeasure = $("#beats-field").val();
      metronome = new Metronome(tempo, beatsPerMeasure, [2, 3]);
      $('.input-field').hide();
      metronome.start();
    } else {
      $('#metronome-button').val("Start");
      $('.input-field').show();
      metronome.stop();
    }
  });

})