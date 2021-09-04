window.onload = function () {
  let select = document.querySelector('select')
  let mainText = document.querySelector('p')
  let inputFontSize = document.querySelector('input[name="font-size"]')

  select.addEventListener('change', function () {
    document.body.style.backgroundColor = select.selectedOptions[0].value
    localStorage.setItem('background-color', select.selectedOptions[0].value)
  })

  inputFontSize.addEventListener('change', function () {
    mainText.style.fontSize = `${inputFontSize.value}px`
    localStorage.setItem('selectedFontSize', `${inputFontSize.value}px`)
  })

  let selectedFont = localStorage.getItem('selectedFontSize')
  mainText.style.fontSize = selectedFont
  let savedBackGround = localStorage.getItem('background-color')
  document.body.style.backgroundColor = savedBackGround
}
