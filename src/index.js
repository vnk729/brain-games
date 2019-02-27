import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

const isEven = num => (num % 2 === 0 ? 'yes' : 'no');

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no". \n');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}! \n`);

  for (let i = 0; i < 3; i += 1) {
    const random = Math.floor(Math.random() * 100);
    console.log(`Question: ${random}`);
    const answer = readlineSync.question('Your answer: ');

    if (isEven(random) === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven(random)}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export { greeting, brainEven };
