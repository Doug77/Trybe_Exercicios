let n = 5
let asterisco = '*'
let linha = ''
let meioPiramide = (n + 1) / 2
let esquerda = meioPiramide
let direita = meioPiramide

for (let a = 0; a <= meioPiramide; a++) {
  for (let b = 0; b <= n; b++) {
    if (b > esquerda && b < direita) {
      linha = linha + asterisco
    } else {
      linha = linha + ' '
    }
  }
  console.log(linha)
  linha = ''
  esquerda -= 1
  direita += 1
}
