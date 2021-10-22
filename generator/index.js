module.exports = (api, options) => {
  const dependencies = {
    '@data-fair/dev-server': '^1.1.0',
    '@data-fair/components-app': '^0.2.6',
    axios: '^0.21.1'
  }
  if (options.iframeResizer) {
    dependencies['iframe-resizer'] = '^4.3.2'
  }
  api.extendPackage({
    scripts: {
      dev: 'APP_URL=http://localhost:8384/app df-dev-server',
      'dev-src': 'vue-cli-service serve --port 8384',
      prepublish: `PUBLIC_URL=https://cdn.jsdelivr.net/npm/${api.rootOptions.projectName}@\${npm_package_version}/dist vue-cli-service build --modern`,
      postpublish: 'node scripts/postpublish.js'
    },
    dependencies,
    devDependencies: {
      semver: '^7.3.5',
      eslint: '^7.32.0',
      'eslint-config-standard': '^16.0.3',
      'eslint-plugin-import': '^2.25.2',
      'eslint-plugin-node': '^11.1.0',
      'eslint-plugin-promise': '^5.1.1',
      'eslint-plugin-vue': '^6.2.2'
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
