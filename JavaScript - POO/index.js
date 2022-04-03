import { Cliente } from "./Cliente.js";
import { contaCorrente } from "./Conta/contaCorrente.js";
import { contaPoupanca } from "./Conta/contaPoupanca.js";
import { contaSalario } from "./Conta/contaSalario.js";

const cliente1 = new Cliente("Daniel", 455788966, 123456789);
//Outra forma de criar o Objeto
const contaCorrenteDaniel = new contaCorrente(5000, cliente1, 1001);

const ContaPoupanca = new contaPoupanca(0, cliente1, 1001);

const ContaSalarioDaniel = new contaSalario(cliente1);

console.log(ContaPoupanca);
contaCorrenteDaniel.sacar(10);
console.log(contaCorrenteDaniel);
ContaSalarioDaniel.depositar(1500);
ContaSalarioDaniel.sacar(10);
console.log(ContaSalarioDaniel);


// const conta1 = new conta(0, cliente1, 1002);

