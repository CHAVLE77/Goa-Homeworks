//1
function fiveLine(s){
  var str = s.trim();
  var result = "";
  for (var i = 1; i < 6; i++) {
  result += str.repeat(i) + "\n"
  } 
  return result.trim() 
}