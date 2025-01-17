const childDiv = document.getElementById('box');

let left = 0;
let topPosition = 0;

let direction = 'right';

setInterval(function() {
    if (direction === 'right') {
        left += 1;
        if (left >= 150) {
            direction = 'down';
        }
    } else if (direction === 'down') {
        topPosition += 1;
        if (topPosition >= 150) {
            direction = 'left';
        }
    } else if (direction === 'left') {
        left -= 1;
        if (left <= 0) {
            direction = 'up';
        }
    } else if (direction === 'up') {
        topPosition -= 1;
        if (topPosition <= 0) {
            direction = 'right';
        }
    }

    childDiv.style.left = left + 'px';
    childDiv.style.top = topPosition + 'px';
}, 10);