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
  const selecState = document.querySelector('#state')
  for (let i = 0; i < arraySiglaEstado.length; i++) {
    const changeState = document.createElement('option')
    selecState.appendChild(changeState).innerText = arrayTextoEstado[i]
    selecState.appendChild(changeState).value = arraySiglaEstado[i]
  }
}
generetOption()
