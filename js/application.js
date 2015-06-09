$(document).ready(function(){

  $(".metronome-parameters").on("submit", function(event){
    event.preventDefault();
    if ($('#metronome-button').val() === "Start"){
      $('#metronome-button').val("Stop");
      var tempo = $("#tempo-field").val();
      var beatsPerMeasure = $("#beats-field").val();
      var subdivisions = createSubdivisionsArray();
      metronome = new Metronome(tempo, beatsPerMeasure, subdivisions);
      $('.input-field').hide();
      metronome.start();
    } else {
      $('#metronome-button').val("Start");
      $('.input-field').show();
      metronome.stop();
    }
  });

})