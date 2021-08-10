module.exports = api => {
  api.extendPackage({
    scripts: {
        "dev": "APP_URL=http://localhost:8080/app df-dev-server",
        "dev-src": "vue-cli-service serve",
      },
      dependencies: {
        '@data-fair/dev-server': '^1.0.1'
      }
  })
  api.render('./template')
}