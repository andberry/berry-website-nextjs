---
title: 'Component-Based Frontend in Drupal'
abstract: 'What is Component-Based Frontend Dev? Why it is worth using it? How to implement it in Drupal?'
createdAt: 20210826
createdAtDisplay: 'August 16, 2021'
published: true
tags: [frontend, cms]
heroImage: 'halifax-cruise-ship.jpg'
---

## What is Component-Base Frontend Development

First of all, **Component-Based is an approach to UI Design and Development**.

Shortly, your website is no more designed as a set of pages, but as a list of small and reusable blocks (components).
In other words, your pages become "simply" compositions of these blocks, sorting them in different order.

Components are not tied to specific page or sub-page but should be reused throughout the whole website.

If you're implementing a theme for a CMS, it's up to you to decide to use components to just build a "fixed" set of templates or use them to let the client build pages in a flexible sort-of-composer way:
you can use Paragraphs in Drupal, Matrix field in Craft CMS or Flexible Content field type of WordPress ACF Pro plugin just to cite a few.

This is an example list of UI components:

-   hero
-   gallery
-   card
-   cards
-   cards-carousel

The actual names of your components is up to you, designers and developers. They should be as more abstract as possible, but I suggest you to find a good compromise avoiding overthinking.

As I said before, Component-Based approach is not only a dev-tech-code thing, but it first involves designers.
From the design point of view, **the best is to have a complete and clear collection of all components involved in the project, and then the actual design of pages**.

As a developer you start coding first by building the collection of all components and then you can go on building pages.

In my humble opinion this paradigm is amazing when working with a CMS since **it lets you write the frontend code you want detached from the underlying CMS, in a sort of decoupled way**: this way CMS becomes more your source of data rather then a magic box where your markup comes from.

Yes, if you're used to just style the HTML coming from the default templates of your CMS, this approach is going ask you to write more html, in some cases lots of templates (Drupal), but you'll have full control over it and it'll be easier to integrate 3rd party frontend libraries/components.

Actual implementation details depend on the CMS you're building the frontend for, but more or less this is path for the win: **you first code the abstract components, then you connect dynamic data coming from the CMS to the components params/props, and then you build the page**.

## Why you should start using it

Switching to a Component-Based Design and Development paradigm means:

1. more collaboration between designers and developers at the early stages of the project;
2. developers can concentrate on implementing pieces of UI unchained from the underlying CMS used: your frontend code is less dependant by the CMS, so you're free to use whatever markup/classes/architecture you want;
3. you can implement a style guide shared between the team that can help a lot in terms of keeping consistency during the project
4. your client or content editor people will easily get one "flexible" page template rather than a set of prefixed page templates. I guess it's a great value added to the project in the sense that your clients will be able to build whatever kind of page they'd like in the future just using and rearranging the building blocks.

## How to implement Component-Based Frontend Development in Drupal

This is my way of implementing Component-Based Frontend Dev in Drupal.

1. **Markup (HTML)**: components are implemented as Twig files, and live in '/templates/components' folder inside your theme folder.
2. **CSS**: a separate scss file for each component (I love ITCSS architecture and I use gulp and sass to build the final compressed css file). BEM methodology drives me for classes names.
3. **JavaScript**: when required, JavaScript is implemented as ES6 module and bundled with other modules (using gulp, babel and rollup for the build). Using CSS classes with "js-" namespace is a great way to target blocks from JavaScript (eg. js-carousel)

This is an example of the markup of the hero component:

```twig
<section class="c-hero js-hero">
    <div class="c-hero__bgimage" style="background-image: url('{{ image }}')" ></div>
    <div class="c-hero__overlay"></div>
    <div class="c-hero__content">
        <div class="o-container o-grid">
            {% if title %}
                <h1 class="c-hero__title">{{ title }}</h1>
            {% endif %}

            {% if text %}
                <div class="c-hero__text">
                    {{ text }}
                </div>
            {% endif %}
        </div>
    </div>
</section>
```

As you can see this component is expecting to receive just 3 parameters/data/props: **image, title and text**.
I'm able to use the markup I want with all the classes and methodologies / architectures I want: I'm using BEM, with namespaces and in particular in this case I'm using the 'js-hero' class to target this block from JavaScript.

This is an excerpt of the related Scss file:

```css
.c-hero {
    padding-top: $space_xl;
    padding-bottom: $space_2xl;
    position: relative;

    @include mq(lg) {
        padding-top: $space_2xl;
        padding-bottom: $space_3xl;
    }
}

.c-hero__bgimage {
    @include bg-image();
    @include abs-fill();
}

.c-hero__title {
    @include fs1();
    color: $color_white;
}
```

## Connecting Components to Drupal

And now the most complicated part: passing data coming from Drupal to components as parameters/data/props.

Inside each specific Drupal Twig file I simply go with a Twig include statement passing an object containing relevant data coming from fields:

```twig
{% include '@berrytheme/components/c-hero.html.twig' with {
    'title': content.field_title,
    'text': content.field_text,
    'image': content.field_image.0
}%}
```

The "specific Drupal Twig file" depends on how you structured the content, but this can be easily done for:

-   nodes templates (eg. node--page.html.twig)
-   views templates (eg. views-view-fields--hero.html.twig)
-   paragraphs templates (eg. paragraph--card.html.twig)

Often the tricky and time wasting part is to access field plain value.

If you've ever worked with Craft CMS you know that accessing field values with this CMS is straightforward thanks to their amazing Twig API, but in Drupal it's not so easy.

**Drupal makes the assumption you usually don't want plain value from a field to be used directly in Twig templates, but you usually want a formatted value or worse a prebuit markup depending on the field formatter and the templates coming from modules and base theme you're using**.

So, this is my short list of code snippets to access various fields type data:

### simple text field (plain or long/html)

```twig
{{ content.field_content }}
```

### single image field

```twig
{{ content.field_image.0 }}
```

### building a custom markup for a multi image field (pay attention: you have to use node.field_gallery and not content.field_gallery)

```twig
    {% set cdata = [] %}
    {% for item in node.field_gallery %}
        {% set cdata = cdata|merge([
            {
                'image_src': item|file_uri|image_style('crop_gallery'),
                'image_alt': item.alt,
                'link': item|file_uri|image_style('wide')
            }
        ]) %}
    {% endfor %}

    {% include '@berry/components/c-gallery.html.twig' with {
        'title': content.field_title,
        'items': cdata
    }%}
```

And then inside c-gallery.html.twig

```twig
    {% for item in items %}
        <a href="{{ item.link }}" class="c-gallery__link">
            <img src="{{ item.image_src }}" alt="{{ item.image_alt }}" class="c-gallery__img">
        </a>
    {% endfor %}
```

### url and text from link field type

```twig
<a href="{{ content.field_link.0['#url'] }}" class="c-button">
    {{ content.field_link.0['#title'] }}
</a>
```

### File field with description

```twig
{% set file_url = file_url(node.field_file.0.entity.uri.value) %}
{% set file_desc = (node.field_file.0.description) ? node.field_file.0.description : node.field_file.0.entity.filename.value %}
<a href="{{ file_url }}" class="c-button--light">{{ file_desc }}</a>
```

### Interesting links

-   https://www.droptica.com/blog/component-based-design/
-   https://www.cmsdrupal.com/blog/how-component-based-approach-speeds-your-ui-design-process
