# Data Fair - <%= title %>

*<%= description %>*

An application for [DataFair](https://koumoul-dev.github.io/data-fair/). It is hosted [by npm and the jsdelivr CDN](https://cdn.jsdelivr.net/npm/<%= pkgName %>).

## Context

[DataFair](https://koumoul-dev.github.io/data-fair/) is an Open Source Web software developped by [Koumoul](https://koumoul.com) for publishing data online with complete search and aggregation capabilities, metadata management, mapping functionalities, access control, etc. It can be used as a back office for Open Data platforms, data visualizations , custom search engines and other applications.

DataFair comes with functionalities to facilitate the development, deployment and configuration of small data consuming applications. This project is an example of such an application.

## Technical stack

This technical stack is just an example of what can be used to build an application for DataFair. It is a quite rich stack for a state of the art development environment. For an application with a more minimalist stack, you can see [data-fair-minimal](https://github.com/koumoul-dev/data-fair-minimal).

  - [vuejs](https://vuejs.org/): our favorite framework for client-side code
  - [vuetify](https://vuetifyjs.com/en/): a material design UI framework for vuejs

## Initialization

This project was created using the [ data-fair-app vue cli plugin](https://github.com/data-fair/vue-cli-plugin-app).

## Development Setup

Setup dependencies:

    npm install

Configure the Data Fair instance you are accessing by creating a .env file with the following variables (if you skip this step you will be using the public datasets from the Koumoul organization on https://koumoul.com/s/data-fair):

    DATAFAIR_URL=https://koumoul.com/s/data-fair
    DATAFAIR_OWNER_TYPE=organization or user
    DATAFAIR_OWNER_ID=...
    DATAFAIR_API_KEY= leave empty to use only public datasets

Run the development server and serve the application with hot reload:

    npm run dev

## public/config-schema.json

A JSON schema file that describes the expected configuration. DataFair expects this file to be found at the precise path %MY APP%/config-schema.json.

The content of this JSON schema is extended with some annotations used by DataFair to automatically create a configuration form. The details of these annotations can be found in demo of the library we maintain to create these forms:  [vjsf](https://koumoul-dev.github.io/vuetify-jsonschema-form/latest/).

## Deployment

Simply publish the project on the global npm registry (you need to be member of the owner organization).

    npm version PATCH|MINOR|MAJOR
    npm publish
    git push && git push --tags

If the release is a bug fix and you don't want to wait 24h (the cache delay of jsdelivr), you can purge the cache for the index.html file of the minor version in the CDN:

    curl https://purge.jsdelivr.net/npm/<%= pkgName %>@MINOR/dist/index.html

To publish a version for testing purposes you can tag it as a pre-release and publish it with the tag "staging".

    npm version prerelease --preid=staging
    npm publish --tag staging
    curl https://purge.jsdelivr.net/npm/<%= pkgName %>@staging/dist/index.html
    git push && git push --tags
