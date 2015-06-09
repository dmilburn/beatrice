createSubdivisionsArray = function(){
  var subdivisions = [];
  var possibleNoteValues = ["#eighths", "#triplets", "#sixteenths", "#quintuplets"];
  var possibleSubdivisions = [2, 3, 4, 5];
  for (var i = 0; i < possibleSubdivisions.length; i++){
    if ($(possibleNoteValues[i])[0].checked){
      subdivisions.push(possibleSubdivisions[i]);
    };
  };
  return subdivisions
}
