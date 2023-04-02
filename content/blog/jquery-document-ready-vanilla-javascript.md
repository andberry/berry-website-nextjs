---
title: 'jQuery $(document).ready() in vanilla JavaScript'
abstract: 'How to replace the must used jQuery method with vanilla JavaScript'
createdAt: 20210804
createdAtDisplay: 'August 04, 2021'
published: true
tags: ['javascript']
heroImage: 'ottawa-bridge.jpg'
---

**jQuery's $(document).ready()** method allows us to safely run code only once **the DOM is loaded and parsed**.

Not to be confused with **$( window ).on( "load")**, to be used if we want to run code only if the **whole page content (DOM, and assets as well) is loaded** in the browser.

We can achieve the same result with vanilla js and Web APIs, in particular using:

-   Window: DOMContentLoaded event
-   document.readyState

The tricky part is considering that when the browser runs our code it may have already loaded and parsed the DOM, so the best practice is to first check the document.readyState variable.

Here is the code:

```javascript
/*
    https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
    - The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed,
    without waiting for stylesheets, images, and subframes to finish loading.
    - A different event, load, should be used only to detect a fully-loaded page.

    https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState
    - loading: The document is still loading.
    - interactive: The document has finished loading and the document has been parsed but sub-resources such as scripts, images, stylesheets and frames are still loading.
    - completeThe document and all sub-resources have finished loading. The state indicates that the load event is about to fire.
*/

function doOnDocumentLoaded() {
    loaderInit();
    carouseslInit();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', doOnDocumentLoaded);
} else {
    doOnDocumentLoaded();
}
```

[And here is my gist](https://gist.github.com/andberry/c6995034eb85e04b141b6a7746ed63a1)
