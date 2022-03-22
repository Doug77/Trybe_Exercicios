const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

function makeError(unity: string) {
    throw new Error(`A unidade ${unity} não é uma unidade válida.`)
}

function convert(value: number, baseUnity: string, convertedUnity: string): number {
  if (!units.includes(baseUnity)) makeError(baseUnity);
  if (!units.includes(convertedUnity)) makeError(convertedUnity);

  const forIndex = units.indexOf(baseUnity);
  const toIndex = units.indexOf(convertedUnity);
  const exponent = (toIndex - forIndex);

  return value * Math.pow(10, exponent);
  console.log('fim');
}

convert(300, 'km', 'dm');