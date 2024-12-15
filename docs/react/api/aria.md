---
displayed_sidebar: reactSidebar
title: ARIA Accessbility
---

## Adding Accessible Rich Internet Applications (ARIA)

#### ARIA provides easy access to the content for people with disabilities with help of screen reader.

Please note that, if you are using JSX template, you may not be able to import the type CustomAriaType. However you can refer this documentation and pass the custom styles without importing type.

#### Import CustomAriaType from the module (Optional).

```js
import { CustomAriaType } from 'react-autocomplete-plugin';
```

| Attributes | Required | Description |
| :-------- | :-----------| :-----------|
| `ariaRole`            | `No` | Adds ARIA role  to `input textfield`. Default value is `textbox`. |
| `ariaRoleDescription` | `No` | Adds ARIA role description to `input textfield`. Default value is `Autocomplete input field`. |
| `ariaInputField`      | `No` | Adds ARIA label  to `input textfield`|
| `ariaNoSearchResult`  | `No` | Adds ARIA label to no result found `li` item|
| `ariaULList`          | `No` | Adds ARIA label to `ul` list item |
| `ariaListContainer`   | `No` | Adds ARIA label to list container `div`. |
| `ariaInputLabel`      | `No` | Adds ARIA label to `label field`. |
| `ariaViewMore`        | `No` | Adds ARIA label to `View More` li item. |
