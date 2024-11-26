//2
let input = prompt("enter a symbol: ");

let vowels = ["a", "e", "i", "o", "u"];

if (input.length === 1) {
    if (vowels.includes(input.toLowerCase())) {
        console.log(`${input} is vowel`);
    } else {
        console.log(`${input} is consonant`);
    }
}

if (input.length === 2) {
    let first = input[0].toLowerCase();
    let sec = input[1].toLowerCase();
    if (vowels.includes(first) && vowels.includes(sec)) {
        console.log(`${input} is vowel`);
    } else if (vowels.includes(first) && !vowels.includes(sec) || !vowels.includes(first) && vowels.includes(sec)) {
        console.log(`${input} contains vowel`);
    } else{
        console.log(`${input} is consonant`);
    }
}