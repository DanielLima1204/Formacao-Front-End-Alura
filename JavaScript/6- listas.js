console.log(`Trabalhando com Listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`
);
listaDeDestinos.push(`Sergipe`); // Adcionando um item na lista no ultimo indice

console.log(`Destinos Possiveis:`);
console.log(listaDeDestinos);                    
listaDeDestinos.splice(1, 2); // deleta um ou varios item da lista ([indice de inicio], [quantidade de items])
console.log(listaDeDestinos);

// Iterando sobre uma lista
for(x = 0; x < listaDeDestinos.length; x++) {
    console.log(listaDeDestinos[x]);
}

