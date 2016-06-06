# is-dev

> Check if you're on a development version or the live version of your site

[![Build Status](https://travis-ci.org/Haroenv/is-dev.svg?branch=gh-pages)](https://travis-ci.org/Haroenv/is-dev) [![npm version](https://badge.fury.io/js/is-dev.svg)](https://www.npmjs.com/package/is-dev)

A tiny script that displays a message if you're on the development version of a site, so you can visually distinguish it from the live version.

# Installation

`is-dev` is on npm, so installing it is as easy as doing:

```
$ npm install --save is-dev
```

# Usage

Include either `is-dev.js` via a script tag, or `require('is-dev')` in your script. After that you can call it like this (all options are optional):

[demo](https://haroen.me/is-dev/) and [full documentation](https://haroen.me/is-dev/doc/)

```js
isDev({
  dev: [
    '.dev',
    'localhost',
    'file:///'
  ], // parts of the url that can mean you're developing
  message: 'development',
  style: 'top-left',
  // top-left, top-right, bottom, top, none
  custom: 'display: block; background-color: red; font: Comic Sans MS'
  // custom css that extends the style
});
```

# Support

IE9 and up (array.map).

# License

Apache 2.0
