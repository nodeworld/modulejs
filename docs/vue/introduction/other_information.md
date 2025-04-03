---
displayed_sidebar: vueSidebar
title: Generic Information
---

## Control the autocomplete field based on requirements.

 Adjust the width of the autocomplete list based on the project requirement. This module will inherit the width of parent container by default. But it can be customized as per the project need. It is very easy to control the UX design of this module with CSS, styles, bootstrap, tailwind and so on. Take the control of this module as per your requirement. Checkout below documenttaion for complete details.

## Useful Tips

Incase the Autocomplete component is mounted on a nested or multiple nested child components and if the dropdownData is rendered or fetched only during onMounted life-cycle, consider initializing the module with v-if condition to make sure Autocomplete component loads as expected.

```js
<Autocomplete v-if="data.length > 0" :dropdownData="data"/>
```

Adding v-if condition is solely based on the application's business logic and is just optional.

## Debugging Autocomplete list during development

For inspecting the classes or styles during develeopment, pass `inspectAutoCompleteList` as `true` so that the dropdown list will not close which will help to inspect the list. But don't forget to remove or make it `false` during production deployment

