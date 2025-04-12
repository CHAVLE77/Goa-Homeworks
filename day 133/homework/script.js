const fruitsList = ['apple', 'banana', 'orange'];
fruitsList.forEach(fruit => {
  console.log(fruit);
});

const nameList = ['John', 'Jane', 'Alex'];
nameList.forEach((name, index) => {
  console.log(`Name #${index + 1}: ${name}`);
});

const numList = [1, 2, 3];
numList.forEach((num, index) => {
  numList[index] = num * 2;
});
console.log(numList);

const personList = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Alex', age: 22 }
];
let totalPersonAge = 0;
personList.forEach(person => totalPersonAge += person.age);
console.log(totalPersonAge);

const userList = [
  { name: 'John', country: 'USA' },
  { name: 'Jane', country: 'Canada' },
  { name: 'Alex', country: 'UK' }
];
userList.forEach(user => console.log(`${user.name} is from ${user.country}`));


const numberList = [1, 2, 3];
const doubledNumberList = numberList.map(num => num * 2);
console.log(doubledNumberList);

const personData = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Alex', age: 22 }
];
const personNames = personData.map(person => person.name);
console.log(personNames);

const nameArray = ['John', 'Jane', 'Alex'];
const titleAddedNames = nameArray.map(name => `Mr./Ms. ${name}`);
console.log(titleAddedNames);

const wordList = ['apple', 'banana', 'orange'];
const upperCaseWords = wordList.map(str => str.toUpperCase());
console.log(upperCaseWords);

fetch('https://randomuser.me/api/?results=5')
  .then(response => response.json())
  .then(data => {
    const usernameList = data.results.map(user => user.login.username);
    console.log(usernameList);
  });


  const numArray = [1, 2, 3, 4];
const totalSum = numArray.reduce((acc, num) => acc + num, 0);
console.log(totalSum);

const valueArray = [5, 10, 15, 20];
const maxValue = valueArray.reduce((acc, num) => (num > acc ? num : acc), valueArray[0]);
console.log(maxValue);

const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flattenedArray = nestedArray.reduce((acc, arr) => acc.concat(arr), []);
console.log(flattenedArray);

const itemList = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const itemCount = itemList.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});
console.log(itemCount);

fetch('https://randomuser.me/api/?results=5')
  .then(response => response.json())
  .then(data => {
    const totalAge = data.results.reduce((acc, user) => acc + user.dob.age, 0);
    console.log(totalAge);
  });
