import { cons } from 'hexlet-pairs';
import gameEngine from '..';
import randomInt from '../utils';

const message = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const getGame = () => {
  const question = randomInt(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return cons(question, correctAnswer);
};

export default () => gameEngine(message, getGame);
