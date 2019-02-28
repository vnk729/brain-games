import readlineSync from 'readline-sync';
import { numRound, randomInt } from '..';

const runGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression? \n');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}! \n`);

  for (let i = 0; i < numRound; i += 1) {
    const a = randomInt(1, 100);
    const b = randomInt(1, 100);
    const getOperator = randomInt(1, 3);

    let question;
    let correctAnswer;

    if (getOperator === 1) {
      question = `${a} + ${b}`;
      correctAnswer = String(a + b);
    }
    if (getOperator === 2) {
      question = `${a} - ${b}`;
      correctAnswer = String(a - b);
    }
    if (getOperator === 3) {
      question = `${a} * ${b}`;
      correctAnswer = String(a * b);
    }

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

export default runGame;
