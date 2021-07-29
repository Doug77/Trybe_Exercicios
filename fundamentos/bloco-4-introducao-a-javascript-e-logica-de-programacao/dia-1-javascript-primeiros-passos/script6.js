let pecasXadrez = 'peões'

// 'rei', 'rainha', 'torre', 'bispo', 'cavalo', 'peões'

switch (pecasXadrez.toLowerCase()) {
  case 'rei':
    console.log(
      'O Rei: Move-se ou captura pe¸cas em qualquer dire¸c˜ao e sentido, uma casa de cada vez'
    )
    break

  case 'rainha':
    console.log(
      'Rainha move-se ou captura tanto como o Bispo ou como a Torre, possibilitando se movimentar, ou capturar em qualquer sentido.'
    )
    break

  case 'torre':
    console.log(
      'A Torre: Move-se ou captura nas casas que est˜ao na mesma linha ou coluna'
    )
    break
  case 'bispo':
    console.log(
      'O Bispo: Move-se ou captura sobre as casas diagonais, tamb´em seguindo em um unico sentido em cada lance'
    )
    break
  case 'cavalo':
    console.log(
      'O Cavalo: E a ´unica pe¸ca que pode saltar sobre as outras (pretas ou brancas). O movimento do Cavalo assemelha-se `a letra ”L”'
    )
    break
  case 'peões':
    console.log(
      'O Peão: Move-se, sempre na frente em linha vertical (nunca para tr´as) uma casa por vez, porém, o primeiro movimento pode ser de duas casas.'
    )

  default:
    break
}
