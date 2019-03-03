import { cons } from 'hexlet-pairs';
import gameEngine from '..';
import randomInt from '../utils';

const message = 'What number is missing in the progression?';

const progressionLength = 10;

const getGame = () => {
  const firstNum = randomInt(0, 50);
  const interval = randomInt(1, 10);
  const hiddenElementIndex = randomInt(0, progressionLength - 1);

  let question = '';
  const correctAnswer = String(firstNum + interval * hiddenElementIndex);

  for (let i = 0; i < progressionLength; i += 1) {
    if (i === hiddenElementIndex) {
      question += '.. ';
    } else {
      question += `${firstNum + interval * i} `;
    }
  }
  question = question.trim();

  return cons(question, correctAnswer);
};

export default () => gameEngine(message, getGame);
