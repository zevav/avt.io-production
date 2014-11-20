avt.io
======

# Using Grunt
Grunt.js is used in order to combine and compress CSS and JS files and to allow for header/footer templates without using HTML Includes or client-side javascript.

To get started using grunt:

1. Install node: http://nodejs.org
2. Install the grunt CLI: `npm install -g grunt-cli`
3. Install the specific grunt modules. First `cd` to the project directory, then run `npm install`

While developing, Grunt can be used in two modes. `grunt build` can be used to run the build task once without constantly watching. The watch task can be ended with `ctrl-c`.

To deploy, upload the `dist/` folder rather than the entire project folder.