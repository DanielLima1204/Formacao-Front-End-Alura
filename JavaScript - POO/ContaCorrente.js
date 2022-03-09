import { Cliente } from "./Cliente.js";
export class contaCorrente {
  constructor(cliente, agencia) {
      this.cliente = cliente; // fazendo uso do setter
      this.agencia = agencia;
      contaCorrente.numeroDeContas += 1; // Implementando o valor do campo estatico
  }

  static numeroDeContas = 0; //Campo estatico que pertence a classe não ao o objeto

  set cliente(novoCliente) { // Setter
    if(novoCliente instanceof Cliente){
        this._cliente = novoCliente;
    }
  }
  get cliente() { // Getter
    return this._cliente;
  }
  get saldo() { // Getter
    return this._saldo;
  }
  _saldo = 0; // Private field - Campo Privado só pode ser acessado dentro da classe
  
  sacar(valorSaque) {
    if(this._saldo < valorSaque){
      console.log(`Voçe quer sacar: ${valorSaque}R$ porém seu saldo é de: ${this._saldo} R$! SALDO INSUFICIENTE!`);
      return;
    } 
    this._saldo -= valorSaque;
    console.log(`Saque de ${valorSaque} R$ realizado com Sucesso! Saldo Atual ${this._saldo} R$`);    
  }
  
  depositar(valorDeposito) {
    if(valorDeposito < 0) {
      console.log(`Valor de deposito ${valorDeposito} R$ INVALIDO!`);
      return;
    }
    this._saldo += valorDeposito;
    console.log(`Deposito de ${valorDeposito} R$ realizado com Sucesso! Saldo Atual ${this._saldo} R$`);    
  }
  transferir(valorTransferencia, contaDestino) {
    // contaDestino.cidade = "Sergipe"; //Adcionando dinâmicamente um atributo ao objeto.
    this.sacar(valorTransferencia);
    contaDestino.depositar(valorTransferencia);
    
  }
}