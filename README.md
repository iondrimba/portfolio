# Portfolio 

[![Travis build status](https://travis-ci.org/iondrimba/portfolio.svg?branch=v2)](https://travis-ci.org/iondrimba/portfolio) [![Build Status: Windows](https://ci.appveyor.com/api/projects/status/32r7s2skrgm9ubva/branch/master?svg=true)](https://ci.appveyor.com/project/iondrimba/notifycss/branch/master)

### Installation

```sh
$ git clone https://github.com/iondrimba/portfolio.git
$ cd portfolio
$ npm install

$ gulp
```

__TODO:__
 * Write tests

__Features:__
 * Router system with pushstate (page.js)
 * Templating engine (handlebars.js)
 * Module system RequireJs

> In order to test if Pushstate is working
> you have to host it on apache so it can reads the .htaccess file

__Includes:__
  * BrowserSync
  * RequireJs
  * Sass
  * [NoJquery]
  * Uglify
  * Watch
  * CSSMin
  * Offline support (Service Workes)

__Gulp Tasks:__

 * gulp (default)
 * gulp prod

[NoJquery]:<https://www.npmjs.com/package/nojquery>
