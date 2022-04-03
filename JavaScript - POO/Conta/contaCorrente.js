import { conta } from "./conta.js";
export class contaCorrente extends conta {
  constructor(saldo, cliente, agencia) {
      super(saldo, cliente, agencia);
  }
  
  //Sobreescrevendo método da classe mãe(Se o método é abstrato sou obrigado a sobreescreve-lo).
  sacar(valorSaque) {
    let taxa = 1;
    return super._sacar(valorSaque, taxa);
  };
}