const empresas = [
  { nome:'Samsung',valorDeMercado: 50, CEO: 'Kim Hyun Suk', anoDeCriacao: 1938},
  { nome: 'Microsoft',valorDeMercado: 415, CEO: 'Satya Nadella', anoDeCriacao: 1975 },
  { nome: 'Intel',valorDeMercado: 117, CEO:'Brian Krzanich', anoDeCriacao: 1968},
  { nome: 'Facebook',valorDeMercado: 383, CEO:'Mark Zuckerberg', anoDeCriacao: 2004},
  { nome: 'Spotify',valorDeMercado: 30, CEO:'Daniel Ek', anoDeCriacao: 2006  },
  {nome: 'Apple', valorDeMercado: 845, CEO: 'Tim Cook', anoDeCriacao: 1976}
];
//Filter:  Ele vai percorrer todo o array e criar um novo com todos os elementos que passaram no teste implementado, 
//no nosso caso, quando ano de criação for maior que 2000.
const anoDeCriacao = empresas.filter(empresas => (empresas.anoDeCriacao > 2000));
console.log(anoDeCriacao);
//Map: com ele é possível percorrer todos os item do array, executar alguma transformação nesses itens e retornar um novo array sem modificar o atual.
//No nosso caso vamos percorrer o array e dentro de cada objeto vamos pegar as propriedades nome e CEO de cada empresa.
const exibeInformacoes = empresas.map(empresas => `${empresas.nome} ` + 'CEO: ' + `${empresas.CEO}`);
console.log(exibeInformacoes);
//Reduce: o método reduce passa por cada item do array fazendo uma expressão escolhida, e no final vai devolver um único valor. Exatamente o que precisamos para fazer a soma do valor de mercado das empresas.
//Ele recebe dois valores, um acumulado e um atual, no nosso caso o acumulado irá somar com o atual. Como no primeiro loop da soma não temos nenhum valor acumulado, então precisamos passar como segundo parâmetro esse valor, que no nosso caso vai ser 0.
//Se não tivéssemos passado um valor de acumulado o `reduce` pegaria o primeiro item do array, tomando o como se fosse o valor acumulado.
const total = empresas.reduce((resultado, quantidade) => {
  return (resultado + quantidade.valorDeMercado);
}, 0);
console.log(total);