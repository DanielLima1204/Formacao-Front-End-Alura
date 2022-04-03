//Classe Abstrata
export class conta{
  constructor(saldo, cliente, agencia){
    if(this.constructor == conta) {
      // Lançar Erro e Interromper Programa
      throw new Error("NÃO PERMITIDO! POIS A CLASSE É ABSTRATA!"); 
    }
    this._saldo = saldo;
    this._cliente = cliente;
    this._agencia = agencia;
    
  }
  get cliente() { // Getter
    return this._cliente;
  }
  get saldo() { // Getter
    return this._saldo;
  }
  
  //Método Abstrato
  sacar(valorSaque) {
    throw new Error("O método sacar é abstrato!");
  };
  _sacar(valorSaque, taxa) {
    const valorSacado = valorSaque + taxa;
    if(this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }
    return 0;
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