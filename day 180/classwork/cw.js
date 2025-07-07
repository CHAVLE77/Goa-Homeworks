//2
let items = [];
items.push({ a: "b", c: "d" });
console.log(items);

//3
function wrap(value) {
  let obj = 
  {
    value:value 
  };
  return obj
}

//4
function Dog (breed) {
  this.breed = breed;
}

var snoopy = new Dog("Beagle");

snoopy.bark = function() {
  return "Woof";
};

var scoobydoo = new Dog("Great Dane");

scoobydoo.bark = function () {
  return "Woof"
}
