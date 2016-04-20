# Gulp-autokit

use Gulp to automate your workflow.

## What does it do?
It autocompiles your scss files to css and also auto refreshes your browser when you save your html, scss and js files.

minimalistic easy to use with just three plugins.

```javascript
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

```

## Architecture



    your-project/
    │
    ├── package.json
    │
    ├── gulpfile.js
    │
    ├── node_modules/
    │
    └── app/
         ├── images/
         │
         ├── js/
         │    └── *.js
         │    
         ├── css/
         │    
         ├── sass/  
         │     └── *.scss
         │     
         └── index.html

## Quick start

You need to install Node and NPM if you haven't done that already.

```
cd your-project

$ npm install 
```
starting gulp

```
$ gulp

```
Now you're good to go.








