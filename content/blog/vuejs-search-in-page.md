---
title: 'Search in page with Vue.js'
abstract: 'Using Vue.js to implement a simple but effective and usable search in page.'
createdAt: 20201120
createdAtDisplay: 'November 20, 2020'
published: true
tags: ['javascript']
heroImage: 'ottawa-rideau.jpg'
---

Vue.js is an outstanding library we can use to build complex frontend UI and/or apps, but it can also be used to implement small features even if we're working with a legacy/old project.

Imaging a page (eg. built from a CMS) with a list of documents and we want to give the user the power of a search feature.

**In Vue.js we should think, first of all, about data, so:**

1. Init the state (data) on mounted hook (populate the **"documents"** variable inxpecting and traversing the DOM
2. Create a computed value that will drive UI refresh (the **"searchResults"** variable)
3. Add a couple of methods to improve the accessibility (**handleClickOnBody** and **handleKeyUp**)

This is the final JavaScript code:

```javascript
var searchApp = new Vue({
    el: '#searchapp',

    data: {
        documents: [],
        searchString: '',
        searchResultsVisible: true,
    },

    mounted: function () {
        docsEls = document.querySelectorAll('.list__item');
        for (const item of Array.from(docsEls)) {
            this.documents.push({
                text: item.querySelector('.list__item__description').innerHTML,
            });
        }

        document.documentElement.addEventListener(
            'click',
            this.handleClickOnBody
        );

        document.addEventListener('keyup', this.handleKeyUp);
    },

    computed: {
        activeSearchString: function () {
            return this.searchString.length >= 3 ? this.searchString : '';
        },

        searchResults: function () {
            if (this.activeSearchString !== '') {
                return this.documents.filter(
                    (d) =>
                        d.text
                            .toLowerCase()
                            .includes(this.activeSearchString.toLowerCase()) ==
                        true
                );
            } else {
                return [];
            }
        },
    },

    methods: {
        handleClickOnBody: function (e) {
            const target = e.target;
            const searchEl = this.$refs.searchEl;

            if (target !== searchEl && !searchEl.contains(target)) {
                this.searchResultsVisible = false;
            } else {
                this.searchResultsVisible = true;
            }
        },

        handleKeyUp: function (e) {
            if (e.key === 'Escape') {
                this.searchResultsVisible = false;
            }
        },
    },
});
```

<a class="link--styled" href="https://codepen.io/aberry/pen/XWKvWBL" target="_blank">Here you can find a complete CodePen</a>
