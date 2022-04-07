import { Person } from './Person';

class Student extends Person {
  private _matricula: string
  private _nome: string
  private _notasDeProva: number[]
  private _notasDeTrabalho: number[]

  constructor(matricula: string, nome: string, notasDeProva: number[], notasDeTrabalho: number[]) {
    this._matricula = matricula;
    this._nome = nome;
    this._notasDeProva = notasDeProva;
    this._notasDeTrabalho = notasDeTrabalho;
  }

  get matricula() {
    return this._matricula;
  }

  set matricula(params: string) {
    this._matricula = params;
  }

  get nome() {
    return this._nome;
  }

  set nome(params: string) {
    this._nome = params;
  }

  set notasDeTrabalho (params: number[]) {
    this._notasDeTrabalho = params;
  }

  set notasDeProva (params: number[]) {
    this._notasDeProva = params;
  }

  somaNotas() {
    const notas = [...this._notasDeProva, ...this._notasDeTrabalho];
    return notas.reduce((prevEl, currEl) => prevEl + currEl);    
  }

  mediaNotas() {
    const notasTotais = this.somaNotas(); 
    return Math.round(notasTotais / 6);
  }

}

const estudante1 = new Student('123456', 'Joãozinho', [], []);
console.log(estudante1);

const estudante2 = new Student('123456', 'Mariazinha', [], []);
console.log(estudante2);