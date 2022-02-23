console.log(`Trabalhando com Condicionais`);

const listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`,
  `Sergipe`
);
console.log(`Destinos Possiveis: `);
for(x = 0; x < listaDeDestinos.length; x++) {
    console.log(listaDeDestinos[x]);  
}

let idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = false;

if(idadeComprador >= 18 || estaAcompanhada) {
  listaDeDestinos.splice(1, 1);
  console.log(`Destino Vendido: ${listaDeDestinos[1]}.`);
} else {
  console.log(`Destino Não Vendido, Idade do Comprador: ${idadeComprador} anos e Não Acompanhado`);
}

console.log("Embarque: \n");
if(idadeComprador >= 18 && temPassagemComprada) {
  console.log("Boa Viagem!");
} else {
  console.log("Viagem Não Autorizada!");
}
         
console.log(listaDeDestinos);

let contador = 5;
while(contador > 0) {
  console.log(contador);
  contador -= 1;
}

//if(idadeComprador >= 18) {
    //listaDeDestinos.splice(1, 1);
    //console.log(`Destino Vendido: ${listaDeDestinos[1]}.`);
//} else if (estaAcompanhada) {
    //listaDeDestinos.splice(1, 1);
    //console.log(`Destino Vendido: ${listaDeDestinos[1]}.`);
 // } else {
    //console.log(`Destino Não Vendido, Idade do Comprador: ${idadeComprador} anos e Não Acompanhado`);
  //}