// 5.
function task3() {
  return new Promise((reject) => {
    setTimeout(() => {
      reject("Task 3 failed");
    }, 2000);
  });
}

task3().catch((error) => console.log(error));

// 6.
function task1() {
  const delay = Math.floor(Math.random() * 5) + 1;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 1 complete");
    }, delay * 1000);
  });
}

// 7.
function first() {
  const delay = Math.floor(Math.random() * 3) + 1;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("First");
    }, delay * 1000);
  });
}

first().then((message) => {
  console.log(message);
  const secondDelay = Math.floor(Math.random() * 3) + 1;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Second");
    }, secondDelay * 1000);
  });
}).then((message) => console.log(message));

// 8.
function task3RandomFail() {
  const delay = Math.floor(Math.random() * 4) + 1;
  return new Promise((reject, resolve) => {
    setTimeout(() => {
      reject("Task 3 failed");
    }, delay * 1000);
  });
}

task3RandomFail().catch((error) => console.log(error));

// 9.
function task1Random() {
  const delay = Math.floor(Math.random() * 5) + 1;
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        resolve("Task 1 complete");
      } else {
        resolve("Task 1 was quick");
      }
    }, delay * 1000);
  });
}

// 10.
function task3Random() {
  const delay = Math.floor(Math.random() * 4) + 1;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.3) {
        reject("Task 3 failed");
      } else {
        resolve("Task 3 complete");
      }
    }, delay * 1000);
  });
}

task3Random().catch((error) => console.log(error));
