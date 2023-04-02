---
title: 'var, let, const: declaring variables in JavaScript'
abstract: 'My 2 cents on the 3 different ways to declare variables in JavaScript.'
createdAt: 20200916
createdAtDisplay: 'September 16, 2020'
published: true
tags: ['javascript']
heroImage: 'garda5.jpg'
---

In Javascript we can declare variables using <strong>var</strong>, <strong>const</strong> and <strong>let</strong> keywords

## var

<strong>var</strong> is the old way (pre es6/es2015) of declaring variables. It's a "weak" variable declaration because it doesn't help us understanding if binding could change durign execution.

## let

We use <strong>let</strong> to declare bindings that could chage during execution (eg. a loop counter, or a variable used in math).

## const

<strong>const</strong> stands for constant. We use const for bindings that will not change during execution.

Pay attention: this means that identifiers declared with const cannot be re-assigned, but in case of objects we can change its attributes after binding:

```javascript
const str = "foobar"
str = "barfoo"
Uncaught TypeError: Assignment to constant variable.

const obj = { foo: 'foo', bar: 'bar' }
obj = { foo: 'foo2', bar: 'bar2' }
Uncaught TypeError: Assignment to constant variable.
obj.foo = 'foo3'
obj
{ foo: 'foo3', bar: 'bar' }
```

## Scoping

Variables declared with <strong>var</strong> are only function-scoped or globally-scoped.

On the other end, the scope of variables declared with <strong>const</strong> and <strong>let</strong> is the enclosing block (code between curly braces { } ) and not the whole function.

## Global object (window)

Variables declared outside functions (aka in the top level of program) with <strong>var</strong> become properties of the global object (window), while variables declared with <strong>let</strong> or <strong>const</strong> don't.

```javascript
var foo = 'foo';
let bar = 'bar';
window.foo;
('foo');
window.bar;
undefined;
```

## Conclusion

-   I don't use <strong>var</strong> anymore
-   I use <strong>let</strong> only when it's required that binding can change during execution (eg. loop variables)
-   I use <strong>const</strong> almost for everything
