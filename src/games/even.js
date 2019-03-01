import { randomInt, gameEngine } from '..';

const isEven = num => num % 2 === 0;

const getQuestion = () => randomInt(1, 100);
const getCorrectAnswer = num => (isEven(num) ? 'yes' : 'no');

export default () => {
  const message = 'Answer "yes" if number even otherwise answer "no". \n';
  return gameEngine(message, getQuestion, getCorrectAnswer);
};
