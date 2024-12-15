---
displayed_sidebar: reactSidebar
title: Package Versions
---


## Version upgrade information

| Package version | Description | 
| :-------- | :-----------|
| `2.1.2`  | Recommended and stable version. Fixed a bug related to keyboard navigation. Now, keyboard navigation listeners will be removed after selection or blur. Added excape key keyboard event to close autocomplete on pressing escape. |
| 2.1.1  | Added keyboard navigation events to scroll through dropdown list. Refer changelog for more information. |
| 2.0.3 | Removed native javascript reference to get width of the div and implemented useRef. Fixed a minor bug related to width of the autocomplete dropdown list when using the module multiple times in the same component |
| 2.0.2 | Fixed a non-impact bug related to View More Input props. Added resize listener to adjust the width of dropdownlist during resize events. Resize event listener will be destroyed once dropdown list is closed on select or onBlur |
| 2.0.1 | Added View More feature for lazy loading API calls. Upgrading from lower versions to `2.0.1` is safe without any configuration change |
| 2.0.0  | Search algorithm has been updated for better search results. No change in types or schema. Upgrading from `1.0.1` to `2.0.0`is safe without any impact. |
| 1.0.1   | Autocomplete search package |