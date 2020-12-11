module.exports = {
  // Arquivo principal
  // Carrega o @babel/polyfill antes de carregar o main.js
  entry: ['@babel/polyfill','./src/main.js'],
  // Para qual lugar e arquivo deve enviar o codigo convertido
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
  },
  devServer: {
    // Caminho para o servidor
    contentBase: __dirname + '/public'
  },
  module: {
    // Como o webpack deve se comportar quando o usuario estiver tentando
    // importar novos arquivos js
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:  {
          loader: 'babel-loader',
        }
      },
    ]
  }
};