// Imports
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Config
module.exports = {
    mode: 'development',
    entry: {
        main: './src/js/main.js'
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    module: {
        rules: [
             // HTML
             {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: false
                        }
                    }
                ]
            },
            // Images
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: '/img'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ]
}