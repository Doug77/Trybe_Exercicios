function myfunc(num1, num2, num3) {
  return new Promise((resolve, reject) => {
    if (typeof num1 !== 'number', typeof num2 !== 'number', typeof num3 !== 'number') {
      reject('Informe apenas números');
    }
    const result = (num1 + num2) * num3;
    result < 50 && reject('Valor muito baixo');
    resolve(result);
  });
}

function randomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

function createNumber() {
  const arrayNumb = ['num1', 'num2', 'num3'];
  const radomicNumbers = arrayNumb.map(randomNumber);
  myfunc(...radomicNumbers)
    .then(result => console.log(result))
    .catch(err => console.error(err.message))
}

createNumber();
