---
title: "Multilanguage website with Nuxt.js"
abstract: 'Guide to setup Nuxt.js with nuxt-i18n module to have a website translated in 4 languages'
createdAt: 20201025
createdAtDisplay: 'October 25, 2020'
published: true
tags: [javascript]
---
## Summary
1. Install nuxt-i18n module
2. Edit nuxt.config.js
3. Create translation content folders structure
4. Translate global content
5. Translate pages content
6. Use translation strings
7. Multilanguage links
8. Language switcher



## 1. Install nuxt-i18n module
<pre><code class="bash">
npm install -P nuxt-i18n
</code></pre>



## 2. Edit nuxt.config.js
Add and configure the module in the 'modules' section of yout nuxt.config.js. You can find all the options and documentation [here](https://i18n.nuxtjs.org/options-reference).
<pre><code class="json">
modules: [
    ...
    [
        'nuxt-i18n',
        {
            locales: [
                {
                    code: 'en',
                    iso: 'en-US',
                    name: 'English',
                    file: 'en/en.js'
                },

                {
                    code: 'it',
                    iso: 'it-IT',
                    name: 'Italian',
                    file: 'it/it.js'
                },

                {
                    code: 'de',
                    iso: 'de',
                    name: 'German',
                    file: 'de/de.js'
                },

                {
                    code: 'es',
                    iso: 'es',
                    name: 'Spanish',
                    file: 'es/es.js'
                }
            ],
            defaultLocale: 'en',
            strategy: 'prefix',
            langDir: 'assets/content/',
            lazy: true,
            rootRedirect: 'en/',
            detectBrowserLanguage: false,

            vueI18n: {
                fallbackLocale: 'en',
                silentTranslationWarn: true
            }
        }
    ],
    ...
]
</code></pre>



## 3. Create translation content folders structure
The folder **'assets/content/'** will contain all translated content of the website.

For each language we'll have:
- a global/common set of translation strings (menu, header, footer, socials, common content)
- a specific translation file for every page in this website.
- content will be added in json files



### Folders creation
1. Create 'assets/content' folder
2. For each language create the relative language folder inside it:
    1. 'assets/content/en'
    2. 'assets/content/it'
    3. 'assets/content/de'
    4. 'assets/content/es'

Inside each language folder there will be:
1. the common lang file(en/en.js, it/it.js, de/de.js, es/es.js)
2. the 'parts' folder that will contain a file foreach page of the project and that will be reference inside the components .vue files.



## 4. Translate global content
Option 1: Inside the common translation files of each lang directly write the json containing translations.
You can use a plain key:value structure or organize strings in objects.

Example of 'en/en.js' file:
<pre><code class="json">
{
    "social-vimeo-url": "https://vimeo.com/berry",
    "social-twitter-url": "https://twitter.com/berry",
    "social-linkedin-url": "https://www.linkedin.com/company/berry",
    "forms": {
        "intro-text": "Want more information?",
        "name": "Name",
        "surname": "Surname",
        "company": "Company"
    }

}
</code></pre>

Option 2: Inside the common translation files of each lang (es. en/en.js) import tranlation content from other json files
<pre><code class="javascript">
import commonContent from './parts/common.json'
import socialsContent from './parts/socials.json'
import formsContent from './parts/forms.json'

export default {
    ...contentCommons, ...socialsContent, ...formsContent
}
</code></pre>



## 5. Translate pages content
Create one file for each page in your project and reference it in the **'i18n'** section of your .vue files, as follow:

Example of page-homepage.json:
<pre><code class="json">
{
    "meta-title": "Berry meta title",
    "meta-description": "Berry meta description",

    "hero": {
        "title": "Hi Berry!",
        "text": "This website is great",
        "button-video-url": "https://vimeo.com/123456/789",
        "button-video-text": "Watch the video",
        "image-alt": "Image alt"
    },

    "intro": {
        "title": "intro title",
        "text": "intro text Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    }

}
</code></pre>

load translations inside index.vue:
<pre><code class="javascript">
...
i18n: {
    messages: {
        'en': require('~/assets/content/en/parts/page-homepage.json'),
        'it': require('~/assets/content/it/parts/page-homepage.json'),
        'de': require('~/assets/content/de/parts/page-homepage.json'),
        'es': require('~/assets/content/es/parts/page-homepage.json')
    }
},
...
</code></pre>



## 6. Use translation strings
Inside **&lt;template&gt;** section of .vue file:
<pre><code class="html">
&lt;div class="intro"&gt;
    &lt;div class="intro__title">{{ $t('intro.title ')}}&lt;/div&gt;
    &lt;div class="intro__text" v-html="$t('intro.text')"&gt;&lt;/div&gt;
&lt;/div&gt;
</code></pre>

Inside **data** function in **&lt;script&gt;** section of .vue file:
<pre><code class="javascript">
hero: {
    src: 'super-hero.jpg',
    alt: this.$i18n.t('hero.image-alt'),
}
</code></pre>



## 7. Multilanguage links
Now, inside the project, every internal link should have multilang href.

So, replace this:
<pre><code class="html">
&lt;nuxt-link to="products-product1"&gt;
    {{ $t('products.product1.linktext') }}
&lt;/nuxt-link&gt;
</code></pre>

with this:
<pre><code class="html">
&lt;nuxt-link :to="localePath('products-product1')"&gt;
    {{ $t('products.product1.linktext') }}
&lt;/nuxt-link&gt;
</code></pre>



## 8. Language switcher
This is a simple implementation of a language switcher
<pre><code class="html">
&lt;template&gt;
    &lt;nav id="header__langs-menu"&gt;
        &lt;ul class="menu"&gt;
            &lt;li v-for="item in locales" :key="item.code"&gt;
                &lt;nuxt-link :to="switchLocalePath(item.code)">{{ item.code }}&lt;/nuxt-link&gt;
            &lt;/li&gt;
        &lt;/ul&gt;
    &lt;/nav&gt;
&lt;/template&gt;

&lt;script&gt;
data () {
    return {
        locales: this.$i18n.locales
    }
},
&lt;/script&gt;
</code></pre>
