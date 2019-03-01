import { randomInt, gameEngine } from '..';

const a = randomInt(1, 100);
const b = randomInt(1, 100);
const getOperator = () => randomInt(1, 3);

const getQuestion = () => {
  if (getOperator() === 1) {
    return `${a} + ${b}`;
  }
  if (getOperator() === 2) {
    return `${a} - ${b}`;
  }
  if (getOperator() === 3) {
    return `${a} * ${b}`;
  }
};

const getCorrectAnswer = (question) => {
  if (question === `${a} + ${b}`) {
    return String(a + b);
  }
  if (question === `${a} - ${b}`) {
    return String(a - b);
  }
  if (question === `${a} * ${b}`) {
    return String(a * b);
  }
};

export default () => {
  const message = 'What is the result of the expression? \n';
  return gameEngine(message, getQuestion, getCorrectAnswer);
};
