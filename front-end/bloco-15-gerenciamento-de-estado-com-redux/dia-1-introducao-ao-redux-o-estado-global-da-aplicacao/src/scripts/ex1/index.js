const Redux = require('redux');

const store = Redux.createStore();

const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer = (state = ESTADO_INICIAL) => {
  return state;
};
  
  const store = Redux.createStore(reducer);
  