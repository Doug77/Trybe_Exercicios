import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

describe('Teste da aplicação, testando o botão e sua funcionalidade', () => {
  test('Verificando se o botão está na tela e se o ele contém o texto "Adicionar"', () => {
    const { getByTestId } = render(<App />);
    const button = getByTestId('input-todo-button');
    expect(button).toBeDefined();
    expect(button.value).toBe('Adicionar');
  });

  test(`Ao clicar no botão, é necessário adicionar o que o usuário digitou à lista`, () => {
    const {getByTestId, getAllByTestId } = render(<App />);

    const button = getByTestId('input-todo-button');
    expect(button).toBeDefined();
    expect(button.value).toBe('Adicionar');
    
    const input = getByTestId('input-todo');
    expect(input).toBeDefined();
    const NEW_TODO = "Nova tarefa";
    fireEvent.change(input, { target: { value: NEW_TODO }})
    expect(input.value).toBe(NEW_TODO);

    fireEvent.click(button);
    const todos = getAllByTestId('todo-item');
    expect(todos.length).toBe(1);
  });
});