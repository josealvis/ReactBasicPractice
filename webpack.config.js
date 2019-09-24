var path = require('path');
const HtmlWebPackPlugin = require("../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');

var config = env => {
    // Use env.<YOUR VARIABLE> here:
    console.log('NODE_ENV: ', env.NODE_ENV); // 'local'
   

    let plugins = [];
    plugins.push(
        new HtmlWebPackPlugin({// this plugin create a new index.html with the build in it
        template: "./src/index.html",
        filename: "./index.html"
    }));

    if( env.NODE_ENV !='serv'){
    plugins.push(new CleanWebpackPlugin());
    }

    return {
        //entry is the file that webpack will look to build your app 
        entry: SRC_DIR + '/app/index.js',
        // auput are the  output, were will go
        output: {
            path: DIST_DIR + '/app',
            filename: 'bundle.[contenthash].js',
            publicPath: '/'
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
        plugins
    };
}
module.exports = config;