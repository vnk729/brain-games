import { cons } from 'hexlet-pairs';
import gameEngine from '..';
import randomInt from '../utils';

const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const iter = (number, counter) => {
    if (counter === number) {
      return true;
    }
    if (number % counter === 0 || number < 2) {
      return false;
    }
    return iter(number, counter + 1);
  };

  return iter(num, 2);
};

const getGame = () => {
  const question = randomInt(1, 100);
  const correntAnswer = isPrime(question) ? 'yes' : 'no';

  return cons(question, correntAnswer);
};

export default () => gameEngine(message, getGame);
