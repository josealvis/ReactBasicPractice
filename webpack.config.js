var path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");


var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');

var config = {
    //entry is the file that webpack will look to build your app
    entry: SRC_DIR + '/app/index.js',
    // auput are the  output, were will go
    output: {
        path: DIST_DIR + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist/app'
    },
    // modules are procces that you want that webpack do with you build code
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }

        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]


};

module.exports = config;