import { Funcionario } from "./Funcionario.js";

export class Diretor extends Funcionario {
  constructor(nome, cpf, salario) {
      super(nome, cpf, salario);
      this._bonificao = 2;
  }
}