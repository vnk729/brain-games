import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

const numRound = 3;
const isEven = num => num % 2 === 0;
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export {
  greeting, numRound, isEven, randomInt,
};
