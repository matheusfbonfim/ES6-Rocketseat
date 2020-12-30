<h1 align="center">
    <img alt="Starter" title="Javascript Starter"src="https://github.com/matheusfbonfim/ES6-Rocketseat/blob/master/.github/logo_SVG.svg" width="170px" />
</h1>

<h2 align="center">
  ES6 Rocketseat - Exercícios e Desafios 🚀
</h2>

## Módulo 03 - Async/await :point_up:

Todos os exercícios abaixo necessitam que você esteja com o plugin do Async/Await do Babel e o babel-polyfill devidamente configurados. Em alguns exercícios é necessário instalar o Axios.

### Exercício :pencil:

Transforme os seguintes trechos de código utilizando async/await:

```
// Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
function umPorSegundo() {
  delay().then(() => {
    console.log('1s');
 
    delay().then(() => {
      console.log('2s');

        delay().then(() => {
          console.log('3s');
        });
    })
  });
}
umPorSegundo();
```

```
import axios from 'axios';
function getUserFromGithub(user) {
 axios.get(`https://api.github.com/users/${user}`)
 .then(response => {
 console.log(response.data);
 })
 .catch(err => {
 console.log('Usuário não existe');
 })
}
getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');

```

```
class Github {
 static getRepositories(repo) {
 axios.get(`https://api.github.com/repos/${repo}`)
 .then(response => {
 console.log(response.data);
 })
 .catch(err => {
 console.log('Repositório não existe');
 })
 }
}
Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');
```

```
const buscaUsuario = usuario => {
 axios.get(`https://api.github.com/users/${user}`)
 .then(response => {
 console.log(response.data);
 })
 .catch(err => {
 console.log('Usuário não existe');
 });
}
buscaUsuario('diego3g');
```

## :memo: License

O projeto está sobre a licença [MIT](./LICENSE) ❤️

Gostou? Deixe uma estrelinha para ajudar o projeto ⭐

<!-- Mensagem final -->
<h3 align="center">
Feito com ❤️ por <a href="https://www.linkedin.com/in/matheusfbonfim/">Matheus Bonfim</a>
<br><br>
<a href="https://rocketseat.com.br">
  <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%237519C1">
</a>
</h3>
</h3>
