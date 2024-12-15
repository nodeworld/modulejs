---
displayed_sidebar: reactSidebar
title: Logs / Support / Roadmap
---

## Running the github code locally to test autocomplete module in local react-app.

- Download the [react-autocomplete-plugin](https://github.com/nodeworld/react-autocomplete-plugin) code locally through github.

- Execute `npm install`.

- Execute `npm run build` to created build files for develeopment.

- (Optional) - Execute `npm run test` to see if all test cases are passed.

- To test this package locally in a react app do the below actions

    - Remove react packages - react, react-dom, @types/react, @types/react-dom from `react-autocomplete-plugin` package.json's dev dependencies
    - This is because, when we npm link this module to the local react application, it may cause the react application to crash due to 2 different react versions being mapped. Refer the [link](https://legacy.reactjs.org/warnings/invalid-hook-call-warning.html) for more information on this issue.
    - From `react-autocomplete-plugin` execute the command `npm link`
    - Go to the react application that needs to integrate this module and execute `npm link react-autocomplete-plugin`
    - Now this package will get mapped to the node modules of the react application.
    - If node_modules is removed from the react application, then the same steps must be followed again.
    - Now go back to the `react-autocomplete-plugin` module and follow below actions
    - npm link `<PATH_TO_YOUR_REACT_APP>/node_modules/react`
    - npm link `<PATH_TO_YOUR_REACT_APP>/node_modules/react-dom`
    - These command will make sure the `react-autocomplete-plugin` module uses the same version of react libraries that your react application use.
    - From your react app, import the autocomplete module, start the app and validate if it works.
    - If there is any error like `Invalid hook call`, then do the following again
    - Execute `npm link` from `react-autocomplete-plugin` module
    - Go to the react application and execute `npm link react-autocomplete-plugin`, then start the app.
    - If the issue still persists, there are many forums that helps to resolve this issue.
    - If nothing works, just copy the components folder and utils folder into your webapp and import the Autocomplete component.
    - Cheers 👋

## Change Logs and version history

Refer the change history by viewing this link - [CHANGELOG](https://github.com/nodeworld/react-autocomplete-plugin/blob/release/CHANGELOG.md)


## Github link

Github Link - [react-autocomplete-plugin](https://github.com/nodeworld/react-autocomplete-plugin)

## Roadmap

- Multi select dropdown feature in Q4 2024 or Q1 2025.
- Extensive search - Ability to search entire object in the list

## Other plugins

Checkout similar Autocomplete plugin in Angular Framework [ng-autocomplete-plugin](https://www.npmjs.com/package/ng-autocomplete-plugin) with same features

## Support

Please raise an issue in github repository

Github Link - [Raise an issue](https://github.com/nodeworld/react-autocomplete-plugin/issues)
