// var = Escopo Abrangente e valor default undefined, permite inicialização sem valor
// const = Escopo local sendo obrigatorio a definação do valor, não é permitido undefined e modificações posteriores
// let = Escopo local não obrigatorio definição de valor, permite modificações posteriores

console.log("Trabalhando com Variáveis"); // JS é Case sensitive
const idade = 29; // "const" altera o comportamento e escopo da variável
if(true){
  let Idade = 15;
  console.log(Idade)
}
console.log(idade)

