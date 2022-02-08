const imcCal = (alt, pes) => {
  console.log(`Seu IMC é ${(pes / Math.pow(alt, 2)).toFixed(2)}`);
}

module.exports = imcCal;