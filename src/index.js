import readlineSync from 'readline-sync';

const greeting = 'Welcome to the Brain Games!';

const gameEngine = (rules, data) => {
  let finish = 1;

  console.log(greeting);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rules);

  while (finish < 4) {
    const { question, correctAnswer } = data();
    console.log(`Question : ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
      finish += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameEngine;
