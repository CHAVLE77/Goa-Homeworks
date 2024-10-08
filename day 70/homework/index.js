const change = document.getElementById('change');
const delet = document.getElementById('delete');
const txt = document.getElementById('txt');
const container = document.querySelector('.container'); // Use a dot for class selector
let count = 0;

change.addEventListener('click', function() {
    if (count === 0) {
        txt.innerHTML = "Fibonacci Sequence: Create a function that returns the first n numbers of the Fibonacci sequence.";
    } else if (count === 1) {
        txt.innerHTML = "Array Reversal: Write a function that reverses an array without using the built-in reverse() method.";
    } else if (count === 2) {
        txt.innerHTML = "Object Merge: Create a function that merges two objects into one."
    } else {
        alert("No more tasks will be found")
    }
    count++;
    delet.style.display = "inline";
});

delet.addEventListener('click', function() {
    txt.style.display = 'none';
    delet.style.display = 'none'; 
    change.style.display = 'none'
});
