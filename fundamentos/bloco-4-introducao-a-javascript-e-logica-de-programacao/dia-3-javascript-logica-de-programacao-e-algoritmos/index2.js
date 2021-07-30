let n = 5
let linha

for (let a = 0; a <= n; a++) {
  linha = ''
  for (let b = 0; b < a; b++) {
    linha += '*'
  }
  console.log(linha)
}
