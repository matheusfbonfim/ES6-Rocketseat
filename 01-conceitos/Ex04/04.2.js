function mostraInfo(usuario) {
  return `${usuario.nome} tem ${usuario.idade} anos.`;
 }
 mostraInfo({ nome: 'Diego', idade: 23 })