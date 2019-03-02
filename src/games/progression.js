import { cons } from 'hexlet-pairs';
import gameEngine from '..';
import randomInt from '../utils';

const message = 'What number is missing in the progression?';

const getGame = () => {
  const firstNum = randomInt(0, 50);
  const interval = randomInt(1, 10);
  const hideNum = randomInt(0, 9);
  const progLength = 10;

  let question = '';
  const correntAnswer = firstNum + interval * hideNum;

  for (let i = 0; i < progLength; i += 1) {
    const currentNum = firstNum + interval * i;
    if (i === hideNum) {
      question += (i === progLength - 1) ? '..' : '.. ';
    } else {
      question += (i === progLength - 1) ? `${currentNum}` : `${currentNum} `;
    }
  }

  return cons(question, String(correntAnswer));
};

export default () => gameEngine(message, getGame);
