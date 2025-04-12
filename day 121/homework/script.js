//1
function simpleCallback(name, callback) {
    setTimeout(() => {
        const message = `hello , ${name}!`;
        callback(message);
    }, 2000);
}

simpleCallback("nika", function(msg) {
    console.log(msg); 
});


//2
function loadData(callback) {
    console.log("Loading data...");

    setTimeout(() => {
        const data = {
            name: "nika",
            age: 16,
            job: "Developer"
        };

        console.log("Data loaded.");
        callback(data);
    }, 3000); 
}
loadData(function(result) {
    console.log("Received data:", result);
});


//3
function delayedArrayTransform(arr, callback) {
    let result = [];
    let completed = 0;

    arr.forEach((item, index) => {
        setTimeout(() => {
            result[index] = item * 2; 
            completed++;

            if (completed === arr.length) {
                callback(result); 
            }
        }, 1000); 
    });
}

delayedArrayTransform([1, 2, 3, 4], function(newArr) {
    console.log("Transformed array:", newArr);
});

//4
function refreshPageWithDelay(callback) {
    console.log("Page refresh will happen in 3 seconds...");
    
    setTimeout(() => {
        callback();
    }, 3000); 
}

document.getElementById("refreshButton").addEventListener("click", function() {
    refreshPageWithDelay(function() {
        window.location.reload(); 
    });
});

