let leaders = ["nika chavleishvili", "davit chxikvadze", "saba shubashishvili"];
let members = [
    ["nika suxishvili", "lasha taziashvili", "ioane cercvadze", "cotne bajelidze"],
    ["dimitri ugrexelidze", "deme goiashvili", "giorgi papunashvili", "sandro suriakovi"],
    ["mate okinashvili", "giorgi chankvetadze", "tornike tabukashvili", "nikoloz kukava", "cotne nebiieridze", "dato beruashvili"]
];

let usedMembers = [];

function shuffle(array) {
    let shuffled = [];
    while (array.length > 0) {
        let randomIndex = Math.floor(Math.random() * array.length);
        let randomElement = array.splice(randomIndex, 1)[0];
        shuffled.push(randomElement);
    }
    return shuffled;
}

for (let i = 0; i < leaders.length; i++) {
    let result = leaders[i] + ": ";
    let assignedMembers = shuffle(members[i].slice());

    for (let j = 0; j < assignedMembers.length; j++) {
        let member = assignedMembers[j];
        if (!usedMembers.includes(member)) {
            usedMembers.push(member);
        }
    }

    result += assignedMembers.join(", ");
    console.log(result);
}