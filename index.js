const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = (api, options) => {
  api.chainWebpack(config => {
    // cf https://github.com/intlify/vue-i18n-loader#webpack-config
    config.module
      .rule('i18n')
      .resourceQuery(/blockType=i18n/)
      .type('javascript/auto')
      .use('i18n')
      .loader('@intlify/vue-i18n-loader')
      .end()
      .use('yaml')
      .loader('yaml-loader')
      .end()

    // inspired by https://github.com/mrbbot/vue-cli-plugin-webpack-bundle-analyzer/blob/master/index.js
    config
      .plugin('webpack-bundle-analyzer')
      .use(BundleAnalyzerPlugin)
      .init(Plugin => new Plugin({
        openAnalyzer: false,
        analyzerMode: 'static'
      }))
  })
}
