module.exports = {
  // Arquivo principal
  entry: './src/main.js',
  // Para qual arquivo e local com codigo convertido
  output: {
    // Caminho
    path: __dirname + '/public',
    // Nome do Arquivo
    filename: 'bundle.js',
  },
  devServer: {
    // Caminho para abrir o servidor da aplicação
    contentBase: __dirname + '/public'
  },
  module: {
    // Como o webpack deve ser comportar quando estiver importando 
    // novos arquivos js
    rules: [
      // Quais loader (manipular o conteudo do arquivo e fazer algum tipo de alteração)serão utilizados
      { 
        //Identificar arquivos determinados com .js
        test: /\.js$/,
        // Exclui que o babel executa os arquivos js do nodemodules 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      }
    ],
  }
}