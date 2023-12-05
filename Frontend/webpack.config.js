const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        login: './src/login/login.js',
        registro: './src/registro/registro.js',
        inicio: './src/inicio/inicio.js',
        seleccionRol: './src/seleccionRol/seleccionRol.js',
        admin: './src/admin/admin.js',
        clasificador: './src/clasificador/clasificador.js',
        donar: './src/donar/donar.js',
        perfil: './src/perfil/perfil.js',
        loteClasificador: './src/lotesClasificador/loteClasificador.js',
        clasificacion:'./src/clasificacion/clasificacion.js',
        receta: './src/receta/receta.js',
    },
    output: {
        filename: '[name].main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.s?css$/,
            use: [
              "style-loader", 
              "css-loader",
              "sass-loader",
              {
                loader: "sass-loader",
                options: {
                  implementation: require.resolve("sass"),
                }
              }
        ]}
      ]},
    
    plugins: [
      new HtmlWebpackPlugin({
          template: './src/index.html',
          filename: 'index.html',
          chunks: ['login'], 
      }),
      new HtmlWebpackPlugin({
          template: './src/registro/registro.html',
          filename: 'registro/registro.html',
          chunks: ['registro'],
      }),
      new HtmlWebpackPlugin({
          template: './src/inicio/inicio.html',
          filename: 'inicio/inicio.html',
          chunks: ['inicio'],
      }),
      new HtmlWebpackPlugin({
        template: './src/perfil/perfil.html',
        filename: 'perfil/perfil.html',
        chunks: ['perfil'],
    }),
      new HtmlWebpackPlugin({
          template: './src/seleccionRol/seleccionRol.html',
          filename: 'seleccionRol/seleccionRol.html',
          chunks: ['seleccionRol'],
      }),
      new HtmlWebpackPlugin({
        template: './src/admin/admin.html',
        filename: 'admin/admin.html',
        chunks: ['admin'],
      }),
      new HtmlWebpackPlugin({
        template: './src/clasificador/clasificador.html',
        filename: 'clasificador/clasificador.html',
        chunks: ['clasificador'],
      }),
      new HtmlWebpackPlugin({
        template: './src/donar/donar.html',
        filename: 'donar/donar.html',
        chunks: ['donar'],
      }),
      new HtmlWebpackPlugin({
        template: './src/lotesClasificador/loteClasificador.html',
        filename: 'lotesClasificador/loteClasificador.html',
        chunks: ['loteClasificador'],
      }),
      new HtmlWebpackPlugin({
        template: './src/clasificacion/clasificacion.html',
        filename: 'clasificacion/clasificacion.html',
        chunks: ['clasificacion'],
      }),
      new HtmlWebpackPlugin({
        template: './src/receta/receta.html',
        filename: 'receta/receta.html',
        chuncks: ['receta'],
      }),
    ],
};