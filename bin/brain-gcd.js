#!/usr/bin/env node

import gameEngine from '../src/index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const getNumber = () => Math.floor(Math.random() * 100);

const gameData = () => {
  const firstNumber = getNumber();
  const secondNumber = getNumber();
  const question = `${firstNumber} ${secondNumber}`;
  const arr = [];
  for (let i = 1; i < 101; i += 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      arr.push(i);
    }
  }
  const correctAnswer = arr[arr.length - 1].toString();
  return { question, correctAnswer };
};

gameEngine(gameRules, gameData);
