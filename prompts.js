module.exports = pkg => {
  if (!pkg.devDependencies['vue-cli-plugin-vuetify']) {
    throw new Error('This plugin requires vuetify, please run "vue add vuetify" then try again.')
  }
  if (!pkg.devDependencies['@vue/cli-plugin-vuex']) {
    throw new Error('This plugin requires vuex, please run "vue add vuex" then try again.')
  }

  const prompts = [
    {
      type: 'list',
      name: 'locale',
      message: 'The default locale of the application.',
      validate: input => !!input,
      default: 'fr',
      choices: ['fr', 'en']
    },
    {
      type: 'input',
      name: 'title',
      message: 'The title of the application.',
      validate: input => !!input,
      default: pkg.name
    },
    {
      type: 'input',
      name: 'id',
      message: 'The id of the application.',
      validate: input => !!input,
      default: pkg.name
    },
    {
      type: 'input',
      name: 'description',
      message: 'The description of the application.',
      validate: input => !!input
    },
    {
      type: 'input',
      name: 'keywords',
      message: 'Comma separated list of keywords.',
      validate: input => !!input,
      filter: input => input.split(',').map(keyword => keyword.trim()).filter(keyword => !!keyword)
    },
    {
      type: 'confirm',
      name: 'iframeResizer',
      message: 'Use iframe-resizer to resize the application when it is integrated in websites.',
      default: true
    }
  ]

  return prompts
}
