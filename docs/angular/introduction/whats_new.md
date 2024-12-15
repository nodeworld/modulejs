---
displayed_sidebar: reactSidebar
title: What's New ?
---

## Major changes in version >=2.0.0 ?

- Search algorithm has been redefined without impacting prior versions.
- Added `View More` to List dropdown at the end of the list as an alternative to call API when reaching the end of scroll.
- Now the developers who consume this package can decide how they should trigger an API Call. Using `View More`, or triggering API Call when reaching end of scroll. Both can be configured as well. Refer below for more information.
- Renamed the internal class `loader`  to `autocomplete-plugin-loader` as `loader` class is too common name and may collide with other libraries.
- Updated scroll event and resize event by using `Renderer2` to efficiently manage the event listeners.
- Added ARIA label by introducing an input property `ariaViewMore`.
- Added keyboard navigation events to scroll through dropdown list and select the list when pressing Enter Key