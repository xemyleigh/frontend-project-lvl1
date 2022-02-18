import readlineSync from 'readline-sync';

const oddOrEven = () => {
  let finish = 1;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (finish <= 3) {
    const num = Math.floor(Math.random() * 100);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if ((answer === 'yes' && num % 2 === 0) || (answer === 'no' && num % 2 !== 0)) {
      console.log('Correct!');
      finish += 1;
    } else if (answer === 'no' && num % 2 === 0) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
      console.log(`Let's try again, ${name}!`);
    } else if (answer === 'yes' && num % 2 !== 0) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
      console.log(`Let's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
};

oddOrEven();
