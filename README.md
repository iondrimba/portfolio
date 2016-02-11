# Portfolio 
Personal portfolio

[![Travis build status](https://travis-ci.org/iondrimba/Portfolio.svg?branch=master)](https://travis-ci.org/iondrimba/Portfolio) [![Coverage Status](https://coveralls.io/repos/github/iondrimba/Portfolio/badge.svg?branch=master)](https://coveralls.io/github/iondrimba/Portfolio?branch=master)

### Installation

```sh
$ git clone https://github.com/iondrimba/Portfolio.git
$ cd Portfolio
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
