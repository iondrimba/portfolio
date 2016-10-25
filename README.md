# Portfolio 
Personal portfolio

[![Travis build status](https://travis-ci.org/iondrimba/portfolio.svg?branch=v2)](https://travis-ci.org/iondrimba/portfolio) [![Build Status: Windows](https://ci.appveyor.com/api/projects/status/32r7s2skrgm9ubva/branch/master?svg=true)](https://ci.appveyor.com/project/iondrimba/notifycss/branch/v2)

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

__Testing:__
 * $ npm test

__Includes:__
  * BrowserSync
  * RequireJs
  * Backbone 
  * Sass
  * [NoJquery]
  * Imagemin (images optimization)
  * Uglify
  * Watch
  * CSSMin

__Gulp Tasks:__

 * gulp (default)
 * gulp prod

__Structure:__

````bash
├── PSD/
├── fonts/
├── prototype/
├── public/
│    ├─── css/  (.gitignored)
│    ├─── images/
│    ├─── scripts/  (.gitignored)
│    ├─── .htaccess
│    └─── index.html
│── src/
│    ├── scripts/
│    └── styles/
│    └── templates/
│── tasks/
│
│── .gitignore
│── README.md
│── gulpfile.js
│── package.json
│── r.js (requirejs optimizer)
└── text.js (requirejs import text files)
````

[NoJquery]:<https://www.npmjs.com/package/nojquery>
