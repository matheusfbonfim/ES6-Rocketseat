<h1 align="center">
    <img alt="Starter" title="Javascript Starter"src=".github/logo_SVG.svg" width="200px" />
</h1>

<h2 align="center">
  ES6 Rocketseat - Exercícios e Desafios 🚀
</h2>

## Módulo 01 - Conceitos :point_up:

### 01 Exercício :pencil:

Para testar seus conhecimentos com classes, crie uma classe com nome "Admin", essa classe deve extender uma segunda classe chamada "Usuario".

A classe usuário deve receber dois parâmetros no método construtor, e-mail e senha, e anotá-los em propriedades da classe. A classe "Admin" por sua vez não recebe parâmetros mas deve repassar os parâmetros de e-mail e senha à classe pai e marcar uma propriedade "admin" como true na classe.

Agora com suas classes formatadas, adicione um método na classe Usuario chamado isAdmin que retorna se o usuário é administrador ou não baseado na propriedade admin ser true ou não.

```
const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true
```

### 02 Exercício :pencil:

Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:

```
function pares(x, y) {
// código aqui
}
pares(32, 321);
```

### 03 Exercício :pencil:

Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
e retorna um booleano true/false caso exista ou não.

```
function temHabilidade(skills) {
// código aqui
}
var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills); // true ou false
```
_Dica: para verificar se um vetor contém um valor, utilize o método indexOf._

### 04 Exercício :pencil:

Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:

```
function experiencia(anos) {
// código aqui
}
var anosEstudo = 7;
experiencia(anosEstudo);
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master
```

### 05 Exercício :pencil:

Dado o seguinte vetor de objetos:

```
var usuarios = [
{
nome: "Diego",
habilidades: ["Javascript", "ReactJS", "Redux"]
},
{
nome: "Gabriel",
habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
}
];
```

Escreva uma função que produza o seguinte resultado:

`O Diego possui as habilidades: Javascript, ReactJS, Redux 
 O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir`

_Dica: Para percorrer um vetor você deve utilizar a sintaxe for...of e para unir valores de um array
com um separador utilize o join._

## :memo: License

O projeto está sobre a licença [MIT](./LICENSE) ❤️ 

Gostou? Deixe uma estrelinha para ajudar o projeto ⭐

<!-- Mensagem final -->
<h3 align="center">
Feito com ❤️ por <a href="https://www.linkedin.com/in/matheus-bonfim-448667169/">Matheus Bonfim</a>
<br><br>
<a href="https://rocketseat.com.br">
  <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%237519C1">
</a>
</h3>
</h3>