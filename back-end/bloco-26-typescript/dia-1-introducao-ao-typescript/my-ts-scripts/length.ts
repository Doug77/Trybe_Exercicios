const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

function makeErro(unity: string) {
  throw new Error(`A unidade ${unity} não é uma unidade válida.`)
}

function convertUnity(value: number, baseUnity: string, convertedUnity: string): number {
  if (!units.includes(baseUnity)) makeErro(baseUnity);
  if (!units.includes(convertedUnity)) makeErro(convertedUnity);

  const forIndex = units.indexOf(baseUnity);
  const toIndex = units.indexOf(convertedUnity);
  const exponent = (toIndex - forIndex);

  return value * Math.pow(10, exponent);
  console.log('fim');
}

convertUnity(300, 'km', 'dm');