---
displayed_sidebar: angularSidebar
title: Classes and Styles
---

## CSS Classes used in npm-autocomplete-plugin html template

#### This is for informational purpose only. Be cautious if you are overriding these CSS as it may affect dropdown style if updated incorrectly.

###### It is always recommended to add class through customClass or customStyle Input() properties.

| Classes | Description | Comments |
| :-------- | :-----------| :-----------| 
| `auto-complete-textfield-container`    | Class of parent html div template | Able to override through `parentContainerClass` or `parentContainerStyle`  |
| `label-container`      |  Class of label tag |Able to override through `inputLabelContainerClass` or `inputLabelContainerStyle` |
| `label-value`      |  Class of `<label>` tag |Able to override through `inputLabelClass` or `inputLabelStyle` |
| `field-container`      |  Class of `div` that surrounds `input` field and autocomplete `li` | Able to override through `inputFieldContainerClass` or `inputFieldContainerStyle` |
| `auto-complete-textfield`      | Class of `input` text field| Able to override through `inputFieldClass` or `inputFieldStyle`
| `auto-complete-list`      |  Class of `div` that surrounds `li`|Able to override through `listContainerClass` or `listContainerStyle` |
| `unorder-list`      |  Class of `ul`  |Able to override through `dropdownUnorderedListClass` or `dropdownUnorderedListStyle` |
| `autocomplete-data-list`      |  Class of `li`  |Able to override through `disableListClass` or `dropdownListStyle` |
| `autocomplete-data-list noSearchResult`      |  Class of `li` if search result not found.  |Able to override through `noResultClass` or `noResultStyle` |

## Adding Custom CSS Class to autocomplete

#### Import CustomClassType from the module (Optional).


| CustomClassTypes              | Required    | Description |
| :--------                     | :-----------| :-----------|
| `parentContainerClass`        | `No` | Adds class to `div` surrounding the input field and dropdown list. |
| `inputFieldContainerClass`    | `No` | Adds class to the parent div of `input` field |
| `inputFieldClass`             | `No` | Adds class to `input textfield`|
| `listContainerClass`          | `No` | Adds class to `div` that surrounds `ul` of dropdown list. |
| `dropdownUnorderedListClass`  | `No` | Adds class to `ul` of dropdown list. |
| `dropdownListClass`           | `No` | Adds class to each `li` items|
| `noResultClass`               | `No` | Adds class to separate `li` item to show no result message. |
| `disableListClass`            | `No` | Adds class to each `li` items. Depends on `disableListFn` function or `disableProperty`  |
| `inputLabelClass`             | `No` | Adds class to `<label>` field |
| `inputLabelContainerClass`    | `No` | Adds class to parent div of `<label>` field |
| `viewMoreClass`               | `No` | Adds class to View More `li` item |


You can import `CustomClassType` Type into your app, to see the custom class types available. Its optional, but would be good to use. Write your custom class in global css file or use `::ng-deep` from specific components.

```ts
import { CustomClassType } from 'ng-autocomplete-plugin';
```

In your template, do the following:

```ts
customClassType: CustomClassType = {
    inputFieldClass: 'class1',
    dropdownListClass: 'class1 class2'
}
```

```html
<ng-autocomplete
    [dropdownData]="YOUR_DROPDOWN_DATA"
    (emitSelectedValue)="YOUR_CUSTOM_FUNTION($event)"
    [objectProperty]="'name'"
    [customClassType]="customClassType">
</ng-autocomplete>
```

## Adding Custom NgStyle to autocomplete

#### Import CustomNgStyleType from the module (Optional).


| CustomNgStyleTypes | Required | Description |
| :-------- | :-----------| :-----------|
| `parentContainerStyle`      | `No` | Adds style to `div` surrounding the input field and dropdown list. |
| `inputFieldContainerStyle`  | `No` | Adds style to the parent div of `input` field |
| `inputFieldStyle`      | `No` | Adds style to `input textfield`|
| `listContainerStyle`      | `No` | Adds style to `div` that surrounds `ul` of dropdown list. |
| `dropdownUnorderedListStyle`      | `No` | Adds style to `ul` of dropdown list. |
| `dropdownListStyle`      | `No` | Adds style to each `li` items|
| `noResultStyle`      | `No` | Adds style to separate `li` item to show no result message. |
| `inputLabelStyle`      | `No` | Adds style to `<label>` field |
| `inputLabelContainerStyle`    | `No` | Adds style to parent div of `<label>` field |
| `viewMoreStyle`      | `No` | Adds style to View More `li` item. |

You can import `CustomNgStyleType` Type into your app, to see the custom class types available. Its optional, but would be good to use.

```ts
import { CustomNgStyleType } from 'ng-autocomplete-plugin';
```

In your template, do the following:

```ts
customClassType: CustomNgStyleType = {
    inputFieldStyle: {color: '#FFFFFF' },
    dropdownListStyle: {padding: 2px }
}
```

```html
<ng-autocomplete
    [dropdownData]="YOUR_DROPDOWN_DATA"
    (emitSelectedValue)="YOUR_CUSTOM_FUNTION($event)"
    [objectProperty]="'name'"
    [customClassType]="customClassType">
</ng-autocomplete>

```
