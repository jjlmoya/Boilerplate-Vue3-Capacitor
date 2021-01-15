const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
    // publicPath: process.env.BASE_URL || '/',
    configureWebpack: config => {
        config.mode = process.env.NODE_ENV !== 'development' ? 'production' : 'development'
    },
    productionSourceMap: false,
    css: {
        sourceMap: !isProduction,
        loaderOptions: {
            scss: {
                sassOptions: {
                    includePaths: ['./src/scss']
                },
                prependData: `
                    @import "settings/_settings.scss";
                    @import "tools/_tools.scss";
                    @import "foundations/_foundations.scss";
                `
            }
        }
    }
}
