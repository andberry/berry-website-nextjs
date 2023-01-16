---
title: 'Eleventy (11ty) setup for multilingual component-based flexible pages'
abstract: "How to setup Eleventy (11ty) static site generator to create landing pages or one page websites with page content splitted in serveral files using reusable UI components"
createdAt: 20220311
createdAtDisplay: 'March 11, 2022'
published: true
tags: ['javascript']
---

## Intro
Such a huge hype about Eleventy (11ty) in the last year that I wanted to give it a try.

### Documentation
The documentations is definitely good, but it's lacking exactly what I was looking for: how to use structure multi-sections pages built using reusable UI components (hero, text, text-image, gallery, etc.).

I was able to find just a couple of devs asking for the same setup, and at the end I figured out that this tool is mainly designed to be used as a data-driven static generator with simple content structure: 1 to 1 relationship between content and template. 

Luckily, I found this interesting article, written by Laurence Hughes, that was my starting point for this setup: [Reusable code snippets and components in Eleventy](https://fuzzylogic.me/posts/reusable-code-snippets-and-components-in-eleventy/)

### Frontend toolchain and libraries
11ty is not coupled with any kind of frontend library or framework. No Sass compilation in place, no postcss, no babel, no webpack... nothing. No specific tool used by default, no toolchain setup for you: you are free to use whatever you want, but, at the same time, you're going to spend just a bit of time to setup whatever you want.

### Configuration file
Even if Eleventy can be used with zero configuration, be comfortable as early as possible with playing with its config file, since you'll need it to define custom collections, filters, basic setup (etc.)





## 11ty basic concepts
With 11ty, content files are called **templates**, and what I usually call templates are called **layouts**.

There are lots of engines available and you can even mix them.
I used Markdown for templates (content files), and Nunjucks for layouts (templates).

Some key points:
* by default every template you write automatically generates a final html page
* you use Front Matter to drive 11ty behaviours and define custom content you might need inside layouts
* you use the **layout** Front Matter key to indicate which layout has to be used to generate the page
* collections are groups of content you can play with using APIs: you can define collections in different ways: tags in Front Matter, tags in directory-specific json file, 11ty configuration



## Nunjucks basics
I love **component-based development**: the idea is that you have a piece of reusable encapsulated UI you can use thoughtout your project, passing the scoped data you want time by time.

With Twig this is typically implemented writing 1 markup file for each components (partial) and then including it using `include` and the `with only` keywords, passing the only data required by that component.

Nunjucks is a template language for JavaScript with syntax pretty similar to Twig, supporting template inheritance and partials definitions and includes, but one main difference I found, is that its `include` doesn't support that so-practical `with` keywork.

With Nunjucks the best way to write component based templates is to use the `macro` stratement.

```twig[macros.njk]
    {% macro field(name, value='', type='text') %}
        <div class="field">
            <input type="{{ type }}" name="{{ name }}" value="{{ value | escape }}" />
        </div>
    {% endmacro %}
```

Pay attention: `include` seems to do the job, but actually it's good to be used just for pieces of templates that don't require params. The problem is params scoping: you can try to use the `{% set %}` statement for "passing data" just before the include statement, but there is no scope: all variables you have set before the include call are visible inside the component.




## Structuring the content and layout for multi-sections page
For each page create one directory containing:

- one data file configuring 11ty to not generate a page for every file inside (`"permalink": false`) and create a collection, setting `tags` for every file inside the directory
- one file for each section of the page using a custom "clayout" Front Matter key to indicate the UI component to use
- one page file (template) "index.md" with permalink Front Matter key set to the page's URL you want
    



### Nunjucks and UI components
And this is how I structured the layouts part:
- 1 specific directory containing all reusable UI components markup
- 1 "macros" file defining all availble UI components using **include** and **macro** statements, to be used inside layouts files
- 1 template logic for/each cycle (DRY principle) to be used when cycling all different page setion files (collections) and rendering the relevant component



## Frontend toolchain
Gulp FTW here.

I used Gulp to compile scss files, process JavaScript files with Babel and bundle with rollup, and setup a watch task to process scss and js when there's an update source file.

All processed files (final style.min.css and app.min.js) are saved in a "processed" folder under the src/assets folder, and then 11ty is configured to watch for changes and simply copy those files.



## Multilanguage
Another common request is to manage i18n in your project.

As far as I know there's no official plugin for this, and as usual in JavaScript world, there are multiple ways of doing thigs. This is my approach: 

### Translating page content

- Create one directory for each language you want to support ("en", "fr"): it will contain all templates for that language
- Set the locale using a custom "lang" Front Matter key in templates: it will be used for getting the right content from multilanguage globals data files (labels, header, footer, navigation, etc...)

```md[/src/fr/index.md]
{
    ---
    layout: layouts/pages/home-fr.njk
    title: Homepage FR
    permalink: /fr/
    lang: fr
    ---
}
```

### Translating global content (static labels, navigations, etc.)
Structure your globals data files with multiple keys (one per language) and code your templates and partials to include the relavanta data only

```twig[/src/_data/globals.json]
    {
        "en": {
            "websitename": "Berry is the best",
            "footercopyright": "Foo bar"
        },

        "fr": {
            "websitename": "Berry est la meilleure ",
            "footercopyright": "Foo bar fr"
        }
    }
```

```twig[/src/_includes/layouts/base/navMain.njk]
    {% set navMain = navMain[lang] if lang else navMain['en'] %}

    <nav id="main-nav" class="c-nav-main u-show-on-desktop">
        <ul>
            {% for item in navMain %}
            [...]
        </ul>
    </nav>
```



## Show me the code!
Far from being perfect, here you can find my repo with all these things implemented: 

[https://github.com/andberry/berry-11ty](https://github.com/andberry/berry-11ty)

