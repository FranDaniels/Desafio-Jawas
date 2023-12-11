const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode: "development",
    entry: {
        login: './src/login/login.js',
        registro: './src/registro/registro.js',
        inicio: './src/inicio/inicio.js',
        rolUsuario: './src/rolUsuario/rolUsuario.js',
        admin: './src/admin/admin.js',
        clasificador: './src/clasificador/clasificador.js',
        donar: './src/donar/donar.js',
        perfil: './src/perfil/perfil.js',
        loteClasificador: './src/lotesClasificador/loteClasificador.js',
        clasificacion:'./src/clasificacion/clasificacion.js',
        receta: './src/receta/receta.js',
        adminLote: './src/adminLote/adminLote.js',
        joya: './src/joya/joya.js',

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
          ],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
              {
                  loader: 'file-loader',
                  options: {
                      outputPath: 'imagenes',
                  },
              },
          ]
        },
        {
          test: /\.(c|sc|sa)ss$/,
          use: [ MiniCssExtractPlugin.loader, 
              'css-loader',
              'sass-loader',
              {
                  loader: 'postcss-loader',
                  options: {
                      postcssOptions: {
                          plugins: () => {
                              require('autoprefixer')
                          }
                      }
                  }
              }
          ]
      }
      ]},
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
        ignoreOrder: false
    }),
      new CopyWebpackPlugin({
        patterns: [
            { from: './src/imagenes', to: 'imagenes' },
        ],
    }),
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
          template: './src/rolUsuario/rolUsuario.html',
          filename: 'rolUsuario/rolUsuario.html',
          chunks: ['rolUsuario'],
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
        chunks: ['receta'],
      }),
      new HtmlWebpackPlugin({
        template: './src/joya/joya.html',
        filename: 'joya/joya.html',
        chunks: ['joya'],
      }),
      new HtmlWebpackPlugin({
        template: './src/adminLote/adminLote.html',
        filename: 'adminLote/adminLote.html',
        chunks: ['adminLote'],
      }),
    ],
};