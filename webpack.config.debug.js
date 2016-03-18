var path = require('path');
var webpack = require('webpack');


module.exports = {
    devtool: 'eval',
    entry: [
        './src/app.js'
    ],
    output: {
        path: path.join(__dirname, 'debug'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                loader: 'babel',
                query: {
                    presets:  ["react", "es2015", "stage-0", "react-hmre"]
                },
                include: path.join(__dirname, 'src')
            }, {
                test: /\.css/,
                include: path.join(__dirname, 'src'),
                loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
            }
        ]
    }
}