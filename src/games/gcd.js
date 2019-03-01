import { cons } from 'hexlet-pairs';
import gameEngine from '..';
import randomInt from '../utils';

const message = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const getGame = () => {
  const a = randomInt(1, 100);
  const b = randomInt(1, 100);
  const question = `${a} ${b}`;
  const correntAnswer = gcd(a, b);

  return cons(question, String(correntAnswer));
};

export default () => gameEngine(message, getGame);
