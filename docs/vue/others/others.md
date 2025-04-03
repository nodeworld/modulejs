---
displayed_sidebar: vueSidebar
title: Build / Support / Roadmap
---

## Running the github code locally to test autocomplete module in local vue-app.

- Download the [vue-autocomplete-plugin](https://github.com/nodeworld/vue-autocomplete-plugin) code locally through github.

- Execute `npm install`.

- Create App.vue and main.ts (to mount the app) in the src folder and execute `npm run dev`.

- Or alternatively you can skip the above step and use `npm link` to test the feature locally with a vue web application.

- In `vue-autocomplete-plugin` module, run `npm link`. This will add the `vue-autocomplete-plugin` in node_modules locally.

- From the vue web application run `npm link vue-autocomplete-plugin`.

- Import the Autocomplete module from `vue-autocomplete-plugin` like usual npm package and start using the module.

## Change Logs and version history

Refer the change history by viewing this link - [CHANGELOG](https://github.com/nodeworld/vue-autocomplete-plugin/blob/release/CHANGELOG.md)


## Github link

Github Link - [vue-autocomplete-plugin](https://github.com/nodeworld/vue-autocomplete-plugin)

## Roadmap

- Multi select dropdown feature
- Extensive search - Ability to search entire object in the list

## Other plugins

Checkout similar Autocomplete plugin in Angular Framework [ng-autocomplete-plugin](https://www.npmjs.com/package/ng-autocomplete-plugin) with same features

Checkout similar Autocomplete plugin in React Framework [react-autocomplete-plugin](https://www.npmjs.com/package/react-autocomplete-plugin) with same features

## Support

Please raise an issue in github repository

Github Link - [Raise an issue](https://github.com/nodeworld/vue-autocomplete-plugin/issues)

Happy Autocompleting!