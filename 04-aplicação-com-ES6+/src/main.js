import api from './api';

class App{
    constructor(){
      this.repositories = [];
      this.formEl = document.getElementById('repo-form');
      this.listEl = document.getElementById('repo-list');
      this.inputEl = document.querySelector('input[name=repository]');
      this.registerHandlers();
    }
  
    registerHandlers() {
      this.formEl.onsubmit = event => this.addRepository(event);
    }
    
    setLoading(loading = true){
      if(loading === true){
        let loadingEl = document.createElement('span');
        loadingEl.setAttribute('id','loading')
        let textLoading = document.createTextNode("Carregando");
        loadingEl.appendChild(textLoading);
        this.formEl.appendChild(loadingEl);
      }else{
        document.getElementById('loading').remove();
      }
    }

    // Usando o metodo do async/await
    async addRepository(event){
      // Para não precisar recarregar a pagina
      event.preventDefault();
      // Valor do texto colocado no input
      const repoInput = this.inputEl.value;

      if(repoInput.lenght === 0){
          // Para de executar a função
          return;
      }

      this.setLoading(true);
        
      try{
        // Requisição assincrona
        const response = await api.get(`/repos/${repoInput}`);
        console.log(response);

        // Nome do repositorio // Descrição do repositorio
        // Link do avatar do repositorio // Link do repositorio
        const {name, description, html_url ,owner:{avatar_url}} = response.data;
        
        // Adicionando
        this.repositories.push({
          name,
          description,
          avatar_url,
          html_url
        })
        
        // Apagar o conteudo do input depois de adicionar
        this.inputEl.value = '';
        
        this.render();

        }catch(err){
          alert("O repositório não existe");
        }    
        
        this.setLoading(false);
    }
  
    // Apaga todo conteudo da lista e renderizar do zero
    render(){
      // Apaga os elementos dentro da lista
      this.listEl.innerHTML = '';
      
      this.repositories.forEach((repo) => {
        // Criando a tag img
        let imgElement = document.createElement('img');
        imgElement.setAttribute('src', repo.avatar_url);
  
        // Criando a tag strong
        let strongElement = document.createElement('strong');
        let textStrongElement = document.createTextNode(repo.name);
        // Colocando o texto dentro de strong
        strongElement.appendChild(textStrongElement);
  
        //Criando a tag p -> Description
        let descriptionElement = document.createElement('p');
        // Criando o texto
        let textDescriptionElement = document.createTextNode(repo.description);
        // Colocando o texto dentro do elemento
        descriptionElement.appendChild(textDescriptionElement);
  
        // Criando o link para o repo
        let linkElement = document.createElement('a');
        // Para abrir uma nova aba
        linkElement.setAttribute('target', '_blank');
        // Referência do link
        linkElement.setAttribute('href',repo.html_url);
        
        // Criando o texto para o linkElement 
        let linkText = document.createTextNode("Acessar");
        linkElement.appendChild(linkText);
        
        // Criar o item
        let listItemElement = document.createElement('li');
        listItemElement.appendChild(imgElement);
        listItemElement.appendChild(strongElement);
        listItemElement.appendChild(descriptionElement);
        listItemElement.appendChild(linkElement);
  
        // Adiciona o item na lista
        this.listEl.appendChild(listItemElement);
        
      })
    }
}
  
new App();  