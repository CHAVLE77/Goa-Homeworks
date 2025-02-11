import { calculate } from "./math.mjs";
import { func } from "./random.mjs";
import { person, string1 } from "./class.mjs";
import { data } from "./string.mjs";
import { sum } from "./arr.mjs";

console.log(func(calculate))
console.log(new person('sam',30))
console.log(string1(data))
console.log(sum([1,2,3,4,5]))

