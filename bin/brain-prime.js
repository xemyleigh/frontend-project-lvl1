import gameEngine from '../src/index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getNumber = () => Math.floor(Math.random() * 100);

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const gameData = () => {
  const question = getNumber();
  const correctAnswer = (isPrime(question) ? 'yes' : 'no');

  return { question, correctAnswer };
};

gameEngine(gameRules, gameData);
