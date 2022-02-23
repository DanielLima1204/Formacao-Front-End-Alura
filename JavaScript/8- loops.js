console.log(`Trabalhando com Loops`);

//Criando Array com Destinos
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

// Informações do Comprador
let idadeComprador = 18;
let estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Sergipe";
let podeComprar = (idadeComprador >= 18 || estaAcompanhada && destino);

// Checagem se o Destino está no array e indentificando o seu indice
let contador = 0;
let checarDestino = false;
let indiceDestino;
while(contador < 4) {
    if(destino == listaDeDestinos[contador]) {
      checarDestino = true;
      indiceDestino = contador;
      break;
    }   
    contador += 1;
}
//console.log("Destino existe: " + checarDestino);

// Checagem se é possivel concluir a compra
if(podeComprar && checarDestino) {
  listaDeDestinos.splice(indiceDestino, 1);
  console.log(`Destino Vendido: ${destino}.`);
  temPassagemComprada = true;
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

// let checarDestino = false;
// let indiceDestino;
// for(x = 0; x < listaDeDestinos.length; x++) {
//   if(destino == listaDeDestinos[x]) {
//       indiceDestino = x;
//       checarDestino = true;
//       break;
//     } 
// }