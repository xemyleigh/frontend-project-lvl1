import gameEngine from '../index.js';

const gameRules = 'What number is missing in the progression?';

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const gameData = () => {
  const number = getRandom(1, 100);
  const step = getRandom(3, 20);
  const missingChar = getRandom(0, 10);
  const arr = [];

  for (let i = number; arr.length < 10; i += step) {
    arr.push(i);
  }

  const correctAnswer = arr[missingChar].toString();
  arr[missingChar] = '..';
  const question = arr.join(' ');

  return { question, correctAnswer };
};

export default () => gameEngine(gameRules, gameData);
