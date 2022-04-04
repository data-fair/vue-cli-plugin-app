const { spawnSync } = require('child_process')

module.exports = (api, options) => {
  spawnSync('vue', ['add', 'vuex@5.0.0'], { stdio: 'inherit' })
  spawnSync('vue', ['add', 'vuetify@2.4.8'], { stdio: 'inherit' })

  const dependencies = {
    '@data-fair/dev-server': '^1.5.3',
    '@data-fair/components-app': '^0.2.7',
    '@mdi/js': '^6.6.96',
    axios: '^0.26.1',
    'vue-i18n': '^8.27.1'
  }
  if (options.iframeResizer) {
    dependencies['iframe-resizer'] = '^4.3.2'
  }
  api.extendPackage({
    scripts: {
      dev: 'APP_URL=http://localhost:8384/app df-dev-server',
      'dev-src': 'vue-cli-service serve --port 8384',
      prepublish: `PUBLIC_URL=https://cdn.jsdelivr.net/npm/${api.rootOptions.projectName}@\${npm_package_version}/dist vue-cli-service build --modern`,
      postpublish: 'node scripts/postpublish.js',
      analyze: 'npm run build && browse dist/report.html'
    },
    dependencies,
    devDependencies: {
      '@intlify/vue-i18n-loader': '^1.1.0',
      semver: '^7.3.5',
      eslint: '^7.32.0',
      'eslint-config-standard': '^16.0.3',
      'eslint-plugin-import': '^2.25.4',
      'eslint-plugin-node': '^11.1.0',
      'eslint-plugin-promise': '^5.2.0',
      'eslint-plugin-vue': '^8.0.3',
      'yaml-loader': '^0.6.0'
    },
    eslintConfig: {
      extends: [
        'standard',
        'plugin:vue/recommended',
        'eslint:recommended'
      ]
    }
  })
  api.render('./template', { ...options, pkgName: api.rootOptions.projectName })
}
