// Configurando o axios
import axios from 'axios';

// Deixa a API pré configurada
const api = axios.create({
  baseURL: 'https://api.github.com',
});

// Exporta a API para uso direto na url do github
export default api;