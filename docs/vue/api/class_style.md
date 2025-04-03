---
displayed_sidebar: vueSidebar
title: Classes and Styles
---

## Adding Custom CSS Class to autocomplete

#### Import CustomClassType from the module (Optional).

```js
import { type CustomClassType } from 'vue-autocomplete-plugin';
```

| CustomClassTypes              | Required    | Description |
| :--------                     | :-----------| :-----------|
| `parentContainerClass`        | `No` | Adds class to parent `div` surrounding the input field and dropdown list. |
| `inputFieldClass`             | `No` | Adds class to `input textfield`|
| `listContainerClass`          | `No` | Adds class to `div` that surrounds `ul` of dropdown list. |
| `dropdownUnorderedListClass`  | `No` | Adds class to `ul` of dropdown list. |
| `dropdownListClass`           | `No` | Adds class to each `li` items|
| `disableListClass `           | `No` | Add class to disabled `li` items |
| `noResultClass`               | `No` | Adds class to separate `li` item to show no result message. |
| `inputLabelClass`             | `No` | Adds class to `<label>` field |
| `inputLabelContainerClass`    | `No` | Adds class to surrounding `div` of input label.|
| `customSpinnerClass`          | `No` | Adds class to `span` to show customized spinner.|
| `viewMoreClass`               | `No` | Adds class to View More `li` item |

```ts
customClassType: CustomClassType = {
    inputFieldClass: 'class1',
    dropdownListClass: 'class1 class2'
}
```

```html
<Autocomplete
    :dropdownData="YOUR_DROPDOWN_DATA"
    :broadcastSelectedValue="YOUR_CUSTOM_FUNTION($event)"
    :objectProperty="'name'"
    :customClassType="customClassType">
</Autocomplete>
```

## Adding Custom CSS styles to autocomplete

#### Import CustomStyleType from the module (Optional).

```js
import { type CustomStyleType } from 'vue-autocomplete-plugin';
```

| CustomStyleTypes | Required | Description |
| :-------- | :-----------| :-----------|
| `parentContainerStyle`      | `No` | Adds style to `div` surrounding the input field and dropdown list. |
| `inputFieldStyle`      | `No` | Adds style to `input textfield`|
| `listContainerStyle`      | `No` | Adds style to `div` that surrounds `ul` of dropdown list. |
| `dropdownUnorderedListStyle`      | `No` | Adds style to `ul` of dropdown list. |
| `dropdownListStyle`      | `No` | Adds style to each `li` items|
| `noResultStyle`      | `No` | Adds style to separate `li` item to show no result message. |
| `inputLabelStyle`      | `No` | Adds style to `<label>` field |
| `inputLabelContainerStyle`    | `No` | Adds style to surrounding `div` of input label.|
| `customSpinnerStyle`          | `No` | Adds style to `span` to style the customized spinner.|
| `viewMoreStyle`      | `No` | Adds style to View More `li` item. |

```ts
customStyle: CustomStyleType = {
    inputFieldStyle: {color: '#FFFFFF' },
    dropdownListStyle: {padding: 2px }
}
```

```html
<Autocomplete
    :dropdownData="YOUR_DROPDOWN_DATA"
    :broadcastSelectedValue="YOUR_CUSTOM_FUNTION($event)"
    :objectProperty="'name'"
    :customStyle="customStyle">
</Autocomplete>
```