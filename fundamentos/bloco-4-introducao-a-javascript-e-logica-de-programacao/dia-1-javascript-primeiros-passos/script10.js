let valorDeProducao = 10
let valorDeVenda = 25
let quantidadeDeItens = 1000
const imposto = 0.2

if (valorDeProducao < 0 || valorDeVenda < 0) {
  console.log('Valores invaladios')
} else {
  let custoTotal = valorDeProducao + imposto
  let lucro = valorDeVenda - custoTotal
  console.log('Temos um lucro de', lucro * quantidadeDeItens)
}
