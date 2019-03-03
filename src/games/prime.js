import { cons } from 'hexlet-pairs';
import gameEngine from '..';
import randomInt from '../utils';

const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;

  const iter = (counter) => {
    if (counter > num / 2) {
      return true;
    }
    return (num % counter === 0) ? false : iter(counter + 1);
  };

  return iter(2);
};

const getGame = () => {
  const question = randomInt(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return cons(question, correctAnswer);
};

export default () => gameEngine(message, getGame);
