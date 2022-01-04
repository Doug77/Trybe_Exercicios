import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';
import Item from '../Item';

afterEach(cleanup);

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água'];
    const { getByTestId, getAllByTestId } = render(<App />)
    const input = getByTestId('input-todo');
    const button = getByTestId('input-todo-button');

    listTodo.forEach(todo => {
      fireEvent.change(input, { target: { value: todo } })
      fireEvent.click(button);
    })

    const todos = getAllByTestId('todo-item');
    expect(todos.length).toBe(listTodo.length);
  })
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    const TODO = { todo: 'Nova tarefa', selected: false, id: 1 }
    const { getByText } = render(<Item content={ TODO } />)
    const task = getByText(TODO.todo);
    expect(task).toBeInTheDocument();
  })
})