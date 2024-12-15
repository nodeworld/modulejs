---
displayed_sidebar: angularSidebar
title: Custom Spinner
---

## Adding custom Spinner

To add a custom spinner, do the following. Recommended to use custom spinner to have better control of project requirement.

Update @Input() properties like below

```ts
showLoadingSpinner = true; // Turn this ON so that module will show the spinner. By default it is ON (true)
```

```ts
isCustomSpinner = true;
```
```html
<ng-autocomplete
    [dropdownData]="YOUR_DROPDOWN_DATA"
    (emitSelectedValue)="YOUR_CUSTOM_FUNTION($event)"
    [showLoadingSpinner]="true"
    [isCustomSpinner]="true">
    <span customSpinner class="YOUR_CLASS"> </span>
</ng-autocomplete>
```

##### customSpinner in the span represents ng-content select attribute

## Using custom content in the input textfield

A flexible option is provided to add custom functionality in the input text field.

```html
<ng-autocomplete
    [dropdownData]="YOUR_DROPDOWN_DATA"
    (emitSelectedValue)="YOUR_CUSTOM_FUNTION($event)"
    [showdropDownArrow]="false"
    [showClearOption]="false">
    <span textField class="YOUR_CLASS">YOUR_CONTENT</span>
</ng-autocomplete>
```
`showdropDownArrow` and `showClearOption` can be set as false for better placement of the customized ng-content.

##### textField in the span represents ng-content select attribute