import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const greeting = (message) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${message}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  return userName;
};

const isEven = num => num % 2 === 0;
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const gameEngine = (message, getGame) => {
  const userName = greeting(message);
  const gameRounds = 3;

  for (let i = 0; i < gameRounds; i += 1) {
    const game = getGame();
    const question = car(game);
    const correctAnswer = cdr(game);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export {
  greeting, isEven, randomInt, gameEngine,
};
