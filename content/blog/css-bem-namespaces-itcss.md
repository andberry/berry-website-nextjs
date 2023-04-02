---
title: 'BEM, CSS Namespaces and ITCSS'
abstract: 'How to make frontend code more readable and maintaininable, because CSS is easy, but looking after it, is not'
createdAt: 20211024
createdAtDisplay: 'October 24, 2021'
published: true
tags: ['css', 'frontend']
heroImage: 'halifax-public-gardens.jpg'
---

> because writing CSS is easy; looking after it is not.
>
> -- [csswizardry](https://twitter.com/csswizardry)

Yes, even though currenly there are lots of tools involved in CSS landscape nowadays, it's a pretty easy language to start with, and due to its design (pitfalls ?) it's also pretty easy to find yourself soon wasting time on deciding classes names and struggling to make your code more maintainable and scalable.

Basically HTML and CSS shares classes (and ids) to shape the final UI and reusing classes being sure to do exactly what you want, where you want, without introducing problems in a totally different part of the ui requires you, developer, to be really accurate/diligent.

Methodologies, naming conventions and architectures help you a lot.

This is what is currently helping me a lot.

## BEM

Block Element Modifier is a methodolgy, or a naming convention suggestion that **helps you giving classes a role, relationship, responsibilities and states** in a clear way.

Definitely a way to save time when deciding class names.

-   **Block**: the parent, the standalone entity that has a meaning by itself (top level abstraction of your component)
-   **Element**: a part of the block, without meaning standalont by itself (a child item)
-   **Modifier**: a flag, a variation, a state to a block or element

Here is an example of BEM applied to a button

```html
<a class="button button--big">
    <span class="button__icon"></span>
</a>
```

```css
.button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    padding: 8px 12px;
}
.button__icon {
    margin-right: 6px;
    font-size: 0.5rem;
}
.button--big {
    padding: 12px 16px;
    font-size: 20px;
}
```

## CSS Namespaces

How many times have you looked at a piece of HTML only to wonder:

-   which classes do what
-   which classes are related to each other
-   which classes are optional
-   which classes are recyclable
-   which classes can you delete, and so on?

A lot of times, I bet.

A CSS Namespace will tell you exactly how a class behave in a more global sense.

Again, this methodolgy is meant to be used **when deciding class names**.

ere are the individual namespaces and a brief description.

### Object: o-

A class name that starts with "o-" is an **Object**, an **abstract layout implementation**. Used in any number of unrelated contexts: tread carefully.

Eg. **o-grid, o-sidebar-left**

### Component: c-

A class name that starts with "c-" is a **Component**: this is a concrete, **implementation-specific piece of UI**.

Eg. **c-hero, c-card**

### Utility: u-

A class name that starts with "u-" is a **Utility** class. It has a **very specific role** and it can be **reused** and is **not tied to any specific piece of UI**.

Eg. **u-color-primary, u-text-center**

### Theme: t-

A class name that starts with "t-" adds a **adds a theme to a view**. Overrides default style due to the presence of a theme.

Eg. **t-light, t-saint-valentine**

### State: is- / has-

A class that starts with **is-** or **has-** indicates that this piece of UI is currently styled a certain way because of a state or condition. Used everywhere, not tighten to specific UI block

Eg. **is-active, has-2-items**

### Javascript Hooks: js-

A class that starts with - **js-** indicates that this piece of the DOM has some JavaScript binds onto it.

Eg. **js-carousel, js-accordion**

## ITCSS: Inverted Triangle CSS

It helps us to **organize our CSS files** to better deal with CSS specifics/issues/pitfalls like:

-   global namespace
-   cascade
-   selectors specificity.

At the end, we split CSS properties based on their level of specificity and importance.

<img src="/images/itcss.svg" style="background-color: white; padding: 2rem; margin-bottom: 3rem;"/>

Going from top to bottom symbolizes an increase in specificity, and each subsection of the triangle may be considered a separate file or group of files.

My personal implementation:

-   **1-settings**: sass variables: _font, colors, spacings_
-   **2-tools**: mixins and functions: _bg-image(), abs-center()_
-   **3-base**: generic + elements, normalize/reset + base html elements style without classes: _body, h1, table_ (this is the first CSS output)
-   **4-layout**: (remember objects?) abstract layouts, unstyles patterns: _grid, layout-sidebar, media_
-   **5-components**: style for a specific piece of UI: _c-hero, c-footer_
-   **6-modules**: aggregation of modules: _c-cards-list, c-cards-carousel_
-   **7-trumps/utilities**: utilities and helper classes with ability to override anything which goes before, all **CMS specific stuff like base overrides, views, specific page style**

## Links

-   My ITCSS Github repo: https://github.com/andberry/berry-itcss
-   My Component-based Drupal 8/9 theme implemented with ITCSS: https://github.com/andberry/berrydrupal
-   Namespaces Article from CSSWizardry: https://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/
