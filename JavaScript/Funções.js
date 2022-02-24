// const Livro = { // Criando um Objeto de Forma Literal
//   nome: "React Native",
//   editora: "Casa do Código",
//   paginas: 185,
//   anunciar: function() { // Função que exibe atributo do objeto
//     console.log("A Alura indica o livro " + this.nome + "!");
//   },
//   mudarNome: function(newNome) { // Função que Modificam atributos do objeto
//     this.nome = newNome;
//   }
// }
// Livro.anunciar();
// Livro.mudarNome("Clean Code");
// Livro.anunciar();

const Livro = function(nome, editora, paginas) {
  gNome = nome,
  gEditora = editora,
  gPaginas = paginas

  this.getNome = function() {
    return gNome;
  }
  this.getEditora = function() {
    return gEditora;
  }
  this.getPaginas = function() {
    return gPaginas;
  }
}

const cleanCode = new Livro("Clean Code", "Casa do Código", 195);
console.log(`Nome: ${cleanCode.getNome()}.`);
console.log(`Editora: ${cleanCode.getEditora()}.`);
console.log(`Paginas: ${cleanCode.getPaginas()}.`);
console.log(typeof(Livro));

const temp = new String(nome) // O que o JS faz qnd declaramos um String
console.log(temp.toString());