const oddsAndEvens = [13, 3, 4, 10, 7, 2]

// Seu código aqui.
const ordenedNumber = arrayNumbers => {
  const sortArray = arrayNumbers.sort(function (a, b) {
    return a - b
  })
  console.log(
    `Os números ${sortArray} encontram-se ordenados de forma crescente`
  )
}
ordenedNumber(oddsAndEvens)
