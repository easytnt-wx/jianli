const { defineConfig } = require('@vue/cli-service')
console.log(defineConfig)
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false
})
