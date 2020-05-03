// vue.config.js
module.exports = {
    // options...
    publicPath: process.env.NODE_ENV === 'production'
        ? '/flatmate-front/'
        : '/',
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                // modify the options...
                options.compilerOptions = {whitespace: 'condense'};
                return options;
            });
    },
};
