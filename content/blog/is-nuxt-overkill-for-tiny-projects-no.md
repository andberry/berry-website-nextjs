---
title: 'Is Nuxt.js overkill for tiny projects? No!'
abstract: 'Using frameworks for small tasks can be seen overkill, but building good modern web websites/apps requires us to take into account lots of things.'
createdAt: 20201126
createdAtDisplay: 'November 26, 2020'
published: true
tags: [javascript]
heroImage: 'montreal-skyline.jpg'
---

Obviously this is my **humble**, yet definitive, **opinion**.

Well, as web developers, **choosing the right tools for the job** is an important part of our work time (as well as choose what to and what not to study).

A couple of weeks ago, a dead simple task came to me: realize an under-construction page for a client.
It's just a matter of a super easy html file, a dozen of line of css to layout a box centered in page, with logo and small text inside it, and no js at all.

Super simple.

But.

But we're in 2020 and these are the minimum requirements, even if we're working on a tiny page:

1. **Responsive**: it's crucial to give our users the best possible experience according to their device. Media queries are our friends, but handle them "in plain mode" is really a waste of time imho;
2. **Performance**: even if we have only one or two images in the page, we should optimize them and possibily reduce the number of requests and this means encoding in base64 and embedding them with data URIs when possible;
3. **DX**: Do you really want to manually reload your browser? I don't think it's a great idea and even if you're working on a tiny page it's easy to find yourself reloading browser hundreds of times;

**Using Nuxt.js for tiny projects can sound "too much".**

But with just one command "npx create-nuxt-app ." we ends up with a dev environment with:

1. Great DX: **an optimized webpack environment with HMR (Hot Module Replacement)**;
2. Great tools/libraries integration: **start working with Tailwind CSS in a bunch of minutes and get purge feature already setup for build step**;
3. Install '@aceforth/nuxt-optimized-images' module and you get instantly **image optimization and base64 encoding and data URIs images embedding**, at no additional costs or wasted time;

Here you can find my dead-simple repo i'm talking about: [Under Berry Construction on Github](https://github.com/andberry/under-berry-construction)
