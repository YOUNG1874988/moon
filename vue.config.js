//vue别名配置，这样的才是正确的，视频里面老师讲的错误！！！

const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: true,
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@$', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
            .set('network', resolve('src/network'))
            .set('views', resolve('src/views'))
            .set('store', resolve('src/store'))
            .set('js', resolve('src/js'))
            .set('css', resolve('src/css'))
    }
}