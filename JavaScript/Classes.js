class Livro {
  constructor(nome, editora, paginas){
    this.nome = nome;
    this.editora = editora;
    this.paginas = paginas;
  }
  anunciarTitulo(){
    console.log(`Titulo: ${this.nome}`);
  }
  descreverTitulo(){
    console.log(`Titulo: ${this.nome} é livro da editora ${this.editora} e tem ${this.paginas} paginas`);
  } 
}


// const cleanCode = new Livro("Clean Code", "Brazuka", "545");
// cleanCode.anunciarTitulo();
// cleanCode.descreverTitulo();

class livroColecao extends Livro {
  constructor(nome, nomeColecao) {
    super(nome);
    this.nomeColecao = nomeColecao;
  }

  descreverColecao() {
    console.log(`O livro ${this.nome} faz parte da coleção ${this.nomeColecao}`);
  }
}

const LogicaDeProgramacao = new livroColecao("Logica de Programação", "Comece a Programar");
LogicaDeProgramacao.descreverColecao();
console.log(typeof(LogicaDeProgramacao));