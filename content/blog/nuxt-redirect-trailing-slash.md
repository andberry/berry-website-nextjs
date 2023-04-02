---
title: 'Nuxt.js: force trailing slash with a redirect'
abstract: 'Setup Nuxt.js with @nuxtjs/redirect-module to force a trailing slash with a 301 redirect'
createdAt: 20201012
createdAtDisplay: 'October 12, 2020'
published: true
tags: [javascript]
heroImage: 'montreal-metro.jpg'
---

In a recent Nuxt.js project I've been working at, a SEO requirement was that all URLs had to be **with** trailing slash.

We can accomodate this request simply configuring the **router** part of the **nuxt.config.js** file:

```json
router: {
    trailingSlash: true
}
```

But now if we call the URL without the trailing slash we're going to face a 404 page.

**One possible solution is to force the trailing slash with a 301 redirect**.
This is easility possible thanks to the **@nuxtjs/redirect-module** module: let's install it and what follows is all we need to do the job:

```json
redirect: [
    {
        from: '^.*(?&lt;!/)$',
        to: (from, req) => req.url + '/',
        statusCode: 301
    }
]
```
