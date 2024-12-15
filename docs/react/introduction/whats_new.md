---
displayed_sidebar: reactSidebar
title: What's New ?
---

## Major changes in version >=2.0.0 ?

- Added `View More` to List dropdown at the end of the list as an alternative to call API when reaching the end of scroll with configurable options.
- Now the developers who consume this package can decide how they should trigger an API Call. Using `View More`, or triggering API Call when reaching end of scroll. Both can be configured as well. Refer below for more information.
- Renamed the internal class `loader`  to `autocomplete-plugin-loader` as `loader` class is too common name and may collide with other libraries.
- By default `showLoadingSpinner` marked as `true` in `2.0.1` . Spinner will be shown by default, if lazy loading / API calls are configured. It can be passed as `false` through input props if not required.
