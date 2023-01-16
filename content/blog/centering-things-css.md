---
title: 'Centering Things in CSS'
abstract: 'Yet another article about different ways to center things in CSS: position absolute + translate, Flexbox, CSS Grid.'
createdAt: 20200901
createdAtDisplay: 'September 1, 2020'
published: true
tags: ['css']
---

As usual, as web developers, we have different ways to do the same thing, and centering items is a topic we face on daily basis. Fortunately we've moved from the prehistoric age of tables and float and today we can easily get support from standardized useful technologies that dramatically simplifies our job.

Yes, I'm talking about tranform properties, Flexbox and Grid CSS.

## Centering things horizontally

If we're going to center an inline element, it's just as simple as using the good old "text-align: center;" on container, and that's all:

<pre><code class="css">
.container{
    text-align: center;
}
.content{
    /* display: inline; */
}
</code></pre>

If we're going to center a block element, it's sufficient to set margin-left and margin-right to auto to it, but don't forget to set a width (or max-width) otherwise content will have the same width of container and it won't be possibile to see its centered position:

<pre><code class="css">
.content{
    width: 75%;
    /* max-width: 75%; */
    margin: 0 auto;
}
</code></pre>

## Centering things vertically

If we know the exact height of our content we can absolutely position it to 50% top, and apply a negative margin-top equal to half of its height:

<pre><code class="css">
.container{
    position: relative;
}
.content{
    height: 200px;
    position: absolute;
    top: 50%;
    margin-top: -100px; /* half of content height */
}
</code></pre>

But, if we don't know the exact height of our content, we can absolutely position it to 50% top and use transform to move it to top for half of its height:

<pre><code class="css">
.container{
    position: relative;
}
.content{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
</code></pre>

## Centering things horizontally and vertically width unknown width and height

If we don't know the exact height and width of our content we can absolutely position it to 50% top and left and use transform on both axis to "move it back top and left" of half of its width and height:

<pre><code class="css">
.container{
    position: relative;
}
.content{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</code></pre>

It's a very common situation (for me), so I created a usefull Sass mixin to be used on .content:

<pre><code class="scss">
@mixin berry-abs-center(){
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</code></pre>

## Using Flexbox

Flexbox makes centering things really easy.

Centering both horizontally and vertically a div with an unknown width and height requires only 3 lines of code:

<pre><code class="scss">
.container{
    display: flex;
    align-items: center;
    justify-content: center;
}
</code></pre>

## Using CSS Grid

Managing alignment of items is really easy also in CSS Grid:

<pre><code class="scss">
.container{

    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
}

.content{
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
}
</code></pre>
