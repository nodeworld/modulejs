---
displayed_sidebar: angularSidebar
title: Input Decorators
---


## API Usage

#### Input decorators

| Input | Type  | Required | Description |
| -------- | ------- | ------- | ------- |
| `dropdownData` | `string[] or object[]`  | **Yes**. | Accepts array of strings or numbers or array of objects |  |
| `objectProperty` | `string` |**_Yes_** | Required only if `dropdownData` is object[]. Helps to display dropdown value in dropdown list. |
| `placeholder` | `string` | `No` | Custom placeholder for autocomplete input field. |
| `defaultValue` | `string` or `object` | `No` | To pre-select a value from dropdown. |
| `initialVisibleData` | `number`| `No` | Displays 1000 records in dropdown by default. Can be changed as per project requirement. |
| `scrollThreshold` | `number` | `No` | 3 by default. Helps to boost performance. It controls the scroll data and removes top or botton records during user scroll based on the scrollThreshold & initialVisibleData configured. Check below for more details. |
|`totalRecords` | `number` | `No` | If total number of records is known, totalRecords can be provided which will avoid extra events getting executed.
|`disableProperty` | `string` | `No` | To disable specific dropdown list item in dropdown. User cannot select the dropdown if disabled. This property can be used for object[] dropdown and `disableProperty` should be one of the boolean property in object|
|`disableListFn` |`Function` |`No` | If disabling a list item should be calculated dynamically using a function and custom code, assign customized function to `disableListFn`. disableListFn accepts two parameters (index, data)|
|`searchFn` |`Function` |`No` | Customized search function. Customized search function accepts one parameter, `event`. On keyUp, the customized search function will be called to perform custom execution.|
|`isNumber` |`boolean` |`No` | If the displayed list is number, then sending `isNumber` as true will help to search the list efficiently |
|`noSearchResultMessage` |`string` |`No` | By default **No results found** message will be displayed when search result is 0. It can be changed with this input property.  |
|`customTrackBy` | `Function` |`No` | Custom ngFor trackBy Function|
|`isAutoCompleteDisabled` |`boolean` |`No` | Default is `false`. When set to `true`, the input field gets disabled. |
|`isCustomSpinner` |`boolean` |`No` | Default is `false`. When set to `true`, custom spinner can be implemented with custom class. |
|`customClass` | `object` |`No` | Allows custom class styling at various dom levels. Check below for more information |
|`customStyle` | `object` |`No` | Allows custom ng-style. Check below for more information |
|`showdropDownArrow` | `boolean` |`No` | Default is `true`. Show or hide dropdown icon in autocomplete field.  |
|`showClearOption` |`boolean` |`No` | Default is `true`. Shows clear option to allow the user to reset or clear the selected value. |
|`showLoadingSpinner` | `boolean`|`No` | Default is `true`. Shows the spinner at the botton of the list during lazy loading API call. If set to `false`, spinner will not be shown. |
| `triggerBlurEvent`|`boolean` |`No` | Default is `false`. When set to `true`, it emits an output event `emitBlurEvent` during focusOut  |
|`triggerApiLoadEvent` |`boolean` |`No` | Default is `false`. If dropdown list is loaded through API via lazy loading, this can be set as true, it emits an event `emitApiLoadEvent`. When the output event is emitted, user can take care of loading the dropdown data further.|
|`triggerAutoCompleteOpenEvent` |`boolean` |`No` | Default is `false`. When set to `true`, it emits an output event `emitAutoCompleteOpenEvent` when auto-complete dropdown list opens. |
|`triggerSearchEvent` |`boolean` |`No` | Default is `false`. When set to `true`, emits an output event `emitSearchEvent` whenever user types and search. |
|`triggerClearSelectionEvent` |`boolean` |`No` | Default is `false`. When set to `true`, emits an output event `emitClearSelectedEvent` whenever selected field is cleared.  |
|`isScrollThresholdRequired`|`boolean`|`No` | Default is `true`. If initialVisibleData and scrollThreshold is performance calculation is not required, set it to `false`. See below for more information.|
|`inspectAutoCompleteList`|`boolean`|`No` | Default is `false`. When set to `true`, autocomplete dropdown will not be closed or hidden during onBlur or onFocusOut events. This is intended only for debugging and development purposes. For production it should be always `false` to avoid interruption. |
|`showViewMore`|`boolean`|`No` | Default is `true`. `View More` List will be shown at the end of dropdown if user has enabled lazy loading (`triggerApiLoadEvent`). `View More` will appear only when API call is to be executed. |
|`optViewMoreOnlyForApiCall`|`boolean`|`No` | Default is `false`. When set to `true`, API Call will not be executed on reaching the end of the scroll, instead `View More` button has to be clicked to call the API or any custom function. |
|`viewMoreText`|`string`|`No` | Default text is `View More`. It can be customized with this input property.|
