let n = 5
let linha = ''
let posicao = n

for (let a = 0; a < n; a++) {
  for (let b = 0; b <= n; b++) {
    if (b < posicao) {
      linha += ' '
    } else {
      linha += '*'
    }
  }
  console.log(linha)
  linha = ''
  posicao--
}
