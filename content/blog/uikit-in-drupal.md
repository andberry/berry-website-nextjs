---
title: 'How to integrate UIkit in Drupal'
abstract: 'Using the Drupal theme, loading it as library from CDN or install with npm and integrate in gulp workflow'
createdAt: 20210826
createdAtDisplay: 'September 13, 2021'
published: true
tags: [frontend]
heroImage: 'montreal-park.jpg'
---

[UIkit](https://getuikit.com/) is an amazing lightweight and modular front-end framework that can help you, frontend developer, a lot.

Super clean black/white style, it can be seen as a library of components you can integrate in your project.

Components list ranges from a sort of utility classes like "Align" or "Padding" to more complex and js driven building blocks like Accordion, Dropdown, Lightbox, Scrollspy and Slideshow just to cite a few.

## 1) Using the Drupal theme

The simplest way to start using UIkit in Drupal is to simply install the theme https://www.drupal.org/project/uikit

```bash
composer require 'drupal/uikit:^3.15'
```

You get the all the framework css and js loaded and also a useful bunch of views styles/formatters.

## 2) Loading it as library from CDN

A second way to integrate UIkit in your theme is to load it from CND defining a library in your theme.
Something like this (pay attention that this file must follow YAML 2 spaces indentation and that uikit library has to be included in .info.yml file):

```YAML
global-css:
version: 1.0
css:
theme:
css/style.min.css: { minified: false }
global-js:
version: 1.0
js:
js/app.min.js: {}
uikit:
js:
"//cdn.jsdelivr.net/npm/uikit@3.7.3/dist/js/uikit.min.js": { type: external, minified: true }
"//cdn.jsdelivr.net/npm/uikit@3.7.3/dist/js/uikit-icons.min.js": { type: external, minified: true }
css:
base:
"//cdn.jsdelivr.net/npm/uikit@3.7.3/dist/css/uikit.min.css": { type: external, minified: true }
```

You get the all the framework css and js loaded in your theme

## 3) Install with npm and integrate in scss/js

If you have a workflow tool or task runner in place I guess you'll prefer to install UIkit with npm and then integrate the scss and js parts.

Install framework with NPM

```bash
npm install -P uikit
```

CSS/Scss: where to put these code snippets actually depends on how you structured your scss files,
but the concept is that you need first to include variables and mixins (eg. \_settings.scss)

```scss
@import 'uikit/src/scss/variables';
@import 'uikit/src/scss/mixins';
```

and the you can include the CSS for the components you're using (eg. \_components.scss):

```scss
@import 'uikit/src/scss/components/visibility';
@import 'uikit/src/scss/components/accordion';
@import 'uikit/src/scss/components/animation';
```

JavaScript: simply import the framework (eg. in app.js)

```scss
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons);
```

This way you load all the JavaScript part of the framework but only the style files you're actually using in your frontend,
and you can easily get the framework css and js files bundles with your codebase (reducing the number of browser requests)
