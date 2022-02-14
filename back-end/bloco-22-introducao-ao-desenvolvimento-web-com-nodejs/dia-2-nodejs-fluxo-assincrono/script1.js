function myfunc(num1, num2, num3) {
  return new Promise((resolve, reject) => {
    if (typeof num1 !== Number, typeof num2 !== Number, typeof num3 !== Number) {
      reject('Informe apenas números');
    }
    const result = (num1 + num2) * num3;
    result < 50 && reject('Valor muito baixo');
    resolve(result);
  });
}