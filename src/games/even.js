import { isEven, randomInt, gameEngine } from '..';
import { cons } from 'hexlet-pairs';

const getGame = () => {
  const question = randomInt(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => {
  const message = 'Answer "yes" if number even otherwise answer "no".';
  return gameEngine(message, getGame);
};
