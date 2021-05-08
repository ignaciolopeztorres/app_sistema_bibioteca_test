const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');
module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'public/javascripts'),
        filename: 'bundle.js'
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.vue$/,
                use:{
                    loader: 'vue-loader'
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}