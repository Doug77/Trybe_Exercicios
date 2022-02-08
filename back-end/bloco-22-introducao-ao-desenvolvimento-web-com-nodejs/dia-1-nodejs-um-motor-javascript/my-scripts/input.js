const readlineSync = require('readline-sync');

const askHeight = () => {
  return readlineSync.questionFloat('Qual sua altura?\n');
}

const askWeight = () => {
  return readlineSync.questionFloat('Qual seu peso?\n');
}

module.exports = { askHeight, askWeight };