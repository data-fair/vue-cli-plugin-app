# @data-fair/vue-cli-plugin-app

A vue-cli plugin to create data-fair applications

## Usage

    npm install -g @vue/cli
    vue create my-app # the default vue 2 preset is ok
    cd my-app
    vue add vuex
    vue add vuetify # chose the default preset
    vue add @data-fair/app
    npm run lint
    npm run dev

## Development

Test the plugin from local code source

    npm link
    cd ..
    vue create test-app # the default vue 2 preset is ok
    cd test-app
    vue add vuex
    vue add vuetify # chose the default preset
    npm link @data-fair/vue-cli-plugin-app
    vue invoke @data-fair/app
    npm run lint
    npm run dev
    
