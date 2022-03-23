import gameEngine from '../src/index.js';

const gameRules = 'What is the result of the expression?';

const getChar = () => {
  const chars = ['+', '-', '*'];
  const index = Math.floor(Math.random() * 3);
  return chars[index];
};

const getNumber = () => Math.floor(Math.random() * 10);

const mathOperation = (num1, num2, operator) => {
  let result = '';
  if (operator === '+') {
    result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  } else if (operator === '*') {
    result = num1 * num2;
  }
  return result;
};

const gameData = () => {
  const firstNumber = getNumber();
  const secondNumber = getNumber();
  const char = getChar();

  const question = `${firstNumber} ${char} ${secondNumber}`;
  const correctAnswer = mathOperation(firstNumber, secondNumber, char).toString();
  return { question, correctAnswer };
};

gameEngine(gameRules, gameData);
