function verificaPalindrome(palavra) {
  let palindromo = palavra.split('').reverse().join('')

  if (palindromo == palavra) {
    return true
  } else {
    return false
  }
}

console.log(verificaPalindrome('ana'))
