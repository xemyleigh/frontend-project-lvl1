import readlineSync from 'readline-sync';

function getChar() {
  const chars = ['+', '-', '*'];
  const index = Math.floor(Math.random() * 3);
  return chars[index];
}

function getNumber() {
  return Math.floor(Math.random() * 10);
}

const gameCalc = () => {
  let finish = 1;

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');

  while (finish < 4) {
    function getCorrectAnswer() {
      let result = '';
      if (char === '+') {
        result = firstNum + secondNum;
      } else if (char === '-') {
        result = firstNum - secondNum;
      } else if (char === '*') {
        result = firstNum * secondNum;
      }
      return result.toString();
    }

    const firstNum = getNumber();
    const secondNum = getNumber();
    const char = getChar();
    const correctAnswer = getCorrectAnswer();

    console.log(`Question: ${firstNum} ${char} ${secondNum}`);
    const answer = readlineSync.question('Your answer: ').toString();

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

gameCalc();
