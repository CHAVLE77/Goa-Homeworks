//1
function SubtractSum(n){
const fruitMap = {
    9: "apple",
    18: "banana",
    27: "cherry",
    36: "date",
    45: "elderberry",
    54: "fig",
    63: "grape",
    72: "honeydew",
    81: "kiwi",
    90: "lemon",
    99: "mango",
    108: "nectarine",
    117: "orange",
    126: "papaya",
    135: "quince",
    144: "raspberry",
    153: "strawberry",
    162: "tangerine",
    171: "ugli fruit",
    180: "vanilla",
    189: "watermelon",
    198: "xigua",
    207: "yellow passion fruit",
    216: "zucchini"
  };

  while (true) {
    let digitSum = n.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
    n -= digitSum;
    if (fruitMap[n]) {
      return fruitMap[n];
    }
  }}

//2
function yourFutureCareer() {
  var career = Math.random();
  
  if (career <= 0.32) {
    return "FrontEnd Developer";
  } else if (career <= 0.65) {
    return "BackEnd Developer";
  } else {
    return "Full-Stack Developer";
  }
}

console.log(yourFutureCareer());

