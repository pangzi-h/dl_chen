const {defineConfig} = require('@vue/cli-service')
module.exports       = defineConfig({
    transpileDependencies: true,
    devServer            : {
        port        : 80,
        allowedHosts: 'all',
    },
    outputDir            : process.env.NODE_ENV === 'production' ? '../fastadmin/public/vue' : 'dist',
    indexPath            : process.env.NODE_ENV === 'production' ? '../index.html' : 'index.html',
    publicPath           : process.env.NODE_ENV === 'production' ? 'vue' : '/',
})
