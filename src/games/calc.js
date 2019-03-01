import { randomInt, gameEngine } from '..';
import { cons } from 'hexlet-pairs';

const getGame = () => {
  const a = randomInt(1, 100);
  const b = randomInt(1, 100);
  const operator = randomInt(1, 3);
  let question;
  let correntAnswer;

  switch (operator) {
    case 1:
      question = `${a} + ${b}`;
      correntAnswer = String(a + b);
      break;
    case 2:
      question = `${a} - ${b}`;
      correntAnswer = String(a - b);
      break;
    case 3:
      question = `${a} * ${b}`;
      correntAnswer = String(a * b);
      break;
    default:
      break;
  }

  return cons(question, correntAnswer);
};

export default () => {
  const message = 'What is the result of the expression?';
  return gameEngine(message, getGame);
};
