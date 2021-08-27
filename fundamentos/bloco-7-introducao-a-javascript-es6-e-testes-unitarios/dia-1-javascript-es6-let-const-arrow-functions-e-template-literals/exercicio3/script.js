const btnClick = document.getElementById('btn-click')
let count = 0

btnClick.onclick = () => {
  count++
  btnClick.innerHTML = 'Contagem: ' + count
}
