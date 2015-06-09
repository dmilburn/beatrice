$(document).ready(function(){

  $(".metronome-parameters").on("submit", function(event){
    event.preventDefault();
    if ($('#metronome-button').val() === "Start"){
      $('#metronome-button').val("Stop");
      var tempo = $("#tempo-field").val();
      var beatsPerMeasure = $("#beats-field").val();
      var subdivisions = [];
      var possibleNoteValues = ["#eighths", "#triplets", "#sixteenths", "#quintuplets"];
      var possibleSubdivisions = [2, 3, 4, 5];
      for (var i = 0; i < possibleSubdivisions.length; i++){
        if ($(possibleNoteValues[i])[0].checked){
          subdivisions.push(possibleSubdivisions[i]);
        };
      };
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