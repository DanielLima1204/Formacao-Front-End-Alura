import { Cliente } from "./Cliente.js";
import { contaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente('Ricardo', 11122233309, 34525896);

const cliente2 = new Cliente('Alice', 88822233309, 12345678);

const cliente3 = new Cliente("Daniel", 455788966, 123456789);

const contaCorrenteRicardo = new contaCorrente(cliente1, 1001);

const contaCorrenteAlice = new contaCorrente(cliente2, 1002);

//Outra forma de criar o Objeto
const contaCorrenteDaniel = new contaCorrente(cliente3, 1003);


// contaCorrenteRicardo.depositar(500);
// let valor = 200;
// contaCorrenteRicardo.transferir(valor, contaCorrenteAlice);
// console.log(`Valor: ${valor}`);
// console.log(contaCorrenteAlice);


console.log(contaCorrenteRicardo);
console.log(contaCorrenteAlice);
console.log(contaCorrenteDaniel);
console.log(contaCorrente.numeroDeContas);




// console.log(cliente1);
// console.log(cliente2);



// class Cliente {
//   constructor(nome, cpf, agencia, saldo) {
//     this.nome = nome;
//     this.cpf = cpf;
//     this.agencia = agencia;
//     this.saldo = saldo
//   }
//   descreverCliente() {
//     console.log(`Nome: ${this.nome}`);
//     console.log(`CPF: ${this.cpf}`);
//     console.log(`Agencia: ${this.agencia}`);
//     console.log(`Saldo: ${this.saldo}`)
//   }

// }

// const Daniel = new Cliente("Daniel Santos", "072.848.825-65", "1155", 0);
// Daniel.descreverCliente();
