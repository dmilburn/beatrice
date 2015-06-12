createSubdivisionsArray = function(){
  var subdivisions = [];
  var possibleNoteValues = ["#eighths", "#triplets", "#sixteenths", "#quintuplets"];
  var possibleSubdivisions = [2, 3, 4, 5];
  for (var i = 0; i < possibleSubdivisions.length; i++){
    if ($(possibleNoteValues[i])[0].checked){
      subdivisions.push(possibleSubdivisions[i]);
    };
  };
  subdivisions = remove2If4(subdivisions);
  return subdivisions
}

remove2If4 = function(array){
  if (array.indexOf(2) != -1 && (array.indexOf(4)) != -1) {
    var index = array.indexOf(2);
    array.splice(index, 1);
  };
  return array;
}