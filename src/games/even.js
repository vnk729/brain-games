import readlineSync from 'readline-sync';
import { numRound, isEven, randomInt } from '..';

const runGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no". \n');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}! \n`);

  for (let i = 0; i < numRound; i += 1) {
    const question = randomInt(1, 100);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(question) ? 'yes' : 'no';

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
