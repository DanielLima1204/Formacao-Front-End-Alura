import { Diretor } from "./Diretor.js";
import { Gerente } from "./Gerente.js";
import { sistemaDeAutenticacao } from "../sistemaDeAutenticacao.js";
import { Cliente } from "../Cliente.js";

const diretor = new Diretor("Daniel", 123456, 5000);

const gerente = new Gerente("Gleice", 456789, 2500);

const cliente = new Cliente("Keyla", 369258, 258147, "456");

diretor.cadastrarSenha("123456");
gerente.cadastrarSenha("456789");
console.log(sistemaDeAutenticacao.login(diretor, "123456"));
console.log(sistemaDeAutenticacao.login(gerente, "456789"));
const clienteEstaLogado = sistemaDeAutenticacao.login(cliente, "456");
console.log(clienteEstaLogado);