function createRandomPromise(id) {
    const rand = Math.random();
  
    if (rand > 0.5) {
      return Promise.resolve(`Promise ${id}: resolved immediately`);
    } else {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(`Promise ${id}: resolved after 2 seconds`);
        }, 2000);
      });
    }
  }
  
  const promise1 = createRandomPromise(1);
  const promise2 = createRandomPromise(2);
  const promise3 = createRandomPromise(3);
  
  promise1.then(console.log);
  promise2.then(console.log);
  promise3.then(console.log);
  