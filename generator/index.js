module.exports = (api, options) => {
  api.extendPackage({
    scripts: {
      dev: 'APP_URL=http://localhost:8384/app df-dev-server',
      'dev-src': 'vue-cli-service serve --port 8384',
      prepublish: `PUBLIC_URL=https://cdn.jsdelivr.net/npm/${api.rootOptions.projectName}@\${npm_package_version}/dist vue-cli-service build --modern`,
      postpublish: 'node scripts/postpublish.js',
    },
    dependencies: {
      '@data-fair/dev-server': '^1.0.1',
      '@data-fair/components-app': '^0.2.6',
      axios: '^0.21.1',
    },
    devDependencies: {
      'eslint-config-vuetify': '^0.6.1',
      semver: '^7.3.5',
    },
    eslintConfig: null, // replace by eslintrc.js template
  })
  api.render('./template', { ...options, pkgName: api.rootOptions.projectName })
}
