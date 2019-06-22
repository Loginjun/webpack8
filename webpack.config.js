var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var htmlWithimgLoader = require('html-withimg-loader');
	module.exports = {
		
		mode:'development',
		
		entry:{
	      	   app:'./app/app.js'
    		},
		output:{
			path:path.resolve(__dirname + '/public')
		},
        module:{
			rules:[
				{
					test:/\.(png|jpg|jepg|gif)$/,
					use:[
                        {
                            loader:'url-loader',
                            options:{limit:1000}
                        }
					]
                },
                {
                    test:/\.html?$/,
                    use:[
                        {loader:'html-withimg-loader'}
                    ]
                }
			]
		},
        plugins:[
            new htmlWebpackPlugin({
                template: './index.html',

                inject:'body',

                filename:'pro.html',

                minify:{
                    removeComments:true,

                    removeAttributeQuotes:true,

                    collapseWhitespace:true
                }
            })
        ]
        


	}