const webpack = require("webpack");
module.exports = {
	configureWebpack: {

	plugins: [
		 new webpack.ProvidePlugin({
		   $: "jquery",
		   'jquery': "jquery",
		   "window.jquery": "jquery",
		   Popper: ["popper.js", "default"]
		 }),
		 new webpack.ProvidePlugin({
		   'slick': "slick",
		   Popper: ["popper.js", "default"]
		 })
		]
	 },
	css: {
		loaderOptions: {
		  sass: {
			 prependData: `@import "@/style/_variable.scss";`
		  }
		}
	},
	devServer: {
	    proxy: {  //配置跨域
	      '/bing': {
	        target: 'https://cn.bing.com', 
	        changeOrigin: true, 
	        pathRewrite: {
	          '^/bing': '' 
	        }
	      },
	    }
	  },
}