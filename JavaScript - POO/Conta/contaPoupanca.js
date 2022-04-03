import { conta } from './conta.js'

export class contaPoupanca extends conta {
  constructor(saldo, cliente, agencia) {
    super(saldo, cliente, agencia);
  }
  //Sobreescrevendo método da classe mãe
  sacar(valorSaque) {
    let taxa = 2;
    return super._sacar(valorSaque, taxa);
  };
}
