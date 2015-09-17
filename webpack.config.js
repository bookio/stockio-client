var webpack = require('webpack');  

module.exports = {  
    entry: [
      'webpack/hot/only-dev-server',
      "./app.js"
    ],
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    module: {
        loaders: [

			{ test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // use ! to chain loaders
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
			{ test: /\.(png|jpg|jpeg|svg)$/, loader: 'url-loader?limit=8192' }, // inline base64 URLs for <=8k images, direct URLs for the rest

            { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},


        ]
    },
    plugins: [
      new webpack.NoErrorsPlugin()
//	  new webpack.optimize.UglifyJsPlugin({minimize: true}) 
	]

};