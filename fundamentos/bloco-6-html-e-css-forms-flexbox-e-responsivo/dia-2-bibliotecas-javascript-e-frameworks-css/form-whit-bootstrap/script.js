const arraySiglaEstado = [
  'AC',
  'AL',
  'AM',
  'AP',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MT',
  'MS',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RO',
  'RS',
  'RR',
  'SC',
  'SE',
  'SP',
  'TO'
]

const arrayTextoEstado = [
  'Acre',
  'Alagoas',
  'Amazonas',
  'Amapá',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espírito Santo',
  'Goiás',
  'Maranhão',
  'Mato Grosso',
  'Mato rosso do Sul',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rondônia',
  'Rio Grande do Sul',
  'Roraima',
  'Santa Catarina',
  'Sergipe',
  'São Paulo',
  'Tocantins'
]

function generetOption() {
  const selecState = document.querySelector('#inputState')
  for (let i = 0; i < arraySiglaEstado.length; i++) {
    const changeState = document.createElement('option')
    selecState.appendChild(changeState).innerText = arrayTextoEstado[i]
    selecState.appendChild(changeState).value = arraySiglaEstado[i]
  }
}
generetOption()

function checkDate() {
  const day = document.getElementById('dia')
  const month = document.getElementById('mes')
  const year = document.getElementById('ano')
  if (day.value < 0 || day.value > 31) {
    alert('Dia inválido, por favor insira um dia válido.')
  }
  if (month.value < 0 || month.value > 12) {
    alert('Mês inválido, por favor insira um mês válido.')
  }
  if (year.value < 0) {
    alert('Ano inválido, por favor insira um ano válido.')
  }
}
