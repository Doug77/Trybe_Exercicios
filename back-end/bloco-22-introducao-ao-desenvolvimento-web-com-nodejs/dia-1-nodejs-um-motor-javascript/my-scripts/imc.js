const imcCal = (alt, pes) => {
  console.log(`Seu IMC é ${(pes / Math.pow(alt, 2)).toFixed(2)}`);
}

imcCal(1.80, 75);