#!/usr/bin/env node

import gameEngine from '../src/index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameData = () => {
  const number = Math.floor(Math.random() * 100);
  const question = number;
  const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';
  return { question, correctAnswer };
};

gameEngine(gameRules, gameData);
