---
displayed_sidebar: reactSidebar
title: Using the module
---

## Using the module

Please import Autocomplete Module into your component.


```js
import { Autocomplete } from 'react-autocomplete-plugin';
```
In your HTML template

For dropdown string array,Eg: ["Apple", "Banana", "Kiwi"], do as below.

```html
<Autocomplete
    dropdownData="YOUR_DROPDOWN_DATA"
    broadcastSelectedValue="YOUR_CUSTOM_FUNTION($event)">
</Autocomplete>
```
For dropdown object array, Eg: `[{"name": "Alex"}, {"name": "John"}]`, do as below.

```html
<Autocomplete
    dropdownData="YOUR_DROPDOWN_DATA"
    broadcastSelectedValue="YOUR_CUSTOM_FUNTION($event)"
    objectProperty="'name'">
</Autocomplete>
```

## Setting `scrollThreshold` & `initialVisibleData` for maximizing performance

By default, `initialVisibleData` is set to 1000 and `scrollThreshold` is set to 3. It can be customized as per requirement.

#### What is `scrollThreshold` & `initialVisibleData`?

Both `scrollThreshold` & `initialVisibleData` helps to improve virtual scrolling for better performance.

`initialVisibleData` is the number of records / data that will be loaded virtually during initial load.

Consider, there are 5000 records to be shown. `initialVisibleData` is 1000 and `scrollThreshold` is 3.

During initial load, dropdown list will show 1000 records. When user reaches the end of scroll, the formula will be calculated based on `initialVisibleData` & `scrollThreshold` and number of filteredData records.

```js
Math.ceil(filteredData.length /scrollThreshold);

Math.ceil(1000/3);
```
If calculated result does not exceed `initialVisibleData`, next set of data will be loaded. And now the dropdown list(filteredData) will hold 2000 records.

Similary same calculation will be performed during the end of scroll and when the result exceeds `initialVisibleData`, first set of records will be removed from the dropdown list and next set of records will be loaded everytime, to improve performance.

When `scrollThreshold` is set to 1, the virtual dropdown list will hold the records based on `initialVisibleData` configuration. When end of scroll is reached, the current set will be replaced by next set.

`initialVisibleData` & `scrollThreshold` does not affect or mutate original data and will update only the virtually filtered data.

`initialVisibleData` & `scrollThreshold` is customizable based on project needs. If this performance calculation is not required, set `isScrollThresholdRequired` to `false`.

