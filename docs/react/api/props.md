---
displayed_sidebar: reactSidebar
title: Props Definition
---

## API

| Props | Type  | Required | Description |
| -------- | ------- | ------- | ------- |
| `dropdownData` | `string[], number[], object[] or any[]`  | **Yes**. | Accepts array of strings, numbers or array of objects. |  |
| `objectProperty` | `string` |**_Yes_** | Required only if `dropdownData` is object[]. `objectProperty` will determine the value to be displayed in dropdown. |
|`initialVisibleData`| `number` | `No` | `initialVisibleData` denotes the number of records that will be displayed in dropdown list. Default value is 1000. It can be customized as per project requirement or can be left untouched. |
|`broadcastSelectedValue`|`Function` |**Yes** | Custom function to broadcast the selected value when dropdown value is selected from list. Accepts one parameter which will give the selected value. |
| `placeHolder` | `string` | `No` | Custom placeholder for auto-complete input field. |
| `scrollThreshold` | `number` | `No` | 3 by default. Helps to boost performance. It controls the scroll data and removes top or botton records during user scroll based on the scrollThreshold & scrollData configured. Check below for more details. |
|`defaultValue`| `string` or `object` | `No` | `defaultValue` pre-populates the value in input textfield by matching the value from dropdown data. It can be a simple value or simple json object. For simple json object, `objectProperty` value should be available. |
|`totalRecords` | `number` | `No` | If total number of records is known, totalRecords can be provided which will avoid extra condtions that will be executed in the package.
|`disableProperty` | `string` | `No` | To disable specific dropdown list in dropdown from being selected. This property can be used when dropdownData is an object[] and the `disableProperty` should be a property name from the object which can determine whether the specific list should be disabled from selection. Eg: If an object conatins a property `disabled`, then this property name can be passed to `disableProperty` props to disable the list from selection when condition matches. |
|`disableListFn` |`Function` |`No` | If disable should be calculated dynamically using a function and custom code, assign customized function to `disableListFn`. disableListFn accepts two parameters (index, data)|
|`searchFn` |`Function` |`No` | Customized search function. Customized search function accepts one parameter, `event`. On keyUp, the customized search function will be called to perform custom execution.|
|`noSearchResultMessage` |`string` |`No` | By default **No results found** message will be displayed when search result is 0  |
|`isAutoCompleteDisabled` |`boolean` |`No` | By default value is false. If updated as true, the input fields gets disabled. |
|`customClass` | `object` |`No` | Allows custom class styling at various dom levels. Check below for more information|
|`customStyle` | `object` |`No` | Allows custom css style. Check below for more information |
|`showdropDownArrow` | `boolean` |`No` | Show or hide dropdown icon in autocomplete field. Default is `true`.  |
|`showClearOption` |`boolean` |`No` | Shows clear option to allow user to clear the selected value. Default is `true`. |
|`triggerOnFocusEvent`| `Function` |`No`|Triggers on-focus event when input field is focussed.`triggerOnFocusEvent` accepts a function as props. The function can have one event parameter (Eg: triggerOnFocusEvent(event)) and the parameter will be a focus event. By default, `triggerOnFocusEvent` will be undefined and will not be triggered until a function is assigned to it.|
| `triggerBlurEvent`|`Function` |`No` | Triggers blur event when input field is out of focus. `triggerBlurEvent` accepts a function as props. The function can have one event parameter (Eg: triggerBlurEvent(event)) and the parameter will be a blur event. By default, `triggerBlurEvent` will be undefined and will not be triggered until function is assigned to it.|
|`triggerApiLoadEvent` |`Function` |`No` | A custom function for lazy loading the dropdown data. `triggerApiLoadEvent` accepts a function as props. It triggers a custom function to call the API when the end of scroll is reached. Depends on `props.isApiLoad`. Pass `isApiLoad` as true if `triggerApiLoadEvent` function needs to be triggered. The custom function can have one parameter which would return an object with length of the dropdown data. This object can be used to calculate next paginated data, and using this param is optional. When lazy loading of the API is complete or all the dropdown data has been loaded, set `isApiLoad` as false, so that `triggerApiLoadEvent` will not be called. Alternatively instead of setting `isApiLoad` to `false`, you can also set `totalRecords`, so that the module does not trigger `triggerApiLoadEvent` event further|
| `isApiLoad` | `boolean` | `No` | Default value is false. This props is required if the dropdown data is being lazy-loaded. To trigger `triggerApiLoadEvent`, `isApiLoad` must be set to true. Once lazy loading or API calls are complete, set `isApiLoad` to false or set the total records so that the module does not trigger the lazy-load calls further. |
|`triggerClearSelectionEvent` |`Function` |`No` | Triggers custom function `triggerClearSelectionEvent(event)` input field is cleared.  |
|`isScrollThresholdRequired`|`boolean`|`No` | Default is true. If scrollData and scrollThreshold is performance calculation is not required, set it to false. See below for more information.|
|`inspectAutoCompleteList`|`boolean`|`No`|Default value is false. When set to true, it will not allow hiding the dropdown list on blur. This is helpful to inspect the dropdown list in dom and is recommended only for development.|
|`showInputlabel`|`boolean`|`No`|Default value is false. making it true will show the input text label.|
|`inputLabel`|`string`|`No`|Default value is `Select a value` and can be customized. `inputLabel` will be shown when `showInputlabel` is set to true.|
|`showLoadingSpinner` | `boolean`|`No` | Shows the spinner at the botton of the list if lazy loaded. Default is `false` |
|`isCustomSpinner`|`boolean`|`No`|Set as `true` to set customize spinner during lazy load or paginated API calls. Set your own class properties in `customClass.customSpinnerClass`. `showLoadingSpinner` must be set to `true` to show the spinner.|
|`aria`|`object`|`No`|Helps to set aria roles at various levels of DOM to provide Accessible Rich Internet Application. Check below for more details.|
|`optViewMoreOnlyForApiCall`|`boolean`|`No`|Default is `false`. When set to `true`, API Call will not be executed on reaching the end of the scroll, instead `View More` button has to be clicked to call the API or any custom function.|
|`showViewMore`|`boolean`|`No`|Default is `true`. `View More` List will be shown at the end of dropdown if user has configured lazy loading (`triggerApiLoadEvent` && `isApiLoad`). `View More` will appear only when API call is to be executed.|
|`viewMoreText`|`string`|`No`|Default text is `View More`. It can be updated through `viewMoreText` as per requirement|
