---
displayed_sidebar: angularSidebar
title: Output Decorators
---

#### Output decorators
| Output    | Required  | Description |
| --------  | ------- | ------- |
|`emitSelectedValue` |`Yes` |Emits the selected dropdown value.  |
|`emitApiLoadEvent` |`No` | To load next set of dropdownData using API or any other external means. Emits event when end of scroll is reached.`triggerApiLoadEvent` needs to be set to true to emit this event. |
|`emitAutoCompleteOpenEvent` |`No` | Emits event when dropdown is opened or displayed. `triggerAutoCompleteOpenEvent` needs to be set to true to emit this event.|
|`emitClearSelectedEvent` |`No` | Emits event when selected value is cleared. `triggerClearSelectionEvent` needs to be set to true to emit this event.|
|`emitBlurEvent` |`No` | Emits event during focus out. `triggerBlurEvent` needs to be set to true to emit this event.|