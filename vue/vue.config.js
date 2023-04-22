const {defineConfig} = require('@vue/cli-service')
module.exports       = defineConfig({
    transpileDependencies: true,
    devServer            : {
        port        : 80,
        allowedHosts: 'all',
    },
    outputDir: '../fastadmin/public/vue',
    publicPath: 'vue',
    indexPath: '../index.html',
})
