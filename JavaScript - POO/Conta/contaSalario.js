import { conta } from "./conta.js";

export class contaSalario extends conta {
  constructor(cliente) {
    super(0, cliente, 5);
  };
  //Subreescrevendo método da classe mãe
  sacar(valorSaque) {
    let taxa = 5;
    return super._sacar(valorSaque, taxa);
  };
}