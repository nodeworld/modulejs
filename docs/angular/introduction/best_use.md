---
displayed_sidebar: angularSidebar
title: Make best use of module
---

## How to make best use of this package ?

Read the full documentation without skipping, to know the flexibility of this module and refer the examples provided. Apart from the general use, this package comes handy when

- Lazy loading is required. A custom function can be executed from the application which may be an API call with offset or paginated params or any other custom function that is suitable for the requirement.
- Effortless styling of the input field and dropdown using custom css, or with libraries like bootstrap, tailwind and so on.
- Handling large dataset with or without lazy load configuration
- When `triggerApiLoadEvent` is set to `true`, its developers responsibility to set it as `false` once the custom function is executed and expected result is achieved. 
- If `totalRecords` is known during the initialization of the module, the module will act pro-actively based on this input and will not call any custom functions once the `totalRecords` match the actual dropdownData and when scroll is complete.
