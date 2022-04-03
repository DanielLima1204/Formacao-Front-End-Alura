/*
Ser autenticavel significa ter o método autenticar

Ducky Type
*/
export class sistemaDeAutenticacao {
  static login(autenticavel, senha) {
      if(sistemaDeAutenticacao.isAutenticavel(autenticavel)){
        return autenticavel.autenticar(senha);
      }
        return false;
  }
  static isAutenticavel(autenticavel) {
            // Existe a chave "autenticar" dentro do autenticavel? Se existe essa chave é uma função?                
      return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function
  }
}
