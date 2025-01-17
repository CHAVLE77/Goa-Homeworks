let count = 0; 
const score = document.getElementById('score'); 
const btn = document.getElementById('btn');
btn.addEventListener('click', game); 

function game() {
    const randomNumber = Math.floor(Math.random() * 10) + 1; 
    let input = parseInt(prompt('Enter a number between 1 and 10:'));

    while (input !== randomNumber) {
        if (isNaN(input)) {
            alert('Please enter a valid number!');
        } else if (input > randomNumber) {
            alert('Too high! Try again.');
        } else if (input < randomNumber) {
            alert('Too low! Try again.');
        } 
        input = parseInt(prompt('Enter a number between 1 and 100:'));
    }

    alert('Congratulations! You guessed the correct number.'); 
    count++
    localStorage.setItem('count',count)
    let stored = localStorage.getItem('count')
    score.textContent = 'Score: ' + stored;

}

