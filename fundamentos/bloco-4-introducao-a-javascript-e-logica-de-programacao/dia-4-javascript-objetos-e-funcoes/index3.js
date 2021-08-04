let text = ' '
let info = {
  nome: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
  personagem2: {
    nome: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
  }
}

console.log(info.nome + ' e ' + info.personagem2.nome)
console.log(info.origem + ' e ' + info.personagem2.origem)
console.log(info.nota + ' e ' + info.personagem2.nota)
if (info.recorrente == info.personagem2.recorrente) {
  console.log('Ambos recorrentes')
} else {
  console.log('batata')
}
