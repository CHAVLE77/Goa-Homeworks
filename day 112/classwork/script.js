function manualRstrip(str) {
    let index = str.length - 1;
    while (index >= 0 && str[index] === ' ') {
        index--;
    }
    return str.slice(0, index + 1);
}

function manualLstrip(str) {
    let index = 0;
    while (index < str.length && str[index] === ' ') {
        index++;
    }
    return str.slice(index);
}
