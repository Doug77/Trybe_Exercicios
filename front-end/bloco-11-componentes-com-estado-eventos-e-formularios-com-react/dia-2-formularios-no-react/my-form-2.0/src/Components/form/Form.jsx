import React from 'react';
import siglas from '../../state.js';

export default function Form() {
  console.log(siglas);
  return (
    <form>
      <label>
        Nome:
        <input type="text" name="nome" required />
      </label>
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <label>
        CPF:
        <input type="text" name="cpf" required />
      </label>
      <label>
        Endereço:
        <input type="text" name="endereco" required />
      </label>
      <label>
        Cidade:
        <input type="text" name="cidade" required />
      </label>
      <label>
        Estado:
        <select>
          {
            siglas.map((state) => <option value="state">{ state }</option>)
          }
        </select>
      </label>
      <label>
        Casa:
        <input type="radio" name="local" required />
      </label>
      <label>
        Apartamento:
        <input type="radio" name="local" required />
      </label>
    </form>
  );
}
