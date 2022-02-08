const imcCal = (alt, pes) => {
  const resultImc = (pes / Math.pow(alt, 2)).toFixed(2)
  console.log(`Seu IMC é ${ resultImc }`);
  if (resultImc < 18.5) {
    console.log("Abaixo do peso (magreza)");
  }
  if (resultImc >= 18.5 && resultImc < 24.9) {
    console.log("Peso normal");
  }
  if (resultImc >= 25.0 && resultImc < 29.9) {
    console.log("Acima do peso (sobrepeso)");
  }
  if (resultImc >= 30.0 && resultImc < 34.9) {
    console.log("Obesidade grau I");
  }
  if (resultImc >= 35.0 && resultImc < 39.9) {
    console.log("Obesidade grau II");
  }
  if (resultImc > 40.0) {
    console.log("Obesidade graus III e IV");
  }
}

module.exports = imcCal;