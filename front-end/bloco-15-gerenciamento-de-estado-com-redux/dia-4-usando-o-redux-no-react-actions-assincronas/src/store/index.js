// Importe o método applyMiddleware
// Importe o redux-thunk
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export default store;
