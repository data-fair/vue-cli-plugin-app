# @data-fair/vue-cli-plugin-app

A vue-cli plugin to create data-fair applications

## Usage

    npm install -g @vue/cli
    vue create my-app # the default vue 2 preset is ok
    cd my-app
    vue add @data-fair/app
    npm run dev

## Development

Test the plugin from local code source

    cd ..
    vue create test-app # the default vue 2 preset is ok
    cd test-app
    npm install --save-dev file:/full/path/plugin
    vue invoke @data-fair/app
    npm run lint
    npm run dev
    
